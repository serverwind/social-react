import { Button } from "./Button";

function Friend({ id, name, friend, addFriend, removeFriend }) {
  function onAddFriend() {
    addFriend(id);
  }

  function onRemoveFriend() {
    removeFriend(id);
  }

  return (
    <li key={id} className="flex flex-col text-center">
      <span className="bg-gray-400 py-4 px-8 font-bold hover:bg-gray-300 transition duration-300">{name}</span>
      <Button friend={friend} onAddFriend={onAddFriend} onRemoveFriend={onRemoveFriend} />
    </li>
  );
}

export { Friend };
