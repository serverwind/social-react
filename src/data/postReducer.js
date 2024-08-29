function postReducer(state, action) {
  switch (action.type) {
    case "ADD-POST":
      state.posts.push({ id: action.id, post: action.post });
      state.input.text = "";
      break;
    case "CHANGE-TEXT":
      state.input.text = action.text;
      break;
  }
  return state;
}

function newPostActionCreater(id, post) {
  return { type: "ADD-POST", id, post };
}

function stateTextActionCreator(text) {
  return { type: "CHANGE-TEXT", text };
}

export { postReducer, newPostActionCreater, stateTextActionCreator };
