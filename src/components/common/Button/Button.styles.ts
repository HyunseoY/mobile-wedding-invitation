import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { flex } from '../../../styles/mixins';
import { colors } from '../../../styles/theme/colors';
import { ButtonProps } from './Button.types';

export const Container = styled.div`
  ${flex.center()}
`;

export const Button = styled.button<ButtonProps>`
  border: 1px solid ${colors.gray};
  border-radius: 15px 15px 0 15px;
  padding: 5%;
  margin: 3vh 0 10vh 0;

  ${({ size }) =>
    size === 'small'
      ? css`
          width: 100px;
        `
      : css`
          width: 200px;
        `}
`;
