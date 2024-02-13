import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyle } from "./components/GlobalStyle";
import App from "./components/App";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    accent: "#D3D3D3",
    white: "#FFFAF0",
    black: "#000000",
    lightOrange: "#FFDEAD",
  },

};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
