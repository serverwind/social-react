import { Posts } from "./Posts";
import { newPostActionCreater, stateTextActionCreator } from "../../../data/postReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    stateText: (text) => {
      let action = stateTextActionCreator(text);
      dispatch(action);
    },
    newPost: (id, text, likes, author, date) => {
      let action = newPostActionCreater(id, text, likes, author, date);
      dispatch(action);
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export { PostsContainer };
