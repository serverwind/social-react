import { Posts } from "./Posts";
import { newPostActionCreater, stateTextActionCreator } from "../../../data/postReducer";
import { StoreContext } from "../../../StoreContext";

function PostsContainer() {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();
  function stateText(text) {
    let action = stateTextActionCreator(text);
    store.dispatch(action);
  }

  function newPost(id, text, likes, author, date) {
    let action = newPostActionCreater(id, text, likes, author, date);
    store.dispatch(action);
  }
        return  <Posts posts={state.posts} stateText={stateText} newPost={newPost} dispatch={store.dispatch} />
        }
      }
    </StoreContext.Consumer>
  )
}

export { PostsContainer };
