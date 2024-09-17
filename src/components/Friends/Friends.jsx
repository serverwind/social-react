import React from "react";
import { Friend } from "./Friend/Friend";
import { Pagination } from "./Pagination/Pagination";
import axios from "axios";

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
        <Pagination pages={pages} onPageChanged={this.onPageChanged} currentPage={this.props.currentPage} />
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
