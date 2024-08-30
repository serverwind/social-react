import React from "react";
import { Post } from "./Post/Post";
import { newPostActionCreater, stateTextActionCreator } from "../../../data/postReducer";

function Posts({ posts, dispatch }) {
  let newPostText = React.createRef();

  /* send data user input
   * so when state updates
   * component will re-render (FLUX architecture)
   */
  function stateText() {
    let text = newPostText.current.value;
    let action = stateTextActionCreator(text);
    dispatch(action);
  }

  function newPost() {
    let id = posts.posts.length + 1;
    let action = newPostActionCreater(id, posts.input.text, 0, "Alex Lestra", "Today");
    dispatch(action);
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">My posts</h2>
      <div className="flex gap-2 mb-4">
        <input ref={newPostText} onChange={stateText} className="border border-gray-300 p-2 w-full lg:w-2/5" type="text" value={posts.input.text} />
        <button onClick={newPost} className="border bg-gray-300">
          <span className="mgc_send_fill py-2 px-4"></span>
        </button>
      </div>

      <div>
        {posts.posts.map((post) => (
          <Post id={post.id} key={post.id} post={post.post} likes={post.likes} author={post.author} date={post.date} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

export { Posts };
