import { connect } from "react-redux";
import axios from "axios";
import { addFriendAC, removeFriendAC } from "../../../data/usersReducer";
import { Follow } from "./Follow";

let actionCreators = {
  addFriend: addFriendAC,
  removeFriend: removeFriendAC,
};

function FollowContainerAPI(props) {
  function onAddFriend() {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, { withCredentials: true, headers: { "API-KEY": "0261e173-fc5b-4bb7-9d2e-12b446daff16" } }).then((response) => {
        response.data.resultCode === 0 ? props.addFriend(props.id) : null;
      });
  }

  function onRemoveFriend() {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, { withCredentials: true, headers: { "API-KEY": "0261e173-fc5b-4bb7-9d2e-12b446daff16" } }).then((response) => {
      response.data.resultCode === 0 ? props.removeFriend(props.id) : null;
    });
  }

  return <Follow {...props} onAddFriend={onAddFriend} onRemoveFriend={onRemoveFriend} />;
}

const FollowContainer = connect(null, actionCreators)(FollowContainerAPI);

export { FollowContainer };
