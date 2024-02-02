import { message } from "antd";
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { Form, PasswordForm } from "../Form";
import { useModal } from "../common";
import { CommentType } from "./Comments.types";

export const COMMENT_FORM_MODAL = "COMMENT_FORM_MODAL";
export const PASSWORD_FORM_MODAL = "PASSWORD_FORM_MODAL";

export const useComments = () => {
  const { mount, unmount } = useModal();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [selectedComment, setSelectedComment] = useState<CommentType | null>(null);

  const clickModalOpenHandler = () => {
    mount(<Form />, { id: COMMENT_FORM_MODAL, type: "bottom" });
  };

  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as CommentType)));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const deleteComment = async (id: string) => {
    try {
      await deleteDoc(doc(db, "comments", id));
      setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
    } catch (error) {
      console.error("Failed to delete comment:", error);
      message.error("삭제 중 오류가 발생했습니다");
    }
  };

  const handleDelete = (comment: CommentType) => {
    setSelectedComment(comment);
    mount(
      <PasswordForm
        onSubmit={async (password) => {
          if (password === comment.password) {
            await deleteComment(comment.id);
            unmount(PASSWORD_FORM_MODAL);
          } else {
            message.error("비밀번호가 일치하지 않습니다.");
          }
        }}
      />,
      { id: PASSWORD_FORM_MODAL, type: "bottom" }
    );
  };

  return { comments, handleDelete, clickModalOpenHandler };
};
