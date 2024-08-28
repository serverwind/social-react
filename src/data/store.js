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
        { id: "1", post: "Finished course and all practice of lessons 25-30." },
        { id: "2", post: "Finished course and all practice of lessons 17-25." },
        { id: "3", post: "Deployed project to Netlify." },
        { id: "4", post: "Finished course and all practice of lessons 11-16." },
        { id: "5", post: "Hi! This is a first post." },
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
    messenger: {
      messages: [
        { message: "Hello, how are you?", id: "1" },
        { message: "Thanks!", id: "2" },
      ],
      input: { text: "" },
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
    switch (action.type) {
      case "ADD-POST":
        this._data.posts.posts.push({ id: action.id, post: action.post });
        this._data.posts.input.text = "";
        this.render();
        break;
      case "CHANGE-TEXT":
        this._data.posts.input.text = action.text;
        this.render();
        break;
      case "CHANGE-MESSENGER-INPUT":
        this._data.messenger.input.text = action.text;
        this.render();
        break;
      case "SEND-MESSAGE":
        this._data.messenger.messages.push({ id: action.id, message: action.message });
        this._data.messenger.input.text = "";
        this.render();
        break;
    }
  },
};

function newPostActionCreater(id, post) {
  return { type: "ADD-POST", id, post };
}

function stateTextActionCreator(text) {
  return { type: "CHANGE-TEXT", text };
}

function sendMessageActionCreator(id, message) {
  return { type: "SEND-MESSAGE", id, message: message };
}

function messengerInputActionCreator(text) {
  return { type: "CHANGE-MESSENGER-INPUT", text };
}

export { state, newPostActionCreater, stateTextActionCreator, messengerInputActionCreator, sendMessageActionCreator };
