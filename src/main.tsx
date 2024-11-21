import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./output.css";
import "../node_modules/mingcute_icon/font/Mingcute.css";
import { store } from "./data/redux-store";

const rootDiv = document.getElementById("root") as HTMLElement;

const root = createRoot(rootDiv);

function render() {
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}
render();

// for development purposes
window.store = store;
