import { User } from "./User/User";
import s from "./Users.module.css";

function Users({ users }) {
  return (
    <div className="bg-gray-200 p-4">
      <ul className="flex flex-wrap sm:flex-col justify-center gap-2">
        {users.users.map((user) => (
          <User key={user.id} name={user.name} chat={`/messenger/${user.id}`} active={(name) => (name.isActive ? s.active : "")} />
        ))}
      </ul>
    </div>
  );
}

export { Users };
