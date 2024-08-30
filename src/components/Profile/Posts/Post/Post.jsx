import { likeActionCreator } from "../../../../data/likeReducer";

function Post({ id, post, likes, author, dispatch }) {
  function like() {
    likes++;
    let action = likeActionCreator(id, likes, author = "Alex Lestra");
    dispatch(action);
  }

  return (
    <div className="mb-4 border border-gray-300 rounded">
      <div className="italic p-4">{post}</div>
      <div className="bg-gray-200 py-2 px-4">
        <button onClick={like}><span className="mgc_heart_fill"></span></button>
        <span> {likes}</span>
        <span>Author: {author}</span>
      </div>
    </div>
  );
}

export { Post };
