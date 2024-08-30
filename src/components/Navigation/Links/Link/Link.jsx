import { NavLink } from "react-router-dom";

function Link({ active, link, name, icon }) {
  return (
    <li className="text-3xl py-2 px-1 sm:p-0 sm:text-lg">
       <NavLink className={active} to={link}><span className={icon}></span><span className="hidden sm:inline"> {name}</span></NavLink>
      </li>
  )
}

export { Link };
