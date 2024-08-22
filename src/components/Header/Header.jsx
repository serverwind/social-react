import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 p-4">
      <NavLink className="text-3xl font-bold text-white" to="/">~/.SW</NavLink>
    </header>
  );
}

export { Header };
