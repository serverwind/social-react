import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { StoreContext } from "./StoreContext";
import "./output.css";
import "../node_modules/mingcute_icon/font/Mingcute.css";

/* DATA */

import { store } from "./data/redux-store";

/* function render() is to rerender dom tree when data changes */

const root = createRoot(document.getElementById("root"));

function render(state) {
  root.render(
    <StrictMode>
      <StoreContext.Provider value={store}>
      <App />
      </StoreContext.Provider>
    </StrictMode>
  );
}
render(store.getState());

store.subscribe(() => {
  let state = store.getState();
  render(state);
});
