import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";


// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyC5uzhtGq3G-QuTYaCST885NK0N2E8ZM58",
  authDomain: "pf-coder-velazquez.firebaseapp.com",
  projectId: "pf-coder-velazquez",
  storageBucket: "pf-coder-velazquez.appspot.com",
  messagingSenderId: "13633271650",
  appId: "1:13633271650:web:3b71b9744e293818db1e3b",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </>
);

reportWebVitals();
