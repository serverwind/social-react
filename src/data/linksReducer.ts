const initialState = {
  links: [
    { link: "/profile", name: "Profile", icon: "mgc_user_4_fill" },
    { link: "/messenger", name: "Messenger", icon: "mgc_chat_3_fill" },
    { link: "/friends", name: "Friends", icon: "mgc_group_2_fill" },
    { link: "/feed", name: "Feed", icon: "mgc_layout_top_fill" },
    { link: "/music", name: "Music", icon: "mgc_music_3_fill" },
    { link: "/settings", name: "Settings", icon: "mgc_settings_1_fill" },
  ],
};

export const linksReducer = (state = initialState) => {
  return state;
};
