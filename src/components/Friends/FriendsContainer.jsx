import { Friends } from "./Friends";
import { connect } from "react-redux";
import { addFriendAC, removeFriendAC } from "../../data/usersReducer";

function mapDispatchToProps(dispatch) {
  return {
    addFriend: (id) => dispatch(addFriendAC(id)),
    removeFriend: (id) => dispatch(removeFriendAC(id)),
  };
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export { FriendsContainer };
