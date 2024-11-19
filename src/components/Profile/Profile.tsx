import Brand from "./Brand/Brand";
import Bio from "./Bio/Bio";
import { PostsContainer } from "./Posts/PostsContainer";

type ProfileProps = {
  profile: {
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    aboutMe: string;
    contacts: {
      website: string;
    };
  };
  theme: {
    bg: string;
    text: string;
  };
};

export default function Profile(props: ProfileProps) {
  return (
    <main className={`${props.theme.bg} flex-shrink-0 sm:h-screen sm:overflow-y-auto`}>
      <Brand name={props.profile.fullName} />
      <Bio name={props.profile.fullName} job={props.profile.lookingForAJob} aboutMe={props.profile.aboutMe} website={props.profile.contacts.website} theme={props.theme} status={props.profile.lookingForAJobDescription} />
      <PostsContainer />
    </main>
  );
}
