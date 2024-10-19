import { connect } from "react-redux";
import { setTrackAC } from "../../data/musicReducer";
import { Music } from "./Music";

function mapStateToProps(state) {
  return {
    music: state.music,
  };
}

const actionCreators = {
  setTrack: setTrackAC,
};

export const MusicContainer = connect(mapStateToProps, actionCreators)(Music);
