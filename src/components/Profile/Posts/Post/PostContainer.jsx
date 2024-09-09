import { Post } from "./Post";
import { connect } from "react-redux";
import { likeActionCreator } from "../../../../data/postReducer";

function mapDispatchToProps(dispatch) {
  return {
    like: (id, likes) => {
      let action = likeActionCreator(id, likes);
      dispatch(action);
    },
  };
}

const PostContainer = connect(null, mapDispatchToProps)(Post);

export { PostContainer };
