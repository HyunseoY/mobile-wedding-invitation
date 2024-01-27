import { css } from '@emotion/react';

export const font = css`
  @font-face {
    font-family: 'Ghanachocolate';
    src: url('/fonts/Ghanachocolate.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'GowunDodum-Regular';
    src: url('/fonts/GowunDodum-Regular.ttf') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'CrimsonPro-VariableFont_wght';
    src: url('/fonts/CrimsonPro-VariableFont_wght.ttf') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  h1 {
    font-family: 'Ghanachocolate';
  }

  p,
  button,
  .react-calendar {
    font-family: 'GowunDodum-Regular';
    color: #585858;
  }

  span {
    font-family: 'CrimsonPro-VariableFont_wght';
    color: #585858;
  }
`;
