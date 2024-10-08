import React from "react";
import s from "../Navigation.module.css";
import { Link } from "./Link/Link";

class Links extends React.Component {
  render() {
    return (
      <ul className="flex flex-wrap justify-center sm:flex-col gap-2">
        {this.props.links.links.map((link, index) => (
          <Link key={index} link={link.link} name={link.name} icon={link.icon} active={(links) => (links.isActive ? s.active : "")} />
        ))}
      </ul>
    );
  }
}

export { Links };
