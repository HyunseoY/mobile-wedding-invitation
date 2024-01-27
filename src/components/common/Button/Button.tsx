import * as Styled from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = ({ text, size, icon, onClick }: ButtonProps) => {
  return (
    <Styled.Container>
      <Styled.Button size={size} onClick={onClick}>
        {icon} &nbsp;
        {text}
      </Styled.Button>
    </Styled.Container>
  );
};
