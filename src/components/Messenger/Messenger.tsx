import Chat from "./Chat/Chat";
import { UsersContainer } from "./Users/UsersContainer";
import { Login } from "../Login/Login";

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
  isAuth: boolean;
};

export default function Messenger(props: MessengerProps) {
  if (props.isAuth === false) {
    return (
      <section className="grid sm:grid-cols-[200px_1fr]">
        <Login />
      </section>
    );
  }

  return (
    <section className="grid sm:grid-cols-[200px_1fr]">
      <UsersContainer />
      <Chat messenger={props.messenger} stateText={props.stateText} sendMessage={props.sendMessage} />
    </section>
  );
}
