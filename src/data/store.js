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
  addPost(id, post) {
    this._data.posts.posts.push({ id: id, post: post });
    this._data.posts.input.text = "";
    this.render();
  },
  changeInput(text) {
    this._data.posts.input.text = text;
    this.render();
  },
  changeMessengerInput(text) {
    this._data.messenger.input.text = text;
    this.render();
  },
  addMessage(id, message) {
    this._data.messenger.messages.push({ id: id, message: message });
    this._data.messenger.input.text = "";
    this.render();
  },
  subscriber(observer) {
    this.render = observer;
  },
};

export { state };
