import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 15vh;
`;

export const CarouselWrapper = styled.div`
  max-width: 425px;
  height: 300px;
  overflow: hidden;
`;

export const AllSlide = styled.div`
  height: 300px; // 적절한 높이로 조정
  overflow: hidden;

  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 0.5;
  }

  .slick-prev:before,
  .slick-next:before {
    height: 0;
    font-size: 70px;
    color: white;
    opacity: 0.3;
  }

  .slick-prev {
    left: 10px;
    z-index: 10;
  }
  [dir="rtl"] .slick-prev {
    right: -25px;
    left: auto;
  }

  .slick-next {
    right: 70px;
  }
  [dir="rtl"] .slick-next {
    right: auto;
    left: -25px;
  }

  .slick-dots {
    bottom: -50px;
  }

  .slick-dots li {
    margin: -20px 15px;
  }

  .slick-dots li button:before {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: gray;
    text-align: center;
    content: "";
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }
`;
