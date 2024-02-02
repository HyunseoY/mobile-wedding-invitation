import { useState } from "react";
import { Text } from "../common";
import * as Styled from "./Form.styles";
import { PasswordFormProps } from "./Form.types";

export const PasswordForm: React.FC<PasswordFormProps> = ({ onSubmit }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(password);
  };

  return (
    <Styled.Container>
      <Text text="비밀번호 확인" color="realBlack" />

      <Styled.Line />

      <Styled.CommentForm onSubmit={handleSubmit}>
        <Styled.ItemBox>
          <Styled.Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Styled.ItemBox>

        <Styled.SubmitButton disabled={!password}>확인</Styled.SubmitButton>
      </Styled.CommentForm>
    </Styled.Container>
  );
};
