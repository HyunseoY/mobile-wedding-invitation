import shoot1 from "../../assets/shoot1.png";
import shoot10 from "../../assets/shoot10.png";
import shoot11 from "../../assets/shoot11.png";
import shoot2 from "../../assets/shoot2.png";
import shoot3 from "../../assets/shoot3.png";
import shoot4 from "../../assets/shoot4.png";
import shoot5 from "../../assets/shoot5.png";
import shoot6 from "../../assets/shoot6.png";
import shoot7 from "../../assets/shoot7.png";
import shoot8 from "../../assets/shoot8.png";
import shoot9 from "../../assets/shoot9.png";
import { Carousel, Title } from "../common";
import * as Styled from "./Gallery.styles";

export const Gallery = () => {
  const images = [
    shoot1,
    shoot2,
    shoot3,
    shoot4,
    shoot5,
    shoot6,
    shoot7,
    shoot8,
    shoot9,
    shoot10,
    shoot11
  ];

  return (
    <Styled.Container>
      <Title subTitle="GALLERY" title="갤러리" />

      <Carousel images={images} />
    </Styled.Container>
  );
};
