import { useRef } from "react";

export default function Input(props) {
  let newPostText = useRef<HTMLInputElement>(null);

  function onStateText() {
    if (newPostText.current) {
      const text: string = newPostText.current.value;
      props.stateText(text);
    }
  }

  function onNewPost() {
    const id: number = props.posts.posts.length + 1;
    props.newPost(id, props.posts.input.text, 0, "Alex Lestra", "Today");
  }

  return (
    <div className="flex gap-2 mb-4">
      <input ref={newPostText} onChange={onStateText} className={ `border border-gray-300 p-2 w-full lg:w-2/5 ${props.theme.bg} ${props.theme.text}` } type="text" value={props.posts.input.text} />
      <button onClick={onNewPost} className={ `border ${props.theme.bg}` }>
        <span className="mgc_send_fill py-2 px-4"></span>
      </button>
    </div>
  );
}
