import styled from "@emotion/styled";
import { flex } from "../../../styles/mixins";
import { colors } from "../../../styles/theme/colors";
import { DotProps } from "./Carousel.types";

export const CarouselWrapper = styled.div`
  ${flex.center()}

  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

export const Slide = styled.div`
  height: 100%;
  opacity: 0;
  transition-duration: 1s ease;

  &.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const DotsWrapper = styled.div`
  ${flex.center({ gap: 5 })}

  padding: 20px;
`;

export const Dot = styled.span<DotProps>`
  width: 7px;
  height: 7px;
  cursor: pointer;
  border-radius: 50%;
  background: ${(props) => (props.active ? colors.pink : colors.gray3)};
`;
