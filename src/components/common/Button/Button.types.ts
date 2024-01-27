export interface ButtonProps {
  text?: string;
  size: 'small' | 'medium';
  icon?: JSX.Element;
  margin?: string;
  onClick?: () => void;
}
