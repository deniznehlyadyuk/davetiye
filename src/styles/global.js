import { css } from '@emotion/react';

export const globalStyles = css`
  *, *::before, *::after { box-sizing: border-box; }

  html, body, #root { margin: 0; min-height: 100%; }

  html { scroll-behavior: smooth; }

  body {
    margin: 0;
    background: #f6f2ea;
    color: #171717;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button, input { font: inherit; }
  button { cursor: pointer; }
  a { color: inherit; }
`;
