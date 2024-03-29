import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Login />
  </React.StrictMode>
);
