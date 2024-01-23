import date from '../../assets/date.png';
import name from '../../assets/name.png';
import wedding from '../../assets/wedding.png';
import * as Styled from './Main.styles';

export const Main = () => {
  return (
    <Styled.Container>
      <Styled.Title>THE MARRIAGE OF</Styled.Title>
      <Styled.NameImage src={name} alt="name" />
      <Styled.MainImage src={wedding} alt="wedding" />
      <Styled.DateImage src={date} alt="date" />
    </Styled.Container>
  );
};
