import { Brand } from "./Brand/Brand";
import { Bio } from "./Bio/Bio";
import { PostsContainer } from "./Posts/PostsContainer";

function Profile({ posts, dispatch }) {
  return (
    <main className="flex-shrink-0 sm:h-screen sm:overflow-y-auto">
      <Brand />
      <Bio />
      <PostsContainer posts={posts} dispatch={dispatch} />
    </main>
  );
}

export { Profile };
