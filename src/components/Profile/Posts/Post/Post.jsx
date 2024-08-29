import { likeActionCreator } from "../../../../data/likeReducer";

function Post({ id, post, likes, dispatch }) {
  function like() {
    likes++;
    let action = likeActionCreator(id, likes);
    dispatch(action);
  }

  return (
    <div className="mb-4">
      <div className="italic mb-2">{post}</div>
      <div>
        <button onClick={like}>❤</button>
        <span>{likes}</span>
      </div>
    </div>
  );
}

export { Post };
