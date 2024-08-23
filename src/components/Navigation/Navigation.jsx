import { Links } from "./Links/Links";

function Navigation({ links }) {
  return (
    <nav className="bg-gray-300 p-4 h-screen">
      <Links links={links} />
    </nav>
  );
}

export { Navigation };
