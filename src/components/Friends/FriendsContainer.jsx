import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { addFriendAC, removeFriendAC, setUsersAC, setCurrentPageAC, setTotalPagesAC, setIsLoadingAC } from "../../data/usersReducer";
import { Friends } from "./Friends";

let actionCreators = {
  addFriend: addFriendAC,
  removeFriend: removeFriendAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalPages: setTotalPagesAC,
  setIsLoading: setIsLoadingAC,
};

function mapStateToProps(state) {
  return {
    users: state.users.users,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    totalPages: state.users.totalPages,
    isLoading: state.users.isLoading,
  };
}

// class FriendsAPIComponent extends React.Component {
//   componentDidMount() {
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
//       this.props.setUsers(response.data.items);
//       this.props.setTotalPages(response.data.totalCount);
//     });
//   }

//   onPageChanged = (pageNumber) => {
//     this.props.setCurrentPage(pageNumber);
//     this.props.setIsLoading(true);
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
//       this.props.setUsers(response.data.items);
//       this.props.setIsLoading(false);
//     });
//   };

//   render() {
//     let pagesAmount = Math.ceil(this.props.totalPages / this.props.pageSize);
//     let pages = [];
//     for (let i = 1; i < pagesAmount + 1; i++) {
//       pages.push(i);
//     }

//     return (
//       <section>
//         <Friends users={this.props.users} addFriend={this.props.addFriend} removeFriend={this.props.removeFriend} totalPages={this.props.totalPages} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} isLoading={this.props.isLoading} />
//       </section>
//     );
//   }
// }

function FriendsAPIComponent(props) {
  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${props.currentPage}&count=${props.pageSize}`).then((response) => {
      props.setUsers(response.data.items);
      props.setTotalPages(response.data.totalCount);
    });
  }, []);

  useEffect(() => {
    props.setIsLoading(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${props.currentPage}&count=${props.pageSize}`).then((response) => {
      props.setUsers(response.data.items);
      props.setIsLoading(false);
    });
  }, [])

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.setIsLoading(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${props.pageSize}`).then((response) => {
      props.setUsers(response.data.items);
      props.setIsLoading(false);
    });
  };
    return (
      <section>
        <Friends users={props.users} addFriend={props.addFriend} removeFriend={props.removeFriend} totalPages={props.totalPages} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={onPageChanged} isLoading={props.isLoading} />
      </section>
    );
  }


const FriendsContainer = connect(mapStateToProps, actionCreators)(FriendsAPIComponent);

export { FriendsContainer };
