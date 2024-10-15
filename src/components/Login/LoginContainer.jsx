import { Login } from "./Login";
import axios from "axios";
import { useEffect } from "react";
import { setUserDataAC } from "../../data/authReducer";
import { connect } from "react-redux";

function LoginContainerAPI(props) {
  useEffect(() => {
    axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", { withCredentials: true }).then((response) => {
      response.data.resultCode === 0 ? props.setUserData(response.data.data.id, response.data.data.email, response.data.data.login) : null
    });
  });

  return (
    <div>
      <Login {...props}  />
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    id: state.auth.id,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
  };
};

let actionCreators = {
  setUserData: setUserDataAC,
};

const LoginContainer = connect(mapStateToProps, actionCreators)(LoginContainerAPI);

export { LoginContainer };
