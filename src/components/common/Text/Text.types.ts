import { ColorsKey } from '../../../styles/theme';

export interface TextProps {
  text?: string | JSX.Element;
  color?: ColorsKey;
  fontSize?: string;
  letterSpacing?: string;
  margin?: string | number;
}
