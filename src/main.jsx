import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./output.css";

/* DATA */

import { state } from "./data/store";

/* function render() is to rerender dom tree when data changes */

const root = createRoot(document.getElementById("root"));

function render() {
  root.render(
    <StrictMode>
      <App state={state.getData()} changeInput={state.changeInput.bind(state)} addPost={state.addPost.bind(state)} changeMessengerInput={state.changeMessengerInput.bind(state)} addMessage={state.addMessage.bind(state)} />
    </StrictMode>
  );
}
render();

state.subscriber(render);
