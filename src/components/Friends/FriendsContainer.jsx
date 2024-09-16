import { Friends } from "./Friends";
import { connect } from "react-redux";
import { addFriendAC, removeFriendAC, setUsersAC } from "../../data/usersReducer";

function mapDispatchToProps(dispatch) {
  return {
    addFriend: (id) => dispatch(addFriendAC(id)),
    removeFriend: (id) => dispatch(removeFriendAC(id)),
    setUsers: (users) => dispatch(setUsersAC(users)),
  };
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export { FriendsContainer };
