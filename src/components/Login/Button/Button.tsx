import { NavLink } from "react-router-dom";

type LoginPropsType = {
  isAuth: boolean;
  logout: () => void;
};

export default function Login(props: LoginPropsType) {
  return <div className="bg-gray-200 text-sm py-2 px-4 hover:bg-gray-300 transition duration-300">{props.isAuth ? <button onClick={props.logout}>Log out</button> : <NavLink to="/login">Log in</NavLink>}</div>;
}
