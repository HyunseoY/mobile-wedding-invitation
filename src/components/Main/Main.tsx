import date from "../../assets/date.png";
import wedding from "../../assets/wedding.png";
import * as Styled from "./Main.styles";

export const Main = () => {
  return (
    <Styled.Container>
      <Styled.MainImage src={wedding} alt="wedding" />
      <Styled.DateImage src={date} alt="date" />
    </Styled.Container>
  );
};
