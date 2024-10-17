import { Chat } from "./Chat/Chat";
import { UsersContainer } from "./Users/UsersContainer";

type MessengerProps = {
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

function Messenger({ messenger, stateText, sendMessage }: MessengerProps) {
  return (
    <section className="grid sm:grid-cols-[200px_1fr]">
      <UsersContainer />
      <Chat messenger={messenger} stateText={stateText} sendMessage={sendMessage} />
    </section>
  );
}

export { Messenger };
