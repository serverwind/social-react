import Settings from "./Settings";
import { connect } from "react-redux";
import loadTheme from "../../utils/loadTheme";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

type SettingsContainerProps = {
  theme: string;
};

function SettingsContainer(props: SettingsContainerProps) {
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

export default compose(connect(mapStateToProps, null), withAuthRedirect)(SettingsContainer);
