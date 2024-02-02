import { Flex } from "../../styles/mixins";
import { Text } from "../common";
import { useForm } from "./Form.hooks";
import * as Styled from "./Form.styles";

export const Form = () => {
  const app = useForm();

  return (
    <Styled.Container>
      <Text text="방명록(축하글) 작성" color="realBlack" />

      <Styled.Line />

      <Styled.CommentForm onSubmit={app.handleSubmit}>
        <Styled.ItemBox>
          <Flex align="center" justify="between">
            <Flex>
              <Text text="이름" fontSize="14px" color="realBlack" />
              <Styled.Dott />
            </Flex>

            <Styled.Input
              placeholder="이름을 입력해주세요"
              value={app.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => app.setName(e.target.value)}
            />
          </Flex>
        </Styled.ItemBox>

        <Styled.ItemBox>
          <Flex align="center" justify="between" gap={5}>
            <Flex>
              <Text text="비밀번호" fontSize="14px" color="realBlack" />
              <Styled.Dott />
            </Flex>

            <Styled.Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={app.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => app.setPassword(e.target.value)}
            />
          </Flex>
        </Styled.ItemBox>

        <Styled.ItemBox>
          <Flex align="start" justify="between">
            <Flex marginTop={5}>
              <Text text="내용" fontSize="14px" color="realBlack" />
              <Styled.Dott />
            </Flex>

            <Styled.TextArea
              placeholder="내용을 입력해주세요 (최대 100자)"
              value={app.content}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                if (e.target.value.length <= 100) app.setContent(e.target.value);
              }}
            />
          </Flex>
        </Styled.ItemBox>

        <Styled.SubmitButton disabled={app.isSubmitting}>
          신랑 & 신부에게 축하글 전달하기
        </Styled.SubmitButton>
      </Styled.CommentForm>
    </Styled.Container>
  );
};
