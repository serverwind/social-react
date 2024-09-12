import { Friend } from "./Friend/Friend";

function Friends({ users, addFriend, removeFriend }) {
  return (
    <ul className="my-6 mx-4 flex gap-2">
      {users.users.map((user) => (
        <Friend key={user.id} id={user.id} name={user.name} friend={user.friend} addFriend={addFriend} removeFriend={removeFriend} />
      ))}
    </ul>
  );
}

export { Friends };
