import s from './Navigation.module.css';

function Navigation() {
  return (
    <nav className="bg-gray-300 p-4 h-screen">
      <Links />
    </nav>
  );
}

function Links() {
  return (
    <ul className="flex flex-col gap-2">
      <li className={s.active + " hover:underline transition duration-300"}><a href="#">@Profile</a></li>
      <li className="hover:underline transition duration-300"><a href="#">@Messages</a></li>
      <li className="hover:underline transition duration-300"><a href="#">@Feed</a></li>
      <li className="hover:underline transition duration-300"><a href="#">@Music</a></li>
      <li className="hover:underline transition duration-300"><a href="#">@Settings</a></li>
    </ul>
  );
}

export { Navigation };
