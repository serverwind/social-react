import React from "react";
import { Friend } from "./Friend/Friend";
import axios from "axios";
import s from "./Friends.module.css";

class Friends extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.setTotalPages(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
    });
  };

  render() {
    let pagesAmount = Math.ceil(this.props.totalPages / this.props.pageSize);
    let pages = [];
    for (let i = 1; i < pagesAmount + 1; i++) {
      pages.push(i);
    }

    return (
      <section>
        <div className="overflow-x-auto w-11/12 flex gap-2">
          {pages.map((page) => (
            <span className={page === this.props.currentPage ? s.active + " cursor-pointer bg-gray-200 py-2 px-4" : "cursor-pointer bg-gray-100 py-2 px-4"} key={page} onClick={() => this.onPageChanged(page)}>
              {page}
            </span>
          ))}
        </div>
        <ul className="my-6 mx-4 flex sm:flex-row flex-col gap-2">
          {this.props.users.map((user) => (
            <Friend key={user.id} id={user.id} name={user.name} friend={user.followed} addFriend={this.props.addFriend} removeFriend={this.props.removeFriend} />
          ))}
        </ul>
      </section>
    );
  }
}

export { Friends };
