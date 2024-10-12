import { useEffect } from "react";
import { Users } from "./Users";
import { connect } from "react-redux";
import axios from "axios";
import { setUsersAC } from "../../../data/usersReducer";

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
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      props.setUsers(response.data.items);
    });
  }, []);

  return <Users users={props.users} />;
}

const UsersContainer = connect(mapStateToProps, actionCreators)(UsersAPIComponent);

export { UsersContainer };
