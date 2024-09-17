import { Friends } from "./Friends";
import { connect } from "react-redux";
import { addFriendAC, removeFriendAC, setUsersAC, setCurrentPageAC } from "../../data/usersReducer";

function mapDispatchToProps(dispatch) {
  return {
    addFriend: (id) => dispatch(addFriendAC(id)),
    removeFriend: (id) => dispatch(removeFriendAC(id)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
  };
}

function mapStateToProps(state) {
  return {
    users: state.users.users,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    totalPages: state.users.totalPages,
  };
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export { FriendsContainer };
