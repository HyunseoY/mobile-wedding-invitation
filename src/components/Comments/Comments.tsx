import { FlexColumn } from '../../styles/mixins';
import { Button, Text, Title } from '../common';
import * as Styled from './Comments.styles';

export const Comments = () => {
  return (
    <Styled.Container>
      <Title subTitle="GUESTBOOK" title="방명록" />
      <FlexColumn align="center" marginTop={35} gap={10}>
        <Text text="신랑, 신부에게" />
        <Text text="축하 메세지를 남겨보세요" />
        <Button size="medium" text="방명록 작성하기" />
      </FlexColumn>
    </Styled.Container>
  );
};
