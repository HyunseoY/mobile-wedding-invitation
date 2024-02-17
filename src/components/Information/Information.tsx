import { Fade } from "react-awesome-reveal";
import dining from "../../assets/dining.png";
import parking from "../../assets/parking.png";
import { Carousel, Title } from "../common";
import * as Styled from "./Information.styles";

export const Information = () => {
  const images = [dining, parking];

  return (
    <Styled.Container>
      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <Title subTitle="INFORMATION" title="예식정보 및 안내사항" />
      </Fade>

      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <Carousel images={images} />
      </Fade>
    </Styled.Container>
  );
};
