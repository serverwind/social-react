import s from "../Navigation.module.css";
import { NavLink } from "react-router-dom";

function Links() {
  return (
    <ul className="flex flex-col gap-2">
      <li className={s.active + " hover:underline transition duration-300"}>
        <NavLink to="/profile">@Profile</NavLink>
      </li>
      <li className="hover:underline transition duration-300">
        <NavLink to="/messenger">@Messages</NavLink>
      </li>
      <li className="hover:underline transition duration-300">
        <NavLink to="/feed">@Feed</NavLink>
      </li>
      <li className="hover:underline transition duration-300">
        <NavLink to="/music">@Music</NavLink>
      </li>
      <li className="hover:underline transition duration-300">
        <NavLink to="/settings">@Settings</NavLink>
      </li>
    </ul>
  );
}

export { Links };
