import date from '../../assets/date.png';
import wedding2 from '../../assets/wedding2.png';
import * as Styled from './Main.styles';

export const Main = () => {
  return (
    <Styled.Container>
      <Styled.MainImage src={wedding2} alt="wedding" />
      <Styled.DateImage src={date} alt="date" />
    </Styled.Container>
  );
};
