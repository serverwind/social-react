import { connect } from "react-redux";
import axios from "axios";
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
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, { withCredentials: true, headers: { "API-KEY": "b7ef8bad-0791-4860-931e-92664d" } }).then((response) => {
      response.data.resultCode === 0 ? props.addFriend(props.id) : null;
    });
  }

  function onRemoveFriend() {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, { withCredentials: true, headers: { "API-KEY": "b7ef8bad-0791-4860-931e-92664d" } }).then((response) => {
      response.data.resultCode === 0 ? props.removeFriend(props.id) : null;
    });
  }

  return <Follow {...props} onAddFriend={onAddFriend} onRemoveFriend={onRemoveFriend} />;
}

const FollowContainer = connect(mapStateToProps, actionCreators)(FollowContainerAPI);

export { FollowContainer };
