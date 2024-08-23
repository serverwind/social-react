import { Brand } from "./Brand/Brand";
import { Bio } from "./Bio/Bio";
import { Posts } from "./Posts/Posts";

function Profile({ posts, addPost }) {
  return (
    <main>
      <Brand />
      <Bio />
      <Posts posts={posts} addPost={addPost} />
    </main>
  );
}

export { Profile };
