import { Brand } from "./Brand/Brand";
import { Bio } from "./Bio/Bio";
import { Posts } from "./Posts/Posts";

function Profile({ posts }) {
  return (
    <main>
      <Brand />
      <Bio />
      <Posts posts={posts} />
    </main>
  );
}

export { Profile };
