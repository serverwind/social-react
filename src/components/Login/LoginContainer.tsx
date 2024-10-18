import Login from "./Login";
import { loginUser } from "../../api/api";
import { useEffect } from "react";
import { setUserDataAC } from "../../data/authReducer";
import { connect } from "react-redux";

type LoginContainerPropsType = {
  setUserData: (id: number, email: string, login: string) => void;
};

function LoginContainerAPI({ ...props }: LoginContainerPropsType) {
  useEffect(() => {
    loginUser().then((response) => {
      response.data.resultCode === 0 ? props.setUserData(response.data.data.id, response.data.data.email, response.data.data.login) : null;
    });
  });

  return (
    <div>
      <Login {...props} />
    </div>
  );
}

type StateType = {
  auth: {
    login: string;
    id: number;
    email: string;
    isAuth: boolean;
  };
};

const mapStateToProps = (state: StateType) => {
  return {
    login: state.auth.login,
    id: state.auth.id,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
  };
};

const actionCreators = {
  setUserData: setUserDataAC,
};

export const LoginContainer = connect(mapStateToProps, actionCreators)(LoginContainerAPI);
