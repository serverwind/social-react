import { connect } from "react-redux";
// import {  } from "../../data/usersReducer";
import { Music } from "./Music";

// function mapDispatchToProps(dispatch) {
//   return {
//     addFriend: (id) => dispatch(addFriendAC(id)),
//     removeFriend: (id) => dispatch(removeFriendAC(id)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//     setTotalPages: (totalPages) => dispatch(setTotalPagesAC(totalPages)),
//   };
// }

function mapStateToProps(state) {
  return {
    music: state.music.items,
  };
}

const MusicContainer = connect(mapStateToProps, null)(Music);

export { MusicContainer };
