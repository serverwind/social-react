import React from "react";
import { Friend } from "./Friend/Friend";
import axios from "axios";

class Friends extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      this.props.setUsers(response.data.items);
    });
  }
  render() {
    return (
      <ul className="my-6 mx-4 flex gap-2">
        {this.props.users.map((user) => (
          <Friend key={user.id} id={user.id} name={user.name} friend={user.followed} addFriend={this.props.addFriend} removeFriend={this.props.removeFriend} />
        ))}
      </ul>
    );
  }
}

export { Friends };
