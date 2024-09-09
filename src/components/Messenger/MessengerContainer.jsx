import { Messenger } from "./Messenger";
import { messengerInputActionCreator, sendMessageActionCreator } from "../../data/messengerReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messenger: state.messenger,
    users: state.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    stateText: (text) => {
      let action = messengerInputActionCreator(text);
      dispatch(action);
    },
    sendMessage: (id, text) => {
      let action = sendMessageActionCreator(id, text);
      dispatch(action);
    }
  }
}

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export { MessengerContainer };
