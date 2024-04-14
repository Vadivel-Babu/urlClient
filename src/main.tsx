import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
//@ts-ignore
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </NextUIProvider>
  </React.StrictMode>
);
