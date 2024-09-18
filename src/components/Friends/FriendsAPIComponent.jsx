import React from "react";
import { Friends } from "./Friends";
import axios from "axios";

class FriendsAPIComponent extends React.Component {
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
        <Friends users={this.props.users} addFriend={this.props.addFriend} removeFriend={this.props.removeFriend} totalPages={this.props.totalPages} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} />
      </section>
    );
  }
}

export { FriendsAPIComponent };
