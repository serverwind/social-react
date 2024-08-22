import { User } from "./User/User";
import { Message } from "./Message/Message";

function Messenger() {
  const users = [
    { name: "Emily", id: "1" },
    { name: "Jimmy", id: "2" },
    { name: "Sally", id: "3" },
    { name: "Maria", id: "4" },
    { name: "Tommy", id: "5" },
  ];

  const messages = [
    { message: "Hello, how are you?", id: "1" },
    { message: "Thanks!", id: "2" },
  ];

  return (
    <section className="grid grid-cols-[200px_1fr]">
      <div className="bg-gray-200 p-4">
        <ul className="flex flex-col gap-2">
          {users.map((user) => (
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
