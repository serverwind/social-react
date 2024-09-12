function Message({ id, message }) {
  return (
    <div key={id} className="border rounded bg-gray-600 mb-4 p-2">
      <div className="italic text-white">{message}</div>
    </div>
  );
}

export { Message };
