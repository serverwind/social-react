// api request didn't work (403) just because
// API server is dead
// this is why props.addFriend(props.id);
// is outside of axios request.

import { connect } from "react-redux";
import { followUserTC, unfollowUserTC} from "../../../data/usersReducer";
import Follow from "./Follow";

const actionCreators = {
  followUser: followUserTC,
  unfollowUser: unfollowUserTC,
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
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
  id: number;
  friend: boolean;
};

function FollowContainerAPI({ ...props }: FollowContainerAPIPropsType) {
  function onAddFriend() {
    props.followUser(props.id);
  }

  function onRemoveFriend() {
    props.unfollowUser(props.id);
  }

  return <Follow {...props} inProgress={props.inProgress} onAddFriend={onAddFriend} onRemoveFriend={onRemoveFriend} />;
}

export const FollowContainer = connect(mapStateToProps, actionCreators)(FollowContainerAPI);
