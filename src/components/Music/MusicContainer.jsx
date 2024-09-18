import { connect } from "react-redux";
import { setPlayingAC } from "../../data/musicReducer";
import { Music } from "./Music";

function mapDispatchToProps(dispatch) {
  return {
    setPlaying: (id, status, link, artist, name, duration) => dispatch(setPlayingAC(id, status, link, artist, name, duration)),
  };
}

function mapStateToProps(state) {
  return {
    music: state.music,
  };
}

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);

export { MusicContainer };
