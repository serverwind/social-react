import { NavLink } from "react-router-dom";
import { FollowContainer } from "./FollowContainer";

type FriendProps = {
  id: number;
  name: string;
  friend: boolean;
};

export default function Friend(props: FriendProps) {
  return (
    <li key={props.id} className="flex flex-col text-center">
      <NavLink to={`/profile/${props.id}`}>
        <span className="bg-gray-400 py-4 px-8 font-bold hover:bg-gray-300 transition duration-300">{props.name}</span>
      </NavLink>
      <FollowContainer id={props.id} friend={props.friend} />
    </li>
  );
}
