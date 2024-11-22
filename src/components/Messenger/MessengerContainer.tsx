import Messenger from "./Messenger";
import { sendMessageActionCreator } from "../../data/messengerReducer";
import { setUsersAC } from "../../data/usersReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import loadTheme from "../../utils/loadTheme";

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
  settings: {
    theme: string;
  };
};

function MessengerContainerAPI(props: any) {
  const theme = loadTheme(props.theme);

  return <Messenger {...props} theme={theme} />;
}

const mapStateToProps = (state: StateType) => {
  return {
    messenger: state.messenger,
    users: state.users,
    theme: state.settings.theme,
  };
};

const actionCreators = {
  sendMessage: sendMessageActionCreator,
  setUsers: setUsersAC,
};

export const MessengerContainer = compose(connect(mapStateToProps, actionCreators), withAuthRedirect)(MessengerContainerAPI);
