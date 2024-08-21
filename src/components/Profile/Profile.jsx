import { Brand } from "./Brand/Brand";
import { Bio } from "./Bio/Bio";
import { Posts } from "./Posts/Posts";

function Profile() {
  return (
    <main>
      <Brand />
      <Bio />
      <Posts />
    </main>
  );
}

export { Profile };
