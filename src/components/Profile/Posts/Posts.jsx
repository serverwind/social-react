import React from "react";
import { PostContainer } from "./Post/PostContainer";

function Posts({ posts, stateText, newPost }) {
  let newPostText = React.createRef();

  function onStateText() {
    let text = newPostText.current.value;
    stateText(text);
  }

  function onNewPost() {
    let id = posts.posts.length + 1;
    newPost(id, posts.input.text, 0, "Alex Lestra", "Today");
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">My posts</h2>
      <div className="flex gap-2 mb-4">
        <input ref={newPostText} onChange={onStateText} className="border border-gray-300 p-2 w-full lg:w-2/5" type="text" value={posts.input.text} />
        <button onClick={onNewPost} className="border bg-gray-300">
          <span className="mgc_send_fill py-2 px-4"></span>
        </button>
      </div>

      <div>
        {posts.posts.map((post) => (
          <PostContainer id={post.id} key={post.id} post={post.post} likes={post.likes} author={post.author} date={post.date} />
        ))}
      </div>
    </div>
  );
}

export { Posts };
