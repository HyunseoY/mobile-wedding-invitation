import dining from "../../assets/dining.png";
import parking from "../../assets/parking.png";
import { Carousel, Title } from "../common";
import * as Styled from "./Information.styles";

export const Information = () => {
  const images = [dining, parking];

  return (
    <Styled.Container>
      <Title subTitle="INFORMATION" title="예식정보 및 안내사항" />

      <Carousel images={images} />
    </Styled.Container>
  );
};
