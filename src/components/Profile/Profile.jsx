import { Brand } from "./Brand/Brand";
import { Bio } from "./Bio/Bio";
import { PostsContainer } from "./Posts/PostsContainer";

function Profile() {
  return (
    <main className="flex-shrink-0 sm:h-screen sm:overflow-y-auto">
      <Brand />
      <Bio />
      <PostsContainer />
    </main>
  );
}

export { Profile };
