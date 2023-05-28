import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import Logincontext from "./Usecontext/Logincontext";
// import Context from "../src/Usecontext/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <Logincontext>
      <App />
    </Logincontext>
    </BrowserRouter>
);
