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

// 1. PROFILE - POSTS
export function addPost(id, post) {
  posts.posts.push({ id: id, post: post });
  posts.input.text = ""; // to clear input field when post added
  render();
}

export function changeInput(text) {
  posts.input.text = text;
  render();
}

// 2. MESSENGER

export function changeMessengerInput(text) {
  messages.input.text = text;
  render();
}

export function addMessage(id, message) {
  messages.messages.push({ id: id, message: message });
  messages.input.text = ""; // to clear input field when post added
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
