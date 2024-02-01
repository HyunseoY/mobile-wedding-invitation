import { FlexColumn } from "../../styles/mixins";
import { Form } from "../Form";
import { Button, Text, Title, useModal } from "../common";
import * as Styled from "./Comments.styles";

export const COMMENT_FORM_MODAL = "COMMENT_FORM_MODAL";

export const Comments = () => {
  const { mount } = useModal();

  const clickModalOpenHandler = () => {
    mount(<Form />, { id: COMMENT_FORM_MODAL, type: "bottom" });
  };

  return (
    <Styled.Container>
      <Title subTitle="GUESTBOOK" title="방명록" />
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
