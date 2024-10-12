import { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { setProfileAC } from "../../data/profileReducer";


function ProfileContainerAPI(props) {
  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
      props.setProfileAC(response.data);
    });
  });
  
  return <Profile profile={props.profile} />
}

let mapStateToProps = (state) => {
  return {profile: state.profile.profile };
}

const ProfileContainer = connect(mapStateToProps, { setProfileAC })(ProfileContainerAPI);

export { ProfileContainer };
