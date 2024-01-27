import { ColorsKey } from '../../styles/theme';

export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface TextProps {
  color?: ColorsKey;
  fontSize?: string;
  letterSpacing?: string;
  outline?: true;
}
