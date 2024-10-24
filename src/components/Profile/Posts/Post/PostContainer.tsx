import Post from "./Post";
import { connect } from "react-redux";
import { likeActionCreator } from "../../../../data/postReducer";
import loadTheme from "../../../../utils/loadTheme";

const actionCreators = {
  like: likeActionCreator,
};

const mapStateToProps = (state) => {
  return {
    theme: state.settings.theme,
  };
}

function PostContainerAPI(props) {
  const theme = loadTheme(props.theme);
  return <Post {...props} theme={theme} />;
}

export const PostContainer = connect(mapStateToProps, actionCreators)(PostContainerAPI);
