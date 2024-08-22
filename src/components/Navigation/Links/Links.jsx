import s from "../Navigation.module.css";
import { Link } from "./Link/Link";

function Links() {
  const data = [
    { link: "/profile", name: "- Profile" },
    { link: "/messenger", name: "- Messenger" },
    { link: "/feed", name: "- Feed" },
    { link: "/music", name: "- Music" },
    { link: "/settings", name: "- Settings" },
  ];

  return (
    <ul className="flex flex-col gap-2">
      {data.map((link, index) => (
        <Link key={index} link={link.link} name={link.name} active={(links) => (links.isActive ? s.active : "")} />
      ))}
    </ul>
  );
}

export { Links };
