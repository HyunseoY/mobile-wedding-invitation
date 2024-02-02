import { message } from "antd";
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { Flex, FlexColumn } from "../../styles/mixins";
import { Form, PasswordForm } from "../Form";
import { Button, Text, Title, useModal } from "../common";
import * as Styled from "./Comments.styles";
import { CommentType } from "./Comments.types";

export const COMMENT_FORM_MODAL = "COMMENT_FORM_MODAL";
export const PASSWORD_FORM_MODAL = "PASSWORD_FORM_MODAL";

export const Comments = () => {
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

  return (
    <Styled.Container>
      <Title subTitle="GUESTBOOK" title="방명록" />

      <Styled.CommentWrapper>
        {comments.map((comment) => (
          <Styled.CommentBox key={comment.id}>
            <Flex justify="between">
              <Text text={comment.name} />
              <Styled.DeleteButton onClick={() => handleDelete(comment)} />
            </Flex>

            <Text text={comment.content} />
          </Styled.CommentBox>
        ))}
      </Styled.CommentWrapper>

      <FlexColumn align="center" marginTop={35} gap={10}>
        <Text text="신랑, 신부에게" />
        <Text text="축하 메세지를 남겨보세요" />
        <Button
          size="medium"
          text="방명록 작성하기"
          margin="3vh 0 0 0"
          onClick={clickModalOpenHandler}
        />
      </FlexColumn>
    </Styled.Container>
  );
};
