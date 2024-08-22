import { NavLink } from "react-router-dom";

function User({ chat, name }) {
  return (
    <li>
      <NavLink to={chat}>
        <span className="text-gray-700 font-bold hover:underline transition duration-300">$</span> {name}
      </NavLink>
    </li>
  );
}

export { User };
