import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { PortalClientProviders } from "@portal-client/components/functional/PortalClientProviders";

import { App as PortalApp } from "./App";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename={"/"}>
      <PortalClientProviders>
        <PortalApp />
      </PortalClientProviders>
    </HashRouter>
  </React.StrictMode>,
);
