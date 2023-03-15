import React from "react";
import ReactDOM from "react-dom/client";
import { SuperProvider } from "@rokid-library/components";
import App from "./App";
import "@/assets/style/commonClassNames.less";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SuperProvider
    theme={{
      token: {
        colorPrimary: "#6213FF",
        colorError: "#FF5353",
        colorWarning: "#FFCC40",
        colorSuccess: "#48DE5B",
      },
    }}
  >
    <App />
  </SuperProvider>
);
