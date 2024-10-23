import Brand from "./Brand/Brand";
import Bio from "./Bio/Bio";
import { PostsContainer } from "./Posts/PostsContainer";

type ProfileProps = {
  profile: {
    fullName: string;
    lookingForAJob: boolean;
    aboutMe: string;
    contacts: {
      website: string;
    };
  };
    theme: string;
};

export default function Profile(props: ProfileProps) {
  return (
    <main className= {props.theme === "light" ? "bg-gray-200" : "bg-gray-800 flex-shrink-0 sm:h-screen sm:overflow-y-auto"}>
      <Brand name={props.profile.fullName} />
      <Bio name={props.profile.fullName} job={props.profile.lookingForAJob} aboutMe={props.profile.aboutMe} website={props.profile.contacts.website} />
      <PostsContainer />
    </main>
  );
}
