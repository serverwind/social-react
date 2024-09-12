function Friend({ id, name, friend, addFriend, removeFriend }) {
  function onAddFriend() {
    addFriend(id);
  }

  function onRemoveFriend() {
    removeFriend(id);
  }

  return (
    <li key={id}>
      <span className="bg-gray-200 py-4 px-8 hover:bg-gray-300 transition duration-300">{name}</span>
      {friend ? <button onClick={onRemoveFriend}>Remove friend</button> : <button onClick={onAddFriend}>Add friend</button>}
    </li>
  );
}

export { Friend };
