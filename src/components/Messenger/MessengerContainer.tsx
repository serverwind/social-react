import Messenger from "./Messenger";
import { messengerInputActionCreator, sendMessageActionCreator } from "../../data/messengerReducer";
import { setUsersAC } from "../../data/usersReducer";
import { connect } from "react-redux";

type StateType = {
  messenger: {
    messages: [
      {
        id: number;
        message: string;
      }
    ];
    input: {
      text: string;
    };
  };
  users: {
    users: [
      {
        id: number;
        name: string;
      }
    ];
  };
  auth: {
    isAuth: boolean;
  };
};

const mapStateToProps = (state: StateType) => {
  return {
    messenger: state.messenger,
    users: state.users,
    auth: state.auth.isAuth,
  };
};

const actionCreators = {
  stateText: messengerInputActionCreator,
  sendMessage: sendMessageActionCreator,
  setUsers: setUsersAC,
};

export const MessengerContainer = connect(mapStateToProps, actionCreators)(Messenger);
