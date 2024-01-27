import styled from '@emotion/styled';
import { colors } from '../../../styles/theme/colors';
import { TextProps } from './Text.types';

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize || '1em'};
  color: ${(props) => (props.color ? colors[props.color] : '#585858')};
  letter-spacing: ${(props) => props.letterSpacing || '1px'};
  outline: ${(props) => (props.outline ? '1px solid black' : 'none')};
`;
