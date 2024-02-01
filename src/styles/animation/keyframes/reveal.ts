import { keyframes } from '@emotion/react';

export const reveal = keyframes`
0% {
  clip-path: inset(0 0 100% 0);
}
100% {
  clip-path: inset(0 0 0 0);
}
`;
