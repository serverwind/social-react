import s from '../Navigation.module.css';

function Links() {
  return (
    <ul className="flex flex-col gap-2">
      <li className={s.active + " hover:underline transition duration-300"}><a href="/profile">@Profile</a></li>
      <li className="hover:underline transition duration-300"><a href="/messenger">@Messages</a></li>
      <li className="hover:underline transition duration-300"><a href="/feed">@Feed</a></li>
      <li className="hover:underline transition duration-300"><a href="/music">@Music</a></li>
      <li className="hover:underline transition duration-300"><a href="/settings">@Settings</a></li>
    </ul>
  );
}

export { Links };
