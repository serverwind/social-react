import React from "react";
import { User } from "./User/User";
import { Message } from "./Message/Message";
import s from "./Messenger.module.css";

function Messenger({ stateText, sendMessage, messenger, users }) {
  let newMessageText = React.createRef();

  function onStateText() {
    let text = newMessageText.current.value;
    stateText(text);
  }

  function onSendMessage() {
    let id = messenger.messages.length + 1;
    sendMessage(id, messenger.input.text);
  }

  return (
    <section className="grid sm:grid-cols-[200px_1fr]">
      <div className="bg-gray-200 p-4">
        <ul className="flex flex-wrap sm:flex-col justify-center gap-2">
          {users.map((user) => (
            <User key={user.id} name={user.name} chat={`/messenger/${user.id}`} active={(name) => (name.isActive ? s.active : "")} />
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 p-4">
        {messenger.messages.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
        <div className="flex gap-2 my-4">
          <input ref={newMessageText} onChange={onStateText} className="border border-gray-300 p-2 w-full lg:w-2/5" type="text" value={messenger.input.text} />
          <button onClick={onSendMessage} className="border bg-gray-300">
            <span className="mgc_send_fill py-2 px-4"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export { Messenger };
