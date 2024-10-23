import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./postReducer";
import { messengerReducer } from "./messengerReducer";
import { usersReducer } from "./usersReducer";
import { linksReducer } from "./linksReducer";
import { musicReducer } from "./musicReducer";
import { profileReducer } from "./profileReducer";
import { authReducer } from "./authReducer";
import { settingsReducer } from "./settingsReducer";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    messenger: messengerReducer,
    users: usersReducer,
    links: linksReducer,
    music: musicReducer,
    profile: profileReducer,
    auth: authReducer,
    settings: settingsReducer,
  },
});
