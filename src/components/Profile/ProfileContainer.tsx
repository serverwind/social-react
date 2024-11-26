import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import { showProfileTC } from "../../data/profileReducer";
import loadTheme from "../../utils/loadTheme";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

type ProfileContainerPropsType = {
  profile: {
    fullName: string;
    lookingForAJob: boolean;
    aboutMe: string;
    contacts: {
      website: string;
    };
  };
  showProfile: (id: string) => void;
  theme: {
    bg: string;
    text: string;
  };
};

type StateType = {
  profile: {
    profile: {
      fullName: string;
      lookingForAJob: boolean;
      status: string;
      contacts: {
        website: string;
      };
    };
  };
  settings: {
    theme: string;
  };
};

function ProfileContainerAPI(props: ProfileContainerPropsType) {
  // get userId params to render data of opened profile
  const userIdPara = useParams();
  let userId = userIdPara.userId || 31894; // if undefined set my profile

  useEffect(() => {
    props.showProfile(userId);
  }, [userId]);

  const theme = loadTheme(props.theme);

  return <Profile {...props} profile={props.profile} theme={theme} />;
}

let mapStateToProps = (state: StateType) => {
  return {
    profile: state.profile.profile,
    theme: state.settings.theme,
  };
};

export const ProfileContainer = compose(connect(mapStateToProps, {showProfile: showProfileTC}), withAuthRedirect)(ProfileContainerAPI);
