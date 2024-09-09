import { Messenger } from "./Messenger";
import { messengerInputActionCreator, sendMessageActionCreator } from "../../data/messengerReducer";
import { StoreContext } from "../../StoreContext";

function MessengerContainer() {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();
  function stateText(text) {
    let action = messengerInputActionCreator(text);
    store.dispatch(action);
  }

  function sendMessage(id, text) {
    let action = sendMessageActionCreator(id, text);
    store.dispatch(action);
  }
        return <Messenger stateText={stateText} sendMessage={sendMessage} messenger={state.messenger} users={state.users} />;
        }
      }
    </StoreContext.Consumer>
  )
}

export { MessengerContainer };
