import Posts from "./Posts";
import { newPostActionCreater } from "../../../data/postReducer";
import { connect } from "react-redux";
import loadTheme from "../../../utils/loadTheme";

type stateType = {
  posts: {
    id: number;
    post: string;
    likes: number;
    author: string;
    date: string;
  };
  settings: {
    theme: string;
  }
  newPost: (id: number, post: string, likes: number, author: string, date: string) => void;
};

function PostsContainerAPI(props: stateType) {
  const theme = loadTheme(props.theme);
  return <Posts posts={props.posts} newPost={props.newPost} theme={theme} />;
}

const mapStateToProps = (state: stateType) => {
  return {
    posts: state.posts,
    theme: state.settings.theme,
  };
};

const actionCreators = {
  newPost: newPostActionCreater,
};

export const PostsContainer = connect(mapStateToProps, actionCreators)(PostsContainerAPI);
