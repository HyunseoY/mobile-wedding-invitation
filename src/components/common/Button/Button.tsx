import * as Styled from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  text,
  size,
  icon,
  onClick,
}) => {
  return (
    <Styled.Container>
      <Styled.Button size={size} onClick={onClick}>
        {icon} &nbsp;
        {text}
      </Styled.Button>
    </Styled.Container>
  );
};
