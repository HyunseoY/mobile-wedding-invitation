import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import xIcon from '../../../assets/xIcon.svg';
import { flex, position, size } from '../../../styles/mixins';
import { colors } from '../../../styles/theme/colors';
import { zIndex } from '../../../styles/theme/zIndex';
import type { ModalStyleProps } from './Modal.types';

export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Inner = styled.div<ModalStyleProps>`
  ${flex.center()};
  ${position.fixed({ top: 0, left: 0 })};
  ${size({ width: '100%', height: '100%' })}
  z-index: ${zIndex.modal};
  background-color: ${colors.backgroundModal};
  backdrop-filter: blur(10px);
  animation: ${fadeIn} 400ms;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: url(${xIcon}) no-repeat center center;
  background-size: contain;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
