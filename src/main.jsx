import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./output.css";

/* DATA */

import { state } from "./data/store";

/* FUNCTIONS to update data (state) and callback to rerender tree */

import { changeInput, addPost, changeMessengerInput, addMessage, subscriber } from "./data/store";

/* function render() is to rerender dom tree when data changes */

const root = createRoot(document.getElementById("root"));

function render() {
  root.render(
    <StrictMode>
      <App state={state} changeInput={changeInput} addPost={addPost} changeMessengerInput={changeMessengerInput} addMessage={addMessage} />
    </StrictMode>
  );
}
render();

subscriber(render);
