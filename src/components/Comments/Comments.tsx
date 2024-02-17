import { Fade } from "react-awesome-reveal";
import { Flex, FlexColumn } from "../../styles/mixins";
import { Button, Text, Title } from "../common";
import { useComments } from "./Comments.hooks";
import * as Styled from "./Comments.styles";

export const Comments = () => {
  const app = useComments();

  return (
    <Styled.Container>
      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <Title subTitle="GUESTBOOK" title="방명록" />
      </Fade>

      <Styled.CommentWrapper>
        <Fade direction="up" triggerOnce={true} fraction={0.01}>
          {app.comments.map((comment) => (
            <Styled.CommentBox key={comment.id}>
              <Flex justify="between">
                <Text text={comment.name} />
                <Styled.DeleteButton onClick={() => app.handleDelete(comment)} />
              </Flex>

              <Text text={comment.content} />
            </Styled.CommentBox>
          ))}
        </Fade>
      </Styled.CommentWrapper>

      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <FlexColumn align="center" marginTop={35} gap={10}>
          <Text text="신부, 신랑에게" />
          <Text text="축하 메세지를 남겨보세요" />
          <Button
            size="medium"
            text="방명록 작성하기"
            margin="3vh 0 0 0"
            onClick={app.clickModalOpenHandler}
          />
        </FlexColumn>
      </Fade>
    </Styled.Container>
  );
};
