function likeReducer(state, action) {
  switch (action.type) {
    case "LIKE":
      state.posts.filter((post) => {
        if (post.id === action.id) {
          post.likes = action.likes;
        }
      });
      break;
  }
  return state;
}

function likeActionCreator(id, likes) {
  return { type: "LIKE", id, likes };
}

export { likeReducer, likeActionCreator };
