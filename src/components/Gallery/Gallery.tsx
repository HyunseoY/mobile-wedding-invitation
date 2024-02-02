import shoot1 from "../../assets/shoot1.png";
import shoot2 from "../../assets/shoot2.png";
import shoot3 from "../../assets/shoot3.png";
import shoot4 from "../../assets/shoot4.png";
import { Carousel, Title } from "../common";
import * as Styled from "./Gallery.styles";

export const Gallery = () => {
  const images = [shoot1, shoot2, shoot3, shoot4];

  return (
    <Styled.Container>
      <Title subTitle="GALLERY" title="갤러리" />

      <Carousel images={images} />
    </Styled.Container>
  );
};
