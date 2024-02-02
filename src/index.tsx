import { Global, ThemeProvider, css } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Overlay } from "./components";
import { font, more, reset } from "./styles/base";
import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${reset}
          ${more}
          ${font}
        `}
      />
      <App />
      <Overlay />
    </ThemeProvider>
  </React.StrictMode>
);
