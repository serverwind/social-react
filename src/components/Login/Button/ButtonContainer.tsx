import Button from "./Button";
import { useEffect } from "react";
import { setUserTC, logoutUserTC } from "../../../data/authReducer";
import { connect } from "react-redux";

type PropsType = {
  setUser: () => void;
  logout: () => void;
};

function LoginContainerAPI(props: PropsType) {
  useEffect(() => {
    props.setUser();
  }, []);

  return (
    <div>
      <Button {...props} />
    </div>
  );
}

type StateType = {
  auth: {
    isAuth: boolean;
  };
};

const mapStateToProps = (state: StateType) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const actionCreators = {
  setUser: setUserTC,
  logout: logoutUserTC,
};

export const LoginContainer = connect(mapStateToProps, actionCreators)(LoginContainerAPI);
