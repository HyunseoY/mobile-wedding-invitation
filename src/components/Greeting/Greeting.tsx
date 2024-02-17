import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";
import { colors } from "../../styles/theme/colors";
import { Contact } from "../Contact";
import { Button, Title } from "../common";
import { useModal } from "../common/Modal/Modal.hooks";
import * as Styled from "./Greeting.styles";

export const CONTACT_MODAL = "CONTACT_MODAL";

export const Greeting = () => {
  const { mount } = useModal();

  const clickModalOpenHandler = () => {
    mount(<Contact />, { id: CONTACT_MODAL });
  };

  return (
    <Styled.Container>
      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <Title subTitle="INVITATION" title="소중한 분들을 초대합니다" />
      </Fade>

      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <Styled.Content>
          {` 
새로이 시작하는 작은사랑이 
보다 깊고 향 짙게 꽃피려 합니다

사랑으로 가득 채워 
즐거움은 나누고 어려움은 이겨내는
함께 나아가는 삶을 꾸리겠습니다

두 사람이 행복한 가정을
이룰 수 있도록 따뜻한 마음으로
축복해주시면 감사하겠습니다
        `}
        </Styled.Content>
      </Fade>

      <Styled.Line />

      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <Styled.Content margin>신부 정라희 &nbsp; | &nbsp; 신랑 최지현</Styled.Content>
        <Button
          text="연락하기"
          size="medium"
          icon={<FontAwesomeIcon icon={faPhone} color={colors.gray6} />}
          onClick={clickModalOpenHandler}
        />
      </Fade>
    </Styled.Container>
  );
};
