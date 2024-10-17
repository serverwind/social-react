import { NavLink } from "react-router-dom";
import { FollowContainer } from "./FollowContainer";

type FriendProps = {
  id: number;
  name: string;
  friend: boolean;
  followUser: (id: number) => void;
};

function Friend({ id, name, friend }: FriendProps) {
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
