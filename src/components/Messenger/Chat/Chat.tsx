import { useRef } from "react";
import Message from "./Message/Message";

type ChatProps = {
  messenger: {
    input: {
      text: string;
    };
    messages: {
      id: number;
      message: string;
    }[];
  };
  stateText: (text: string) => void;
  sendMessage: (id: number, text: string) => void;
};

export default function Chat({ messenger, stateText, sendMessage }: ChatProps) {
  let newMessageText = useRef<HTMLInputElement>(null);

  function onStateText() {
    if (newMessageText.current) {
      let text: string = newMessageText.current.value;
      stateText(text);
    }
  }

  function onSendMessage() {
    let id: number = messenger.messages.length + 1;
    sendMessage(id, messenger.input.text);
  }

  return (
    <div className="bg-gray-100 p-4">
      {messenger.messages.map((message: { id: number; message: string }) => (
        <Message id={message.id} message={message.message} />
      ))}
      <div className="flex gap-2 my-4">
        <input ref={newMessageText} onChange={onStateText} className="border border-gray-300 p-2 w-full lg:w-2/5" type="text" value={messenger.input.text} />
        <button onClick={onSendMessage} className="border bg-gray-300">
          <span className="mgc_send_fill py-2 px-4"></span>
        </button>
      </div>
    </div>
  );
}
