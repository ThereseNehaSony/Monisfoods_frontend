import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >
      {/* <GoogleOAuthProvider clientId={`${GOOGLE_ID}`}> */}
        <App />
      {/* </GoogleOAuthProvider> */}
    </Provider>
  </React.StrictMode>
);