import { NavLink } from "react-router-dom";
import { FollowContainer } from "./FollowContainer";

function Friend({ id, name, friend }) {
  return (
    <li key={id} className="flex flex-col text-center">
      <NavLink to={`/profile/${id}`}>
        <span className="bg-gray-400 py-4 px-8 font-bold hover:bg-gray-300 transition duration-300">{name}</span>
      </NavLink>
      <FollowContainer id={id} friend={friend} />
    </li>
  );
}

export { Friend };
