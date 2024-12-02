import Button from "./Button";
import { logoutUserTC } from "../../../data/authReducer";
import { connect } from "react-redux";

type PropsType = {
  logout: () => void;
};

function LoginContainerAPI(props: PropsType) {

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
  logout: logoutUserTC,
};

export const LoginContainer = connect(mapStateToProps, actionCreators)(LoginContainerAPI);
