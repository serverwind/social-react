import React from "react";
import { Friend } from "./Friend/Friend";
import axios from "axios";
import s from "./Friends.module.css";

class Friends extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      this.props.setUsers(response.data.items);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    let pagesAmount = Math.ceil(this.props.totalPages / this.props.pageSize);
    let pages = [];
    for (let i = 1; i < pagesAmount + 1; i++) {
      pages.push(i);
    }

    return (
      <>
        <div>
          {pages.map((page) => (
            <span className={page === this.props.currentPage ? s.active : ""} key={page} onClick={() => this.onPageChanged(page)}>
              {page}
            </span>
          ))}
        </div>
        <ul className="my-6 mx-4 flex gap-2">
          {this.props.users.map((user) => (
            <Friend key={user.id} id={user.id} name={user.name} friend={user.followed} addFriend={this.props.addFriend} removeFriend={this.props.removeFriend} />
          ))}
        </ul>
      </>
    );
  }
}

export { Friends };
