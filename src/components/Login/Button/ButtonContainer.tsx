import Button from "./Button";
import { useEffect } from "react";
import { loginUserTC } from "../../../data/authReducer";
import { connect } from "react-redux";

type PropsType = {
  loginUser: () => void;
};

function LoginContainerAPI(props: PropsType) {
  useEffect(() => {
    props.loginUser();
  }, []);

  return (
    <div>
      <Button {...props} />
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
  loginUser: loginUserTC,
};

export const LoginContainer = connect(mapStateToProps, actionCreators)(LoginContainerAPI);
