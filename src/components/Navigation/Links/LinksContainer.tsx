import Links from "./Links";
import { connect } from "react-redux";

type StateType = {
  links: {
    links: [
      {
        link: string;
        name: string;
        icon: string;
      }
    ];
  };
};

const mapStateToProps = (state: StateType) => {
  return {
    links: state.links,
  };
};

export const LinksContainer = connect(mapStateToProps)(Links);
