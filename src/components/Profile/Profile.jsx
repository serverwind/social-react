import { Brand } from "./Brand/Brand";
import { Bio } from "./Bio/Bio";
import { PostsContainer } from "./Posts/PostsContainer";

function Profile(props) {
  return (
    <main className="flex-shrink-0 sm:h-screen sm:overflow-y-auto">
      <Brand name={props.profile.fullName} />
      <Bio name={props.profile.fullName} job={props.profile.lookingForAJob} aboutMe={props.profile.aboutMe} website={props.profile.contacts.website} />
      <PostsContainer />
    </main>
  );
}

export { Profile };
