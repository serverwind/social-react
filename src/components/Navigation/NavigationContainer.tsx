import Navigation from "./Navigation";
import { connect } from "react-redux";
import loadTheme from "../../utils/loadTheme";

type stateType = {
  settings: {
    theme: string;
  }
};

function NavigationContainerAPI(props) {
  const theme = loadTheme(props.theme);
  return <Navigation theme={theme} />;
}

const mapStateToProps = (state: stateType) => {
  return {
    theme: state.settings.theme,
  };
};

export const NavigationContainer = connect(mapStateToProps, null)(NavigationContainerAPI);
