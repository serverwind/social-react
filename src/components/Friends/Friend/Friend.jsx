function Friend({ id, name }) {
  return (
    <li key={id}>
      <span className="bg-gray-200 py-4 px-8 hover:bg-gray-300 transition duration-300">{name}</span>
    </li>
  );
}

export { Friend };
