function Post({ id, post }) {
  return <div key={id} className="italic mb-4">{ post }</div>;
}

export { Post };
