import { Chat } from "./Chat/Chat";
import { UsersContainer } from "./Users/UsersContainer";

function Messenger({ stateText, sendMessage, messenger }) {
  return (
    <section className="grid sm:grid-cols-[200px_1fr]">
      <UsersContainer />
      <Chat messenger={messenger} stateText={stateText} sendMessage={sendMessage} />
    </section>
  );
}

export { Messenger };
