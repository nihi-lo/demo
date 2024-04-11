import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { App } from "./App";
import { Providers } from "./Providers";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename={"/"}>
      <Providers>
        <App />
      </Providers>
    </HashRouter>
  </React.StrictMode>,
);
