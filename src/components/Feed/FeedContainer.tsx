import Feed from "./Feed";
import { connect } from "react-redux";
import loadTheme from "../../utils/loadTheme";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { setPhotosTC } from "../../data/feedReducer";

type FeedContainerProps = {
  theme: string;
  feed: {
    photos: [];
  };
  setPhotos: () => void;
};

function FeedContainerAPI(props: FeedContainerProps) {
  const theme = loadTheme(props.theme);
  props.setPhotos();

  return <Feed theme={theme} feed={props.feed} />;
}

type StateType = {
  settings: {
    theme: string;
  };
  feed: {
    photos: [];
  };
};

const mapStateToProps = (state: StateType) => {
  return {
    theme: state.settings.theme,
    feed: state.feed,
  };
};

const mapDispatchToProps = {
  setPhotos: setPhotosTC,
};

export const FeedContainer = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(FeedContainerAPI);
