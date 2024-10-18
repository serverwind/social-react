import Post from "./Post";
import { connect } from "react-redux";
import { likeActionCreator } from "../../../../data/postReducer";

const actionCreators = {
  like: likeActionCreator,
};

export const PostContainer = connect(null, actionCreators)(Post);
