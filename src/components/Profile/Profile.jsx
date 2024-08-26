import { Brand } from "./Brand/Brand";
import { Bio } from "./Bio/Bio";
import { Posts } from "./Posts/Posts";

function Profile({ posts, addPost, changeInput }) {
  return (
    <main className="flex-shrink-0">
      <Brand />
      <Bio />
      <Posts posts={posts} addPost={addPost} changeInput={changeInput} />
    </main>
  );
}

export { Profile };
