import { Fade } from "react-awesome-reveal";
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
import { Carousel, Title } from "../common";
import * as Styled from "./Gallery.styles";

export const Gallery = () => {
  const images = [shoot3, shoot2, shoot1, shoot4, shoot5, shoot6, shoot7, shoot8, shoot10, shoot11];

  // 이미지를 미리 로드하는 함수
  const preloadImages = (imageArray: string[]) => {
    const newImages = [];
    for (let i = 0; i < imageArray.length; i++) {
      newImages[i] = new Image();
      newImages[i].src = imageArray[i];
    }
  };

  // 페이지가 완전히 로드된 후에 이미지를 미리 로드
  window.onload = () => {
    preloadImages(images);
  };

  return (
    <Styled.Container>
      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <Title subTitle="GALLERY" title="갤러리" />
      </Fade>

      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <Carousel images={images} />
      </Fade>
    </Styled.Container>
  );
};
