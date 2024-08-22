import s from "../Navigation.module.css";
import { Link } from "./Link/Link";

function Links() {
  return (
    <ul className="flex flex-col gap-2">
      <Link active={ links => links.isActive ? s.active : "" } link="/profile" name="@Profile" />
      <Link active={ links => links.isActive ? s.active : "" } link="/messenger" name="@Messenger" />
      <Link active={ links => links.isActive ? s.active : "" } link="/feed" name="@Feed" />
      <Link active={ links => links.isActive ? s.active : "" } link="/music" name="@Music" />
      <Link active={ links => links.isActive ? s.active : "" } link="/settings" name="@Settings" />
    </ul>
  );
}

export { Links };
