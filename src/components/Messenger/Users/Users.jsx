import React from "react";
import axios from "axios";
import { User } from "./User/User";
import s from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      this.props.setUsers(response.data.items);
    });
  }
  render() {
    return (
      <div className="bg-gray-200 p-4">
        <ul className="flex flex-wrap sm:flex-col justify-center gap-2">
          {this.props.users.users.map((user) => (
            <User key={user.id} name={user.name} chat={`/messenger/${user.id}`} active={(name) => (name.isActive ? s.active : "")} />
          ))}
        </ul>
      </div>
    );
  }
}

export { Users };
