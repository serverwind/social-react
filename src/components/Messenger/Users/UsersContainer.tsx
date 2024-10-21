import { useEffect } from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { showChatsTC } from "../../../data/usersReducer";

type StateType = {
  users: {
    users: [
      {
        id: number;
        name: string;
      }
    ];
  };
};

function mapStateToProps(state: StateType) {
  return {
    users: state.users,
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
  showChats: () => void;
};

function UsersAPIComponent(props: UsersAPIComponentPropsType) {
  useEffect(() => {
    props.showChats();
  }, []);

  return <Users users={props.users} />;
}

export const UsersContainer = connect(mapStateToProps, actionCreators)(UsersAPIComponent);
