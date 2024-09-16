import { Chat } from "./Chat/Chat";
import { Users } from "./Users/Users";

function Messenger({ stateText, sendMessage, setUsers, messenger, users }) {
  return (
    <section className="grid sm:grid-cols-[200px_1fr]">
      <Users users={users} setUsers={setUsers} />
      <Chat messenger={messenger} stateText={stateText} sendMessage={sendMessage} />
    </section>
  );
}

export { Messenger };
