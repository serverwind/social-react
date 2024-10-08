import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { Provider } from "react-redux";
import "./output.css";
import "../node_modules/mingcute_icon/font/Mingcute.css";

import { store } from "./data/redux-store";

const root = createRoot(document.getElementById("root"));

function render() {
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}
render(store.getState());
