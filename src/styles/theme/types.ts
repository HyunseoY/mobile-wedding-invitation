import type { colors } from './colors';

export type Colors = typeof colors;
export type ColorsKey = keyof Colors;

export type Sizes = {
  height: Record<SizeKey, number>;
  padding: Record<SizeKey, number>;
  heading: Record<SizeKey, string>;
  paragraph: Record<SizeKey, string>;
};
export type SizeKey = 'small' | 'medium' | 'large';
