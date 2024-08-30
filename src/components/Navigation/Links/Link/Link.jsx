import { NavLink } from "react-router-dom";

function Link({ active, link, name, icon }) {
  return (
    <li className="text-lg">
       <span className={icon}></span> <NavLink className={active} to={link}>{name}</NavLink>
      </li>
  )
}

export { Link };
