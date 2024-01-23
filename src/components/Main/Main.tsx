import date from '../../assets/date.png';
import name from '../../assets/name.png';
import wedding from '../../assets/wedding.png';
import * as Styled from './Main.styles';

export const Main = () => {
  return (
    <Styled.Container>
      <Styled.MainImage src={wedding} alt="wedding" />
      <Styled.Title>THE MARRIAGE OF</Styled.Title>
      <Styled.NameImage src={name} alt="name" />
      <Styled.Datebox>
        <Styled.DateImage src={date} alt="date" />
        <Styled.TextBox>
          <Styled.NameText>라희 ❤︎ 지현</Styled.NameText>
          <Styled.PlaceText>헤리움 웨딩홀, 컨벤션홀</Styled.PlaceText>
          <Styled.DateText>2024년 5월 25일 토요일, 오전 00시</Styled.DateText>
        </Styled.TextBox>
      </Styled.Datebox>
    </Styled.Container>
  );
};
