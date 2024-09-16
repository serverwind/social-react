import { Links } from "./Links";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    links: state.links,
  };
};

const LinksContainer = connect(mapStateToProps)(Links);

export { LinksContainer };
