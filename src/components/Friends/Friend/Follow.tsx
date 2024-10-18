type FollowProps = {
  friend: boolean;
  inProgress: boolean;
  onRemoveFriend: () => void;
  onAddFriend: () => void;
};

export default function Follow({ friend, inProgress, onRemoveFriend, onAddFriend }: FollowProps) {
  return friend ? (
    <button disabled={inProgress} onClick={onRemoveFriend} className="bg-gray-100 text-sm py-2 px-4 hover:bg-gray-300 transition duration-300">
      <span className="mgc_user_remove_line"></span>
    </button>
  ) : (
    <button disabled={inProgress} onClick={onAddFriend} className="bg-gray-200 text-sm py-2 px-4 hover:bg-gray-300 transition duration-300">
      <span className="mgc_user_add_fill"></span>
    </button>
  );
}
