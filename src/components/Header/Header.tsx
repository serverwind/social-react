import { NavLink } from "react-router-dom";
import { LoginContainer } from "../Login/LoginContainer";

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 flex justify-between">
      <NavLink className="text-3xl font-bold text-white" to="/">
        ~/.SW
      </NavLink>
      <LoginContainer />
    </header>
  );
}
