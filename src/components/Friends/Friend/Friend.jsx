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
      {friend ? <button onClick={onRemoveFriend} className="bg-gray-100 text-sm py-2 px-4 hover:bg-gray-300 transition duration-300"><span className="mgc_user_remove_line"></span></button> : <button onClick={onAddFriend} className="bg-gray-200 text-sm py-2 px-4 hover:bg-gray-300 transition duration-300"><span className="mgc_user_add_fill"></span></button>}
    </li>
  );
}

export { Friend };
