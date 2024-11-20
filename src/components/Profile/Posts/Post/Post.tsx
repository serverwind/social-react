type PostProps = {
  id: number;
  post: string;
  likes: number;
  author: string;
  date: string;
  theme: {
    bg: string;
    text: string;
  }
  like: (id: number, likes: number) => void;
};

export default function Post(props: PostProps) {
  function setLike() {
    let likes = props.likes;
    ++likes;
    props.like(props.id, likes);
    debugger
  }

  return (
    <div className={ `mb-4 border rounded ${props.theme.bg}` }>
      <div className={ `italic p-4 ${props.theme.text}` }>{props.post}</div>
      <div className="flex gap-4 bg-gray-200 py-2 px-4 text-sm">
        <div>
          <button onClick={setLike}>
            <span className="mgc_heart_fill"></span>
          </button>
          <span> {props.likes}</span>
        </div>
        <div>
          <span className="mgc_user_2_fill"></span> <span>{props.author}</span>
        </div>
        <div>
          <span className="mgc_alarm_2_fill"></span> <span>{props.date}</span>
        </div>
      </div>
    </div>
  );
}
