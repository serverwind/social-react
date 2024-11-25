import { reduxForm, Field } from "redux-form";
import Message from "./Message/Message";
import { requiredField, maxLengthCreator, minLengthCreator } from "../../../utils/validators";
import FormsControl from "../../common/FormsControl";

type ChatProps = {
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
  sendMessage: (id: number, text: string) => void;
};

function ChatForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="flex gap-2 my-4">
      <Field component={FormsControl} validate={[requiredField, maxLengthCreator(10), minLengthCreator(2)]} className="border border-gray-300 p-2 w-full" type="text" name="text" />
      <button onClick={props.onSendMessage} className="border bg-gray-300">
        <span className="mgc_send_fill py-2 px-4"></span>
      </button>
    </form>
  );
}

const ReduxChatForm = reduxForm({ form: "messenger" })(ChatForm);

export default function Chat({ messenger, sendMessage, theme }: ChatProps) {
  function onSendMessage(formData: { text: string }) {
    let id: number = messenger.messages.length + 1;
    sendMessage(id, formData.text);
  }

  return (
    <div className={`${theme.bg} p-4`}>
      {messenger.messages.map((message: { id: number; message: string }) => (
        <Message id={message.id} message={message.message} />
      ))}
      <ReduxChatForm onSubmit={onSendMessage} />
    </div>
  );
}
