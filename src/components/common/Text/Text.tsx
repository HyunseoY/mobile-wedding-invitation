import * as Styled from './Text.styles';
import { TextProps } from './Text.types';

export const Text = ({
  text,
  color,
  fontSize,
  letterSpacing,
  margin,
}: TextProps) => {
  return (
    <Styled.Text
      color={color}
      fontSize={fontSize}
      letterSpacing={letterSpacing}
      margin={margin}
    >
      {text}
    </Styled.Text>
  );
};
