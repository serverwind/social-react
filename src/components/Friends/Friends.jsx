import { Friend } from "./Friend/Friend";

function Friends({ friends }) {
  return (
    <ul className="my-6 mx-4 flex gap-2">
      {friends.map((friend) => (
        <Friend key={friend.id} name={friend.name} />
      ))}
    </ul>
  );
}

export { Friends };
