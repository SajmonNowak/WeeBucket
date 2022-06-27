import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import myTheme from "./styles/mantineTheme"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider theme={myTheme} withNormalizeCSS withGlobalStyles>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
