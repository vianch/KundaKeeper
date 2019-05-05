import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/styles.scss";

import { App } from "./containers/app";
import { store } from "./shared/store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"),
);
