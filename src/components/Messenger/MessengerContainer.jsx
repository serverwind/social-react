import { Messenger } from "./Messenger";
import { messengerInputActionCreator, sendMessageActionCreator } from "../../data/messengerReducer";
import { setUsersAC } from "../../data/usersReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messenger: state.messenger,
    users: state.users,
  };
};

let actionCreators = {
  stateText: messengerInputActionCreator,
  sendMessage: sendMessageActionCreator,
  setUsers: setUsersAC,
}

const MessengerContainer = connect(mapStateToProps, actionCreators)(Messenger);

export { MessengerContainer };
