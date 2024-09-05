import { Posts } from "./Posts";
import { newPostActionCreater, stateTextActionCreator } from "../../../data/postReducer";

function PostsContainer({ posts, dispatch }) {
  function stateText(text) {
    let action = stateTextActionCreator(text);
    dispatch(action);
  }

  function newPost(id, text, likes, author, date) {
    let action = newPostActionCreater(id, text, likes, author, date);
    dispatch(action);
  }

  return <Posts posts={posts} stateText={stateText} newPost={newPost} dispatch={dispatch} />;
}

export { PostsContainer };
