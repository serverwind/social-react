function Button( { friend, onAddFriend, onRemoveFriend } ) {
  return (
      friend ? <button onClick={onRemoveFriend} className="bg-gray-100 text-sm py-2 px-4 hover:bg-gray-300 transition duration-300"><span className="mgc_user_remove_line"></span></button> : <button onClick={onAddFriend} className="bg-gray-200 text-sm py-2 px-4 hover:bg-gray-300 transition duration-300"><span className="mgc_user_add_fill"></span></button>
  )
}

export { Button }
