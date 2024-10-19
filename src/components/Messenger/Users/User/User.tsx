import { NavLink } from "react-router-dom";

type UserProps = {
  name: string;
  chat: string;
};

export default function User({ name, chat }: UserProps) {
  return (
    <li className="text-lg">
      <NavLink to={chat}>
        <span className="text-gray-700 font-bold hover:underline transition duration-300 mgc_user_5_fill"></span> {name}
      </NavLink>
    </li>
  );
}
