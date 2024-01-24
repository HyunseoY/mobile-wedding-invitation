import * as Styled from './Title.styles';
import { TitleProps } from './Title.types';

export const Title = ({ subTitle, title }: TitleProps) => {
  return (
    <Styled.Container>
      <Styled.SubTitle>{subTitle}</Styled.SubTitle>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};
