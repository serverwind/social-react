import { connect } from "react-redux";
import { setTrackAC } from "../../data/musicReducer";
import { Music } from "./Music";

type StateType = {
  music: {
    player: {
      id: string;
      link: string;
      artist: string;
      name: string;
      duration: string;
    };
    items: {
      id: string;
      link: string;
      artist: string;
      name: string;
      duration: string;
    }[];
  };
};

function mapStateToProps(state: StateType) {
  return {
    music: state.music,
  };
}

const actionCreators = {
  setTrack: setTrackAC,
};

export const MusicContainer = connect(mapStateToProps, actionCreators)(Music);
