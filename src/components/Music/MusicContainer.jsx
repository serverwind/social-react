import { connect } from "react-redux";
import { setTrackAC } from "../../data/musicReducer";
import { Music } from "./Music";

function mapStateToProps(state) {
  return {
    music: state.music,
  };
}

let actionCreators = {
  setTrack: setTrackAC,
}

const MusicContainer = connect(mapStateToProps, actionCreators)(Music);

export { MusicContainer };
