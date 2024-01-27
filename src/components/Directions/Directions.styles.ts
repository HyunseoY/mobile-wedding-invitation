import styled from '@emotion/styled';
import { flex } from '../../styles/mixins';
import { colors } from '../../styles/theme/colors';
import { zIndex } from '../../styles/theme/zIndex';
import { TextProps } from '../EventDate/EventDate.types';

export const LockToggle = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: ${zIndex.header};
  pointer-events: auto;
`;

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize || '1em'};
  color: ${(props) => (props.color ? colors[props.color] : '#585858')};

  letter-spacing: ${(props) => props.letterSpacing || '1px'};
`;

export const MapImg = styled.img`
  width: 100%;
  object-fit: contain;
  padding: 5px;
`;

export const Button = styled.button`
  ${flex.center()}

  width: 77%;
  height: 45px;
  border: 1px solid ${colors.gray};
  border-radius: 15px;
  padding: 5%;
  margin: 1vh 0 3vh 0;
  background-color: ${colors.white};
`;

export const Transportation = styled.div`
  ${flex.column()}
`;

export const Line = styled.span`
  display: block;
  border-top: 0.2px dotted ${colors.gray2};
  margin: 1.5vh 0;
`;
