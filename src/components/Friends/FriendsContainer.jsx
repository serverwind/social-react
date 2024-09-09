import { Friends } from "./Friends";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    friends: state.users.friends
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export { FriendsContainer };
