import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./output.css";
import "../node_modules/mingcute_icon/font/Mingcute.css";

/* DATA */

import { store } from "./data/redux-store";

/* function render() is to rerender dom tree when data changes */

const root = createRoot(document.getElementById("root"));

function render(state) {
  root.render(
    <StrictMode>
      <App state={state} dispatch={store.dispatch.bind(state)} />
    </StrictMode>
  );
}
render(store.getState());

store.subscribe(() => {
  let state = store.getState();
  render(state);
});
