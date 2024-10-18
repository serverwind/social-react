// api request didn't work (403) just because
// API server is dead
// this is why props.addFriend(props.id);
// is outside of axios request.

import { connect } from "react-redux";
import { addFriendAC, removeFriendAC, setInProgressAC } from "../../../data/usersReducer";
import Follow from "./Follow";
import { followUser, unfollowUser } from "../../../api/api";

const actionCreators = {
  addFriend: addFriendAC,
  removeFriend: removeFriendAC,
  setInProgress: setInProgressAC,
};

type StateType = {
  users: {
    inProgress: boolean;
  };
};

const mapStateToProps = (state: StateType) => {
  return {
    inProgress: state.users.inProgress,
  };
};

type FollowContainerAPIPropsType = {
  setInProgress: (value: boolean) => void;
  inProgress: boolean;
  addFriend: (id: number) => void;
  removeFriend: (id: number) => void;
  id: number;
  friend: boolean;
};

function FollowContainerAPI({ ...props }: FollowContainerAPIPropsType) {
  function onAddFriend() {
    props.setInProgress(true);
    followUser(props.id).then((response) => {
      response.data.resultCode === 0 ? props.addFriend(props.id) : null;
    });

    props.addFriend(props.id);
    props.setInProgress(false);
  }

  function onRemoveFriend() {
    props.setInProgress(true);
    unfollowUser(props.id).then((response) => {
      response.data.resultCode === 0 ? props.removeFriend(props.id) : null;
    });

    props.removeFriend(props.id);
    props.setInProgress(false);
  }

  return <Follow {...props} inProgress={props.inProgress} onAddFriend={onAddFriend} onRemoveFriend={onRemoveFriend} />;
}

export const FollowContainer = connect(mapStateToProps, actionCreators)(FollowContainerAPI);
