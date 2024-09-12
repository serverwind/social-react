import { Chat } from "./Chat/Chat";
import { User } from "./User/User";
import s from "./Messenger.module.css";

function Messenger({ stateText, sendMessage, messenger, users }) {

  return (
    <section className="grid sm:grid-cols-[200px_1fr]">
      <div className="bg-gray-200 p-4">
        <ul className="flex flex-wrap sm:flex-col justify-center gap-2">
          {users.users.map((user) => (
            <User key={user.id} name={user.name} chat={`/messenger/${user.id}`} active={(name) => (name.isActive ? s.active : "")} />
          ))}
        </ul>
      </div>
      <Chat messenger={messenger} stateText={stateText} sendMessage={sendMessage} />
    </section>
  );
}

export { Messenger };
