import { useEffect } from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { showChatsTC } from "../../../data/usersReducer";
import loadTheme from "../../../utils/loadTheme";

type StateType = {
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

function mapStateToProps(state: StateType) {
  return {
    users: state.users,
    theme: state.settings.theme,
  };
}

const actionCreators = {
  showChats: showChatsTC,
};

type UsersAPIComponentPropsType = {
  users: {
    users: [
      {
        id: number;
        name: string;
      }
    ];
  };
  theme: {
    bg: string;
    text: string;
  };
  showChats: () => void;
};

function UsersAPIComponent(props: UsersAPIComponentPropsType) {
  useEffect(() => {
    props.showChats();
  }, []);

  const theme = loadTheme(props.theme);

  return <Users users={props.users} theme={theme} />;
}

export const UsersContainer = connect(mapStateToProps, actionCreators)(UsersAPIComponent);
