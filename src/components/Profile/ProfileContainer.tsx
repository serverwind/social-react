import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import { showProfileTC } from "../../data/profileReducer";

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
};

type StateType = {
  profile: {
    profile: {
      fullName: string;
      lookingForAJob: boolean;
      aboutMe: string;
      contacts: {
        website: string;
      };
    };
  };
};

function ProfileContainerAPI(props: ProfileContainerPropsType) {
  // get userId params to render data of opened profile
  const userIdPara = useParams();
  let userId = String(userIdPara.userId);

  useEffect(() => {
    props.showProfile(userId);
  }, []);

  return <Profile {...props} profile={props.profile} />;
}

let mapStateToProps = (state: StateType) => {
  return { profile: state.profile.profile };
};

export const ProfileContainer = connect(mapStateToProps, { showProfile: showProfileTC })(ProfileContainerAPI);
