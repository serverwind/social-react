import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./output.css";
import "../node_modules/mingcute_icon/font/Mingcute.css"

/* DATA */

import { state } from "./data/store";

/* function render() is to rerender dom tree when data changes */

const root = createRoot(document.getElementById("root"));

function render() {
  root.render(
    <StrictMode>
      <App state={state.getData()} dispatch={state.dispatch.bind(state)} />
    </StrictMode>
  );
}
render();

state.subscriber(render);
