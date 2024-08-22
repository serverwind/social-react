import s from "../Navigation.module.css";
import { NavLink } from "react-router-dom";

function Links() {
  return (
    <ul className="flex flex-col gap-2">
      <li className="hover:underline transition duration-300">
        <NavLink className={links => links.isActive ? s.active : ""} to="/profile">@Profile</NavLink>
      </li>
      <li className="hover:underline transition duration-300">
        <NavLink className={links => links.isActive ? s.active : ""} to="/messenger">@Messages</NavLink>
      </li>
      <li className="hover:underline transition duration-300">
        <NavLink className={links => links.isActive ? s.active : ""} to="/feed">@Feed</NavLink>
      </li>
      <li className="hover:underline transition duration-300">
        <NavLink className={links => links.isActive ? s.active : ""} to="/music">@Music</NavLink>
      </li>
      <li className="hover:underline transition duration-300">
        <NavLink className={links => links.isActive ? s.active : ""} to="/settings">@Settings</NavLink>
      </li>
    </ul>
  );
}

export { Links };
