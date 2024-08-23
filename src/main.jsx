import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./output.css";

/* DATA */

import links from "./data/links.json";
import users from "./data/users.json";
import messages from "./data/messages.json";
import posts from "./data/posts.json";

/* */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App links={links} users={users} messages={messages} posts={posts} />
  </StrictMode>
);
