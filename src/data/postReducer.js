function postReducer(state, action) {
  switch (action.type) {
    case "ADD-POST":
      state.posts.unshift({ id: action.id, post: action.post, likes: action.likes, author: action.author, date: action.date });
      state.input.text = "";
      break;
    case "CHANGE-TEXT":
      state.input.text = action.text;
      break;
  }
  return state;
}

function newPostActionCreater(id, post, likes, author, date) {
  return { type: "ADD-POST", id, post, likes, author, date };
}

function stateTextActionCreator(text) {
  return { type: "CHANGE-TEXT", text };
}

export { postReducer, newPostActionCreater, stateTextActionCreator };
