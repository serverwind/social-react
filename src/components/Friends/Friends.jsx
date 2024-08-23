import { Friend } from "./Friend/Friend";

function Friends({ users }) {
  return (
    <ul className="my-6 mx-4 flex gap-2">
      {users.friends.map((friend) => (
        <Friend key={friend.id} name={friend.name} />
      ))}
    </ul>
  );
}

export { Friends };
