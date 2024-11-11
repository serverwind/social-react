import Settings from "./Settings";
import { connect } from "react-redux";
import loadTheme from "../../utils/loadTheme";

type SettingsContainerProps = {
  theme: string;
};

function SettingsContainerAPI(props: SettingsContainerProps) {
  const theme = loadTheme(props.theme);

  return <Settings theme={theme} />;
}

type StateType = {
  settings: {
    theme: string;
  };
};

const mapStateToProps = (state: StateType) => {
  return {
    theme: state.settings.theme,
  };
};

export const SettingsContainer = connect(mapStateToProps, null)(SettingsContainerAPI);
