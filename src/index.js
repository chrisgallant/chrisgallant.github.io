import React from "react";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);
