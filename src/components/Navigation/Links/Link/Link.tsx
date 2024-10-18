import { NavLink } from "react-router-dom";

type LinkProps = {
  link: string;
  name: string;
  icon: string;
  active: string;
};

export default function Link({ link, name, icon, active }: LinkProps) {
  return (
    <li className="text-3xl py-2 px-1 sm:p-0 sm:text-lg">
      <NavLink className={active} to={link}>
        <span className={icon}></span>
        <span className="hidden sm:inline"> {name}</span>
      </NavLink>
    </li>
  );
}
