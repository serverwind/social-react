import React from "react";
import { Users } from "./Users";
import { connect } from "react-redux";
import axios from "axios";
import { setUsersAC } from "../../../data/usersReducer";

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUsers: (users) => dispatch(setUsersAC(users)),
  };
}

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return <Users users={this.props.users} />;
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export { UsersContainer };
