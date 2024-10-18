import User from "./User/User";
import s from "./Users.module.css";

type UsersProps = {
  users: {
    users: [
      {
        id: number;
        name: string;
      }
    ];
  };
};

export default function Users({ ...props }: UsersProps) {
  debugger;
  return (
    <div className="bg-gray-200 p-4">
      <ul className="flex flex-wrap sm:flex-col justify-center gap-2">
        {props.users.users.map((user: { id: number; name: string }) => (
          <User key={user.id} name={user.name} chat={`/messenger/${user.id}`} active={(user) => (user.isActive ? s.active : "")} />
        ))}
      </ul>
    </div>
  );
}
