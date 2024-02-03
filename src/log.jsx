import React from "react";

import ReactDOM from "react-dom/client";
import Logg from "./components/Login";
import "./tiger.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      className="h-full pb-64"
      style={{ backgroundColor: "#1c203e", height: "100vh" }}
    >
      <Logg />
    </div>
  </React.StrictMode>
);
