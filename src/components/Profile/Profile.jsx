import { Brand } from "./Brand/Brand";
import { Bio } from "./Bio/Bio";
import { Posts } from "./Posts/Posts";

function Profile({ posts, addPost, changeInput }) {
  return (
    <main className="overflow-y-scroll h-screen">
      <Brand />
      <Bio />
      <Posts posts={posts} addPost={addPost} changeInput={changeInput} />
    </main>
  );
}

export { Profile };
