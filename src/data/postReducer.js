function postReducer(state, action) {
  switch (action.type) {
    case "ADD-POST":
      state.posts.push({ id: action.id, post: action.post, likes: 0, author: "Alex Lestra" });
      state.input.text = "";
      break;
    case "CHANGE-TEXT":
      state.input.text = action.text;
      break;
  }
  return state;
}

function newPostActionCreater(id, post, likes) {
  return { type: "ADD-POST", id, post, likes };
}

function stateTextActionCreator(text) {
  return { type: "CHANGE-TEXT", text };
}

export { postReducer, newPostActionCreater, stateTextActionCreator };
