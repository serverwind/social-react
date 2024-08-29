import { postReducer } from "./postReducer";
import { likeReducer } from "./likeReducer";
import { messengerReducer } from "./messengerReducer";

let state = {
  _data: {
    links: [
      { link: "/profile", name: "- Profile" },
      { link: "/messenger", name: "- Messenger" },
      { link: "/friends", name: "- Friends" },
      { link: "/feed", name: "- Feed" },
      { link: "/music", name: "- Music" },
      { link: "/settings", name: "- Settings" },
    ],
    posts: {
      posts: [
        { id: "1", post: "Finished course and all practice of lessons 25-30.", likes: "5" },
        { id: "2", post: "Finished course and all practice of lessons 17-25.", likes: "10" },
        { id: "3", post: "Deployed project to Netlify.", likes: "7" },
        { id: "4", post: "Finished course and all practice of lessons 11-16.", likes: "3" },
        { id: "5", post: "Hi! This is a first post.", likes: "2" },
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
