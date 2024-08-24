import React from "react";
import { Post } from "./Post/Post";

function Posts({ posts, addPost, changeInput }) {
  let newPostText = React.createRef();

  function newPost() {
    let text = newPostText.current.value;
    let id = posts.posts.length + 1;
    addPost(id, text);
  }

  function stateText() {
    let text = newPostText.current.value;
    changeInput(text);
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">My posts</h2>
      <div className="flex gap-2 mb-4">
        <input ref={newPostText} onChange={stateText} className="border border-gray-300 p-2" type="text" value={posts.input.text} />
        <button onClick={newPost} className="border bg-gray-700 py-2 px-4 text-white text-sm">
          Post
        </button>
      </div>

      <div>
        {posts.posts.map((post, index) => (
          <Post key={index} post={post.post} />
        ))}
      </div>
    </div>
  );
}

export { Posts };
