import { css } from '@emotion/react';
import { colors } from '../theme/colors';

export const more = css`
  html {
    background-color: ${colors.backgroundSecondary};
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;
    min-width: 380px;
    max-width: 425px;
    margin: auto;
    letter-spacing: -0.05em;
    outline: none;
    background-color: ${colors.backgroundPrimary};
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::before,
    &::after {
      box-sizing: border-box;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  img {
    border: 0;
  }

  a {
    text-decoration: none;
  }

  input,
  button {
    -webkit-appearance: none; /* Chrome, Safari, Opera */
    -moz-appearance: none; /* Firefox */
    appearance: none;
  }

  input::-webkit-contacts-auto-fill-button {
    position: absolute;
    right: 0;
    display: none !important;
    pointer-events: none;
    visibility: hidden;
  }

  input {
    background-color: transparent;
    background-image: none !important;
    border: 0;
  }

  button {
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 0;

    &:disabled {
      cursor: not-allowed;
    }
  }

  input:is([type='button'], [type='submit'], [type='reset']),
  input[type='file']::file-selector-button,
  button {
    color: initial;
  }

  input[type='number'] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }
`;
