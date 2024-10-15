function Login(props) {
  return <div className="bg-gray-200 text-sm py-2 px-4 hover:bg-gray-300 transition duration-300">{props.isAuth ? <div>{props.login}</div> : <div>Login</div>}</div>;
}

export { Login };
