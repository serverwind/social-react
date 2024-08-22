import { NavLink } from "react-router-dom";

function Link({ active, link, name }) {
  return (
      <li className="hover:underline transition duration-300">
        <NavLink className={active} to={link}>{name}</NavLink>
      </li>
  )
}

export { Link };
