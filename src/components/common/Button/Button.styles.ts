import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { flex } from '../../../styles/mixins';
import { colors } from '../../../styles/theme/colors';
import { ButtonProps } from './Button.types';

export const Container = styled.div`
  ${flex.center()}
`;

export const Button = styled.button<ButtonProps>`
  ${flex.center()}

  border: 1px solid ${colors.gray};
  padding: 5%;
  margin: ${(props) => props.margin || '3vh 0 10vh 0'};
  background-color: ${colors.white};

  ${({ size }) =>
    size === 'small'
      ? css`
          width: 95px;
          height: 40px;
          border-radius: 7px;
        `
      : css`
          width: 200px;
          height: 45px;
          border-radius: 15px;
        `}
`;
