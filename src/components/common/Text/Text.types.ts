import { ColorsKey } from '../../../styles/theme';

export interface TextProps {
  text: string;
  color?: ColorsKey;
  fontSize?: string;
  letterSpacing?: string;
  outline?: true;
}
