import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./output.css";

/* DATA */

import links from "./data/links.json";
import users from "./data/users.json";
import messages from "./data/messages.json";
import posts from "./data/posts.json";

/* FUNCTIONS to update data (state) and call re-render */

export function addPost(id, post) {
  posts.posts.push({ id: id, post: post });
  posts.input.text = "";
  render();
}

export function changeInput(text) {
  posts.input.text = text;
  render();
}

/* function render() is to rerender dom tree when data changes */

const root = createRoot(document.getElementById("root"));

function render() {
  root.render(
    <StrictMode>
      <App links={links} users={users} messages={messages} posts={posts} />
    </StrictMode>
  );
}
render();
