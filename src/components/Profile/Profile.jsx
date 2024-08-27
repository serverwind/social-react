import { Brand } from "./Brand/Brand";
import { Bio } from "./Bio/Bio";
import { Posts } from "./Posts/Posts";

function Profile({ posts, dispatch }) {
  return (
    <main className="flex-shrink-0">
      <Brand />
      <Bio />
      <Posts posts={posts} dispatch={dispatch} />
    </main>
  );
}

export { Profile };
