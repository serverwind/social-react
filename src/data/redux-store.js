import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./postReducer";
import { messengerReducer } from "./messengerReducer";
import { usersReducer } from "./usersReducer";
import { linksReducer } from "./linksReducer";

const store = configureStore({
  reducer: {
    posts: postReducer,
    messenger: messengerReducer,
    users: usersReducer,
    links: linksReducer,
  },
});

export { store };
