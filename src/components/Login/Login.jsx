import { NavLink } from "react-router-dom";

function Login(props) {
  const profile = `/profile/${props.id}`

  return <div className="bg-gray-200 text-sm py-2 px-4 hover:bg-gray-300 transition duration-300">{props.isAuth ? <NavLink to={profile}>{props.login}</NavLink> : <div>Login</div>}</div>;
}

export { Login };
