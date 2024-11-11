import Chat from "./Chat/Chat";
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
  theme: {
    bg: string;
    text: string;
  };
  stateText: (text: string) => void;
  sendMessage: (id: number, text: string) => void;
};

export default function Messenger(props: MessengerProps) {
  return (
    <section className="grid sm:grid-cols-[200px_1fr]">
      <UsersContainer />
      <Chat messenger={props.messenger} stateText={props.stateText} sendMessage={props.sendMessage} theme={props.theme} />
    </section>
  );
}
