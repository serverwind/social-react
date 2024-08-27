let render = () => {
  console.log("render tree");
};

let state = {
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
};

// 1. PROFILE - POSTS
function addPost(id, post) {
  state.posts.posts.push({ id: id, post: post });
  state.posts.input.text = ""; // to clear input field when post added
  render();
}

function changeInput(text) {
  state.posts.input.text = text;
  render();
}

// 2. MESSENGER - MESSAGES
function changeMessengerInput(text) {
  state.messages.input.text = text;
  render();
}

function addMessage(id, message) {
  state.messages.messages.push({ id: id, message: message });
  state.messages.input.text = ""; // to clear input field when post added
  render();
}

// subscriber(observer)

function subscriber(observer) {
  render = observer;
}

export { state, addMessage, changeInput, addPost, changeMessengerInput, subscriber };
