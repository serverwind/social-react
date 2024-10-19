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
    async function processMessengerChats() {
      try {
        const response = await getMessengerChats();
        props.setUsers(response.data.items);
      } catch (error) {
        console.log(error);
      }
    }
    processMessengerChats();
  }, []);

  return <Users users={props.users} />;
}

export const UsersContainer = connect(mapStateToProps, actionCreators)(UsersAPIComponent);
