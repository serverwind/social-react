import { connect } from "react-redux";
import { setTrackAC } from "../../data/musicReducer";
import { Music } from "./Music";
import loadTheme from "../../utils/loadTheme";

function mapStateToProps(state) {
  return {
    music: state.music,
    theme: state.settings.theme,
  };
}

const actionCreators = {
  setTrack: setTrackAC,
};

function MusicContainerAPI(props) {
  const theme = loadTheme(props.theme);
  return <Music {...props} theme={theme} />;
}

export const MusicContainer = connect(mapStateToProps, actionCreators)(MusicContainerAPI);
