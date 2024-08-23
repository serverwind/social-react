import s from "../Navigation.module.css";
import { Link } from "./Link/Link";
import data from "../../../data/links.json";

function Links() {
  return (
    <ul className="flex flex-col gap-2">
      {data.map((link, index) => (
        <Link key={index} link={link.link} name={link.name} active={(links) => (links.isActive ? s.active : "")} />
      ))}
    </ul>
  );
}

export { Links };
