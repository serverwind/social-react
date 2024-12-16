import { connect } from "react-redux";
import { setTrackAC } from "../../data/musicReducer";
import { Music } from "./Music";
import loadTheme from "../../utils/loadTheme";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

function mapStateToProps(state) {
  return {
    music: state.music,
    theme: state.settings.theme,
  };
}

const actionCreators = {
  setTrack: setTrackAC,
};

function MusicContainer(props) {
  const theme = loadTheme(props.theme);
  return <Music {...props} theme={theme} />;
}

export default compose(connect(mapStateToProps, actionCreators), withAuthRedirect)(MusicContainer);
