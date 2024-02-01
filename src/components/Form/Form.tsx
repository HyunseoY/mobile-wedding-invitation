import { Flex } from "../../styles/mixins";
import { Text } from "../common";
import * as Styled from "./Form.styles";

export const Form = () => {
  return (
    <Styled.Container>
      <Text text="방명록(축하글) 작성" color="realBlack" />

      <Styled.Line />

      <Styled.ItemBox>
        <Flex align="center" justify="between">
          <Flex>
            <Text text="이름" fontSize="14px" color="realBlack" />
            <Styled.Dott />
          </Flex>

          <div>
            <Styled.Input placeholder="이름을 입력해주세요" />
          </div>
        </Flex>
      </Styled.ItemBox>

      <Styled.ItemBox>
        <Flex align="center" justify="between" gap={5}>
          <Flex>
            <Text text="비밀번호" fontSize="14px" color="realBlack" />
            <Styled.Dott />
          </Flex>

          <Styled.Input placeholder="비밀번호를 입력해주세요" />
        </Flex>
      </Styled.ItemBox>

      <Styled.ItemBox>
        <Flex align="start" justify="between">
          <Flex marginTop={5}>
            <Text text="내용" fontSize="14px" color="realBlack" />
            <Styled.Dott />
          </Flex>

          <Styled.TextArea placeholder="내용을 입력해주세요 (최대 100자)" />
        </Flex>
      </Styled.ItemBox>

      <Styled.SubmitButton>신랑 & 신부에게 축하글 전달하기</Styled.SubmitButton>
    </Styled.Container>
  );
};
