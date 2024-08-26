import { Links } from "./Links/Links";

function Navigation({ links }) {
  return (
    <nav className="bg-gray-300 sm:p-4 sm:h-screen">
      <Links links={links} />
    </nav>
  );
}

export { Navigation };
