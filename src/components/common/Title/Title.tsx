import * as Styled from './Title.styles';
import { TitleProps } from './Title.types';

export const Title = ({
  subTitle,
  title,
  subTitleColor,
  titleColor,
}: TitleProps) => {
  return (
    <Styled.Container>
      <Styled.SubTitle color={subTitleColor}>{subTitle}</Styled.SubTitle>
      <Styled.Title color={titleColor}>{title}</Styled.Title>
    </Styled.Container>
  );
};
