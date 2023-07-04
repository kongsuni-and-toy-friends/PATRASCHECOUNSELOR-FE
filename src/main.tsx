import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/UI/Header.tsx";
import Nav from "./Components/UI/Nav.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Nav />
      <main className="xl:w-[1280px] xl:mx-auto">
        <App />
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
