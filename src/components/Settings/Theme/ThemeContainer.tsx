import { connect } from "react-redux";
import { setDarkThemeAC, setLightThemeAC } from "../../../data/settingsReducer";
import Theme from "./Theme";

function ThemeContainer(props) {
  function onSetDarkTheme() {
    props.setDarkTheme("dark");
  }
  function onSetLightTheme() {
    props.setLightTheme("light");
  }
  return <Theme onSetDarkTheme={onSetDarkTheme} onSetLightTheme={onSetLightTheme} theme={props.theme} />;
}

const mapStateToProps = (state: any) => {
  return {
    theme: state.settings.theme,
  };
};

const actionCreators = {
    setDarkTheme: setDarkThemeAC,
    setLightTheme: setLightThemeAC,
};

export default connect(mapStateToProps, actionCreators)(ThemeContainer);
