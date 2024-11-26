import Feed from "./Feed";
import { connect } from "react-redux";
import loadTheme from "../../utils/loadTheme";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

type FeedContainerProps = {
  theme: string;
};

function FeedContainerAPI(props: FeedContainerProps) {
  const theme = loadTheme(props.theme);

  return <Feed theme={theme} />;
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

export const FeedContainer = compose(connect(mapStateToProps, null), withAuthRedirect)(FeedContainerAPI);
