import data from "../../data/users.json";
import { Friend } from "./Friend/Friend";

function Friends() {
  return (
    <ul className="my-6 mx-4 flex gap-2">
      {data.friends.map((friend) => (
        <Friend key={friend.id} name={friend.name} />
      ))}
    </ul>
  );
}

export { Friends };
