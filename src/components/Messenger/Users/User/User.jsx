import { NavLink } from "react-router-dom";

function User({ chat, name, active }) {
  return (
    <li className="text-lg">
      <NavLink className={active} to={chat} >
        <span className="text-gray-700 font-bold hover:underline transition duration-300 mgc_user_5_fill"></span> {name}
      </NavLink>
    </li>
  );
}

export { User };
