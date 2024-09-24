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

let actionCreators = {
  setUsers: setUsersAC,
};

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

const UsersContainer = connect(mapStateToProps, actionCreators)(UsersAPIComponent);

export { UsersContainer };
