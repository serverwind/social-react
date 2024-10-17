import { useEffect } from "react";
import { Users } from "./Users";
import { connect } from "react-redux";
import { setUsersAC } from "../../../data/usersReducer";
import { getMessengerChats } from "../../../api/api";

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

let actionCreators = {
  setUsers: setUsersAC,
};

function UsersAPIComponent(props) {
  useEffect(() => {
    getMessengerChats().then((response) => {
      props.setUsers(response.data.items);
    });
  }, []);

  return <Users users={props.users} />;
}

const UsersContainer = connect(mapStateToProps, actionCreators)(UsersAPIComponent);

export { UsersContainer };
