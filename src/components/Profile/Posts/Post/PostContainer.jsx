import { Post } from "./Post";
import { connect } from "react-redux";
import { likeActionCreator } from "../../../../data/postReducer";

let actionCreators = {
  like: likeActionCreator,
};

const PostContainer = connect(null, actionCreators)(Post);

export { PostContainer };
