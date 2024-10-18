import { useEffect } from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { setUsersAC } from "../../../data/usersReducer";
import { getMessengerChats } from "../../../api/api";

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
  setUsers: setUsersAC,
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
  setUsers: (users: any) => void;
};

function UsersAPIComponent(props: UsersAPIComponentPropsType) {
  useEffect(() => {
    getMessengerChats().then((response) => {
      props.setUsers(response.data.items);
    });
  }, []);

  return <Users users={props.users} />;
}

export const UsersContainer = connect(mapStateToProps, actionCreators)(UsersAPIComponent);
