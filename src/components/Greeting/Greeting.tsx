import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Title } from '../common';
import * as Styled from './Greeting.styles';

export const Greeting = () => {
  return (
    <Styled.Container>
      <Title subTitle="INVITATION" title="소중한 분들을 초대합니다" />
      <Styled.Content>
        {` 
저희 두사람의 만남이 어쩌고 저쩌고 
룰룰라라랄너ㅏㅣㅓ이나ㅓㅣㅓ;ㅣㅏㅓ
나ㅣ;ㄴㅇ러ㅏㅣㅇㄴ
ㄴ어ㅏㅣㅓㅏㅣㅓ나ㅣ;ㅓ라ㅣㄴㅁ ㅁ너

ㅏㅣㅇ너ㅏㅣ러ㅏㅣㅓㅁ나ㅣㅇ
해ㅔㅆ는데 렁나ㅣㅁ;ㅓㄹ;ㅏㅣㅓ마ㅣ;넝
러ㅏㅣㄴ머ㅏㅣ;러ㅏㅣ;ㅓ마ㅣ;ㅓㄴㅇㄹ

라ㅓㅓ너오ㅓㅎ숃ㅎㅈ어ㅏㅗㄴㅁㅊㅌ휻ㅈㄹㅊ
어ㅏ노ㅓㄷㅈ호래ㅕㅗㅓ
ㅑ너야ㅏ 러ㅏㅣㄴ옴러ㅏ혼ㅁㅇ로 
감사합니다 
        `}
      </Styled.Content>
      <Styled.Line />
      <Styled.Content margin>
        신랑 지현 &nbsp; | &nbsp; 신부 라희
      </Styled.Content>
      <Button
        text="연락하기"
        size="medium"
        icon={<FontAwesomeIcon icon={faPhone} color="rgb(175, 175, 175)" />}
      />
    </Styled.Container>
  );
};
