import styled from '@emotion/styled';
import { flex } from '../../styles/mixins';
import { ColorsKey } from '../../styles/theme';
import { colors } from '../../styles/theme/colors';

export const Transportation = styled.div`
  ${flex.column()}

  width: 77%;
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
