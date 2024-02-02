import { message } from "antd";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { db } from "../../firebase";
import { COMMENT_FORM_MODAL } from "../Comments";
import { useModal } from "../common";

export const useForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({ name: "", password: "", content: "" });
  const [isSubmitting, setSubmitting] = useState(false);

  const { unmount } = useModal();

  const validateForm = () => {
    let newErrors = { name: "", password: "", content: "" };
    let isValid = true;

    if (!name) {
      newErrors.name = "이름을 입력해주세요";
      message.error(newErrors.name);
      isValid = false;
    }

    if (!password) {
      newErrors.password = "비밀번호를 입력해주세요";
      message.error(newErrors.password);
      isValid = false;
    }

    if (!content) {
      newErrors.content = "내용을 입력해주세요";
      message.error(newErrors.content);
      isValid = false;
    }

    if (content.length > 100) {
      newErrors.content = "내용은 최대 100자까지 입력 가능합니다";
      message.error(newErrors.content);
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitting(true);

      try {
        await addDoc(collection(db, "comments"), {
          uuid: uuid(),
          name: name,
          password: password,
          content: content,
          createdAt: serverTimestamp()
        });

        message.success("축하글이 성공적으로 전달되었습니다.");

        setName("");
        setPassword("");
        setContent("");

        unmount(COMMENT_FORM_MODAL);
      } catch (error) {
        message.error("오류가 발생했습니다. 다시 시도해주세요.");

        setSubmitting(false);
      }
    }
  };

  return { name, setName, password, setPassword, content, setContent, handleSubmit, isSubmitting };
};
