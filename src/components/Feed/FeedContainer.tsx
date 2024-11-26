import Feed from "./Feed";
import { connect } from "react-redux";
import loadTheme from "../../utils/loadTheme";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { setPhotosTC } from "../../data/feedReducer";

type FeedContainerProps = {
  theme: string;
  setPhotos: () => void;
};

function FeedContainerAPI(props: FeedContainerProps) {
  const theme = loadTheme(props.theme);

  return <Feed theme={theme} setPhotos={props.setPhotos} />;
}

type StateType = {
  settings: {
    theme: string;
  };
};

const mapStateToProps = (state: StateType) => {
  return {
    theme: state.settings.theme,
  };
};

const mapDispatchToProps = {
  setPhotos: setPhotosTC,
};

export const FeedContainer = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(FeedContainerAPI);
