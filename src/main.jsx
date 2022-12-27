import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Layout>
        <App />
      </Layout>
    </React.StrictMode>
  </BrowserRouter>
);
