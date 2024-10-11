import { Brand } from "./Brand/Brand";
import { Bio } from "./Bio/Bio";
import { PostsContainer } from "./Posts/PostsContainer";

function Profile(props) {
  return (
    <main className="flex-shrink-0 sm:h-screen sm:overflow-y-auto">
      <Brand profile={props.profile} />
      <Bio />
      <PostsContainer />
    </main>
  );
}

export { Profile };
