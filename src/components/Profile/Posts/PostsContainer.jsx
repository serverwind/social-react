import { Posts } from "./Posts";
import { newPostActionCreater, stateTextActionCreator } from "../../../data/postReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

let actionCreators = {
  stateText: stateTextActionCreator,
  newPost: newPostActionCreater,
}

const PostsContainer = connect(mapStateToProps, actionCreators)(Posts);

export { PostsContainer };
