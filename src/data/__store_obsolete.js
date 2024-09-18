import { postReducer } from "./postReducer";
import { likeReducer } from "./likeReducer";
import { messengerReducer } from "./messengerReducer";

let state = {
  _data: {
    links: [
      { link: "/profile", name: "Profile", icon: "mgc_user_4_fill" },
      { link: "/messenger", name: "Messenger", icon: "mgc_chat_3_fill" },
      { link: "/friends", name: "Friends", icon: "mgc_group_2_fill" },
      { link: "/feed", name: "Feed", icon: "mgc_layout_top_fill" },
      { link: "/music", name: "Music", icon: "mgc_music_3_fill" },
      { link: "/settings", name: "Settings", icon: "mgc_settings_1_fill" },
    ],
    posts: {
      posts: [
        { id: "5", post: "Finished course and all practice of lessons 25-30.", likes: "5", author: "Alex Lestra", date: "1 day ago" },
        { id: "4", post: "Finished course and all practice of lessons 17-25.", likes: "10", author: "Alex Lestra", date: "2 days ago" },
        { id: "3", post: "Deployed project to Netlify.", likes: "7", author: "Alex Lestra", date: "4 days ago" },
        { id: "2", post: "Finished course and all practice of lessons 11-16.", likes: "3", author: "Alex Lestra", date: "4 days ago" },
        { id: "1", post: "Hi! This is a first post.", likes: "2", author: "Alex Lestra", date: "Last week" },
      ],
      input: { text: "" },
    },
    messenger: {
      messages: [
        { message: "Hello, how are you?", id: "1" },
        { message: "Thanks!", id: "2" },
      ],
      input: { text: "" },
    },
    users: {
      users: [
        { name: "Emily", id: "1" },
        { name: "Jimmy", id: "2" },
        { name: "Sally", id: "3" },
        { name: "Maria", id: "4" },
        { name: "Tommy", id: "5" },
      ],
      friends: [
        { name: "Emily", id: "1" },
        { name: "Jimmy", id: "2" },
        { name: "Sally", id: "3" },
      ],
    },
  },

  getData() {
    return this._data;
  },
  render() {
    console.log("render tree");
  },
  subscriber(observer) {
    this.render = observer;
  },

  dispatch(action) {
    this._data.posts = postReducer(this._data.posts, action);
    this._data.posts = likeReducer(this._data.posts, action);
    this._data.messenger = messengerReducer(this._data.messenger, action);
    this.render();
  },
};

export { state };
