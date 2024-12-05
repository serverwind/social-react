import { useEffect } from "react";
import Feed from "./Feed";
import { connect } from "react-redux";
import loadTheme from "../../utils/loadTheme";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { setPhotosTC } from "../../data/feedReducer";
import { initFeed } from "../../data/appReducer";
import Loader from "../Loader/Loader";

type FeedContainerProps = {
  theme: string;
  feed: {
    photos: [];
  };
  init: boolean;
  setPhotos: () => void;
  initFeed: () => void;
};

function FeedContainerAPI(props: FeedContainerProps) {
  useEffect(() => {
    props.initFeed();
    props.setPhotos();
  }, []);

  if (!props.init) {
    return <Loader />;
  }

  const theme = loadTheme(props.theme);

  return <Feed theme={theme} feed={props.feed} />;
}

type StateType = {
  settings: {
    theme: string;
  };
  feed: {
    photos: [];
  };
  app: { initFeed: boolean };
};

const mapStateToProps = (state: StateType) => {
  return {
    theme: state.settings.theme,
    feed: state.feed,
    init: state.app.initFeed,
  };
};

const mapDispatchToProps = {
  setPhotos: setPhotosTC,
  initFeed: initFeed,
};

export const FeedContainer = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(FeedContainerAPI);
