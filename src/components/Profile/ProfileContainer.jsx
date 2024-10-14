import { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Profile } from "./Profile";
import { setProfileAC } from "../../data/profileReducer";

function ProfileContainerAPI(props) {
  // get userId params to render data of opened profile
  const userId = useParams();

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId.userId}`).then((response) => {
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
