// api request didn't work (403) just because
// API server is dead

import { connect } from "react-redux";
import { addFriendAC, removeFriendAC } from "../../../data/usersReducer";
import { Follow } from "./Follow";
import { followUser, unfollowUser } from "../../../api/api";

let actionCreators = {
  addFriend: addFriendAC,
  removeFriend: removeFriendAC,
};

function FollowContainerAPI(props) {
  function onAddFriend() {
    followUser(props.id).then((response) => {
      response.data.resultCode === 0 ? props.addFriend(props.id) : null;
    });

    props.addFriend(props.id);
  }

  function onRemoveFriend() {
    unfollowUser(props.id).then((response) => {
      response.data.resultCode === 0 ? props.removeFriend(props.id) : null;
    });

    props.removeFriend(props.id);
  }

  return <Follow {...props} onAddFriend={onAddFriend} onRemoveFriend={onRemoveFriend} />;
}

const FollowContainer = connect(null, actionCreators)(FollowContainerAPI);

export { FollowContainer };
