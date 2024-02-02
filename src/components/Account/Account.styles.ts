import styled from '@emotion/styled';
import { reveal } from '../../styles/animation/keyframes/reveal';
import { flex } from '../../styles/mixins';
import { colors } from '../../styles/theme/colors';
import { IconWrapperProps } from './Account.types';

export const Container = styled.div`
  margin-bottom: 15vh;
`;

export const ButtonBox = styled.div`
  ${flex.column({ gap: 10 })}

  width: 77%;
  margin-top: 25px;
`;

export const DropButton = styled.button`
  position: relative;
  height: 45px;
  background-color: ${colors.gray4};
  border-radius: 5px;
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%)
    ${({ dropdownVisible }) =>
      dropdownVisible ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s linear;
`;

export const DropDownMenu = styled.section`
  background-color: ${colors.white};
  padding: 12px 12px;
  border-radius: 0 0 5px 5px;
  margin-top: -13px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

  &.open {
    animation: ${reveal} 0.2s ease-out forwards;
  }
`;

export const CopyButton = styled.a`
  ${flex.center()}

  width: 60px;
  height: 24px;
  color: ${colors.black};
  font-size: 12px;
  background-color: ${colors.gray};
  border-radius: 3px;
`;
