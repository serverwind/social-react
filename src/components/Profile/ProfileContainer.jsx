import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Profile } from "./Profile";
import { setProfileAC } from "../../data/profileReducer";
import { getProfile } from "../../api/api";

function ProfileContainerAPI(props) {
  // get userId params to render data of opened profile
  const userId = useParams();

  // if url without params render default profile
  userId.userId ? "" : (userId.userId = 31656);

  useEffect(() => {
    getProfile(userId.userId).then((response) => {
      props.setProfileAC(response.data);
    });
  }, []);

  return <Profile {...props} profile={props.profile} />;
}

let mapStateToProps = (state) => {
  return { profile: state.profile.profile };
};

const ProfileContainer = connect(mapStateToProps, { setProfileAC })(ProfileContainerAPI);

export { ProfileContainer };
