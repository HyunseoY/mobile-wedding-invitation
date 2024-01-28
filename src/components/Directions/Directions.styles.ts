import styled from '@emotion/styled';
import { flex } from '../../styles/mixins';
import { ColorsKey } from '../../styles/theme';
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

export const AppButton = styled.button`
  width: 95px;
  height: 40px;
  font-size: 12px;
  border-radius: 7px;
  border: 1px solid ${colors.gray};
  background-color: ${colors.white};
`;

export const AppButtonImg = styled.img`
  width: 17px;
  height: 17px;
  object-fit: contain;
  border-radius: 3px;
  margin-right: 3px;
`;

export const Transportation = styled.div`
  ${flex.column()}

  padding: 0 50px;
  margin-bottom: 15vh;
`;

export const Line = styled.span`
  display: block;
  border-top: 0.5px dotted ${colors.gray3};
  margin: 20px 0;
`;

export const Dott = styled.span<{ color?: ColorsKey }>`
  width: 8px;
  height: 8px;
  background-color: ${(props) =>
    props.color ? colors[props.color] : colors.black};
  border-radius: 50%;
  margin-right: 5px;
`;
