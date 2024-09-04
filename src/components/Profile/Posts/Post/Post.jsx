import { likeActionCreator } from "../../../../data/postReducer";

function Post({ id, post, likes, author, date, dispatch }) {
  function like() {
    likes++;
    let action = likeActionCreator(id, likes, (author = "Alex Lestra"));
    dispatch(action);
  }

  return (
    <div className="mb-4 border border-gray-300 rounded">
      <div className="italic p-4">{post}</div>
      <div className="flex gap-4 bg-gray-200 py-2 px-4 text-sm">
        <div>
          <button onClick={like}>
            <span className="mgc_heart_fill"></span>
          </button>
          <span> {likes}</span>
        </div>
        <div>
          <span className="mgc_user_2_fill"></span> <span>{author}</span>
        </div>
        <div>
          <span className="mgc_alarm_2_fill"></span> <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export { Post };
