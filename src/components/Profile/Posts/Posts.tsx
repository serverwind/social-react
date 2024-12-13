import { memo } from "react";
import { PostContainer } from "./Post/PostContainer";
import Input from "./Input/Input";

type PostsProps = {
  posts: any;
  stateText: (text: string) => void;
  newPost: (id: number, post: string, likes: number, author: string, date: string) => void;
  theme: {
    bg: string;
    text: string;
  }
};

const Posts = memo(function Posts(props: PostsProps) {
  return (
    <div className="p-4">
      <h2 className={ `text-xl mb-4 ${props.theme.text}` }>My posts</h2>
      <Input posts={props.posts} stateText={props.stateText} newPost={props.newPost} theme={props.theme} />
      <div>
        {props.posts.posts.map((post: { id: number; post: string; likes: number; author: string; date: string }) => (
          <PostContainer id={post.id} key={post.id} post={post.post} likes={post.likes} author={post.author} date={post.date} />
        ))}
      </div>
    </div>
  );
})

export default Posts;
