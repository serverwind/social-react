import { Chat } from "./Chat/Chat";
import { Users } from "./Users/Users";

function Messenger({ stateText, sendMessage, messenger, users }) {

  return (
    <section className="grid sm:grid-cols-[200px_1fr]">
      <Users users={users} />
      <Chat messenger={messenger} stateText={stateText} sendMessage={sendMessage} />
    </section>
  );
}

export { Messenger };
