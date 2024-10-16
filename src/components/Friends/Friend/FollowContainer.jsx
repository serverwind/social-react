import { connect } from "react-redux";
import { addFriendAC, removeFriendAC } from "../../../data/usersReducer";
import { Follow } from "./Follow";

let actionCreators = {
  addFriend: addFriendAC,
  removeFriend: removeFriendAC,
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

function FollowContainerAPI(props) {
  function onAddFriend() {
    props.addFriend(props.id);
  }

  function onRemoveFriend() {
    props.removeFriend(props.id);
  }

  return <Follow {...props} onAddFriend={onAddFriend} onRemoveFriend={onRemoveFriend} />;
}

const FollowContainer = connect(mapStateToProps, actionCreators)(FollowContainerAPI);

export { FollowContainer };
