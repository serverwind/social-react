import { PostContainer } from "./Post/PostContainer";
import { Input } from "./Input/Input";

function Posts({ posts, stateText, newPost }) {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">My posts</h2>
      <Input posts={posts} stateText={stateText} newPost={newPost} />
      <div>
        {posts.posts.map((post) => (
          <PostContainer id={post.id} key={post.id} post={post.post} likes={post.likes} author={post.author} date={post.date} />
        ))}
      </div>
    </div>
  );
}

export { Posts };
