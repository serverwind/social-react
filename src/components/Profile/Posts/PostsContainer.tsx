import Posts from "./Posts";
import { newPostActionCreater, stateTextActionCreator } from "../../../data/postReducer";
import { connect } from "react-redux";

type stateType = {
  posts: {
    id: number;
    post: string;
    likes: number;
    author: string;
    date: string;
  };
  stateText: (text: string) => void;
  newPost: (id: number, post: string, likes: number, author: string, date: string) => void;
};

const mapStateToProps = (state: stateType) => {
  return {
    posts: state.posts,
  };
};

const actionCreators = {
  stateText: stateTextActionCreator,
  newPost: newPostActionCreater,
};

export const PostsContainer = connect(mapStateToProps, actionCreators)(Posts);
