import { useEffect } from "react";
import Feed from "./Feed";
import { connect } from "react-redux";
import loadTheme from "../../utils/loadTheme";
import { setPhotosTC } from "../../data/feedReducer";

type FeedContainerProps = {
  theme: string;
  feed: {
    photos: [];
    page: number;
  };
  setPhotos: (page: number) => void;
};

function FeedContainer(props: FeedContainerProps) {

  useEffect(() => {
     props.setPhotos(props.feed.page);
  }, []);

  const theme = loadTheme(props.theme);

  return <Feed theme={theme} photos={props.feed.photos} setPhotos={props.setPhotos} />;
}

type StateType = {
  settings: {
    theme: string;
  };
  feed: {
    photos: [];
    page: number;
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

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
