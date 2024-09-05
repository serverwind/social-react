import { Messenger } from "./Messenger";
import { messengerInputActionCreator, sendMessageActionCreator } from "../../data/messengerReducer";

function MessengerContainer({ messenger, users, dispatch }) {
  function stateText(text) {
    let action = messengerInputActionCreator(text);
    dispatch(action);
  }

  function sendMessage(id, text) {
    let action = sendMessageActionCreator(id, text);
    dispatch(action);
  }

  return <Messenger stateText={stateText} sendMessage={sendMessage} messenger={messenger} users={users} />;
}

export { MessengerContainer };
