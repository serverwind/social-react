import { connect } from "react-redux";
import { setTrackAC } from "../../data/musicReducer";
import { Music } from "./Music";

function mapDispatchToProps(dispatch) {
  return {
    setTrack: (id, link, artist, name, duration) => dispatch(setTrackAC(id, link, artist, name, duration)),
  };
}

function mapStateToProps(state) {
  return {
    music: state.music,
  };
}

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);

export { MusicContainer };
