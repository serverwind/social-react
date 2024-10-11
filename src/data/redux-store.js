import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./postReducer";
import { messengerReducer } from "./messengerReducer";
import { usersReducer } from "./usersReducer";
import { linksReducer } from "./linksReducer";
import { musicReducer } from "./musicReducer";
import { profileReducer } from "./profileReducer";

const store = configureStore({
  reducer: {
    posts: postReducer,
    messenger: messengerReducer,
    users: usersReducer,
    links: linksReducer,
    music: musicReducer,
    profile: profileReducer,
  },
});

export { store };
