import Login from "../components/Login/Login";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
  };
}

export const withAuthRedirect = (Component) => {
  function RedirectComponent(props) {
    if (!props.isAuth) return <Login />;
    return <Component {...props} />;
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);
  return ConnectedAuthRedirectComponent;
}
