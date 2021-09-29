import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";

awsconfig.oauth.redirectSignIn = process.env.NEXT_PUBLIC_AUTH_REDIRECT_SIGNIN;
awsconfig.oauth.redirectSignOut = process.env.NEXT_PUBLIC_AUTH_REDIRECT_SIGNIN;

Amplify.Logger.LOG_LEVEL = "DEBUG";

Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
