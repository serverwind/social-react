import { PostContainer } from "./Post/PostContainer";
import Input from "./Input/Input";

type PostsProps = {
  posts: any;
  stateText: (text: string) => void;
  newPost: (id: number, post: string, likes: number, author: string, date: string) => void;
};

export default function Posts({ posts, stateText, newPost }: PostsProps) {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">My posts</h2>
      <Input posts={posts} stateText={stateText} newPost={newPost} />
      <div>
        {posts.posts.map((post: { id: number; post: string; likes: number; author: string; date: string }) => (
          <PostContainer id={post.id} key={post.id} post={post.post} likes={post.likes} author={post.author} date={post.date} />
        ))}
      </div>
    </div>
  );
}
