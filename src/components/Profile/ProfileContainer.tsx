import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import { setProfileAC } from "../../data/profileReducer";
import { getProfile } from "../../api/api";

type ProfileContainerPropsType = {
  profile: {
    fullName: string;
    lookingForAJob: boolean;
    aboutMe: string;
    contacts: {
      website: string;
    };
  };
  setProfileAC: (profile: {}) => void;
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
  let userId = userIdPara.userId;

  // if url without params render default profile
  userId ? "" : (userId = "31656");

  useEffect(() => {
    getProfile(userId).then((response) => {
      props.setProfileAC(response.data);
    });
  }, []);

  return <Profile {...props} profile={props.profile} />;
}

let mapStateToProps = (state: StateType) => {
  return { profile: state.profile.profile };
};

export const ProfileContainer = connect(mapStateToProps, { setProfileAC })(ProfileContainerAPI);
