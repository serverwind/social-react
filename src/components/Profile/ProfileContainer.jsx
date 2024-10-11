import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { setProfileAC } from "../../data/profileReducer";

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
      this.props.setProfileAC(response.data);
  });
  }

  render() {
    debugger
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile.profile 
})

connect(mapStateToProps, { setProfileAC })(ProfileContainer);

export { ProfileContainer };
