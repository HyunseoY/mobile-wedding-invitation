import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../styles/theme/colors";
import { Title } from "../common";
import * as Styled from "./Contact.styles";

export const Contact = () => {
  return (
    <Styled.Container>
      <Title subTitle="CONTACT" title="연락하기" subTitleColor="gray2" titleColor="gray3" />

      <Styled.BrideGroomWrap>
        <Styled.Section>
          <Styled.TitleBox>
            <Styled.Text>신부측</Styled.Text>
            &nbsp;
            <Styled.SubText>Bride</Styled.SubText>
          </Styled.TitleBox>

          <Styled.Line />

          <Styled.PhoneMailBox>
            <Styled.IndexBox>
              <Styled.Text>신부</Styled.Text>
            </Styled.IndexBox>

            <Styled.NameBox>
              <Styled.Text color="gray4">정라희</Styled.Text>
            </Styled.NameBox>

            <Styled.LinkBox>
              <a href="tel:01075248355">
                {<FontAwesomeIcon icon={faPhone} color={colors.gray3} />}
              </a>
              <a href="sms:01075248355">
                {<FontAwesomeIcon icon={faEnvelope} color={colors.gray3} />}
              </a>
            </Styled.LinkBox>
          </Styled.PhoneMailBox>
        </Styled.Section>

        <Styled.Section>
          <Styled.TitleBox>
            <Styled.Text>신랑측</Styled.Text>
            &nbsp;
            <Styled.SubText>Groom</Styled.SubText>
          </Styled.TitleBox>

          <Styled.Line />

          <Styled.PhoneMailBox>
            <Styled.IndexBox>
              <Styled.Text>신랑</Styled.Text>
            </Styled.IndexBox>

            <Styled.NameBox>
              <Styled.Text color="gray4">최지현</Styled.Text>
            </Styled.NameBox>

            <Styled.LinkBox>
              <a href="tel:01094264646">
                {<FontAwesomeIcon icon={faPhone} color="rgb(175, 175, 175)" />}
              </a>
              <a href="sms:01094264646">
                {<FontAwesomeIcon icon={faEnvelope} color="rgb(175, 175, 175)" />}
              </a>
            </Styled.LinkBox>
          </Styled.PhoneMailBox>
        </Styled.Section>
      </Styled.BrideGroomWrap>
    </Styled.Container>
  );
};
