import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "@src/styled/GlobalStyle.style";
import { Provider } from "react-redux";
import {store, persistor} from "@src/store/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
