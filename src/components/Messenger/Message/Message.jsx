function Message({ id, message }) {
  return <div key={id}>{message}</div>;
}

export { Message };
