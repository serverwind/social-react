import Messenger from "./Messenger";
import { messengerInputActionCreator, sendMessageActionCreator } from "../../data/messengerReducer";
import { setUsersAC } from "../../data/usersReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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
};

const mapStateToProps = (state: StateType) => {
  return {
    messenger: state.messenger,
    users: state.users,
  };
};

const actionCreators = {
  stateText: messengerInputActionCreator,
  sendMessage: sendMessageActionCreator,
  setUsers: setUsersAC,
};

let AuthRedirectComponent = withAuthRedirect(Messenger);

export const MessengerContainer = connect(mapStateToProps, actionCreators)(AuthRedirectComponent);
