import { useState } from "react";
import { FlexColumn } from "../../../styles/mixins";
import * as Styled from "./Carousel.styles";

export const Carousel = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX - endX > 150) {
      setCurrent(current === length - 1 ? 0 : current + 1);
    } else if (startX - endX < -150) {
      setCurrent(current === 0 ? length - 1 : current - 1);
    }
  };

  return (
    <FlexColumn>
      <Styled.CarouselWrapper
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <Styled.Slide className={index === current ? "active" : ""} key={index}>
            {index === current && <Styled.Image src={image} alt="carousel slide" />}
          </Styled.Slide>
        ))}
      </Styled.CarouselWrapper>
      <Styled.DotsWrapper>
        {images.map((_, index) => (
          <Styled.Dot key={index} active={index === current} onClick={() => setCurrent(index)} />
        ))}
      </Styled.DotsWrapper>
    </FlexColumn>
  );
};
