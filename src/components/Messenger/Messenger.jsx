import { User } from "./User/User";
import { Message } from "./Message/Message";
import data from "../../data/users.json";
import messages from "../../data/messages.json";

function Messenger() {

  return (
    <section className="grid grid-cols-[200px_1fr]">
      <div className="bg-gray-200 p-4">
        <ul className="flex flex-col gap-2">
          {data.users.map((user) => (
            <User key={user.id} name={user.name} chat={`/messenger/${user.id}`} />
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 p-4">
        {messages.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
      </div>
    </section>
  );
}

export { Messenger };
