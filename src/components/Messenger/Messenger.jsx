import { User } from "./User/User";
import { Message } from "./Message/Message";

function Messenger({ messages, users }) {
  return (
    <section className="grid grid-cols-[200px_1fr]">
      <div className="bg-gray-200 p-4">
        <ul className="flex flex-col gap-2">
          {users.users.map((user) => (
            <User key={user.id} name={user.name} chat={`/messenger/${user.id}`} />
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 p-4">
        {messages.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
        <div className="flex gap-2 my-4">
          <input className="border border-gray-300 p-2" type="text" />
          <button className="border bg-gray-700 py-2 px-4 text-white text-sm">Send</button>
        </div>
      </div>
    </section>
  );
}

export { Messenger };
