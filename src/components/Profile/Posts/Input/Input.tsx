import { useRef } from "react";

export default function Input({ posts, stateText, newPost }) {
  let newPostText = useRef<HTMLInputElement>(null);

  function onStateText() {
    if (newPostText.current) {
      const text: string = newPostText.current.value;
      stateText(text);
    }
  }

  function onNewPost() {
    const id: number = posts.posts.length + 1;
    newPost(id, posts.input.text, 0, "Alex Lestra", "Today");
  }

  return (
    <div className="flex gap-2 mb-4">
      <input ref={newPostText} onChange={onStateText} className="border border-gray-300 p-2 w-full lg:w-2/5" type="text" value={posts.input.text} />
      <button onClick={onNewPost} className="border bg-gray-300">
        <span className="mgc_send_fill py-2 px-4"></span>
      </button>
    </div>
  );
}
