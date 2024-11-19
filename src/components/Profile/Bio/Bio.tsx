import Photo from "../Photo/Photo";
import UserInfo from "../UserInfo/UserInfo";

type BioProps = {
  name: string;
  job: boolean;
  aboutMe: string;
  website: string;
  status: string;
  theme: {
    bg: string;
    text: string;
  };
};

export default function Bio(props: BioProps) {
  return (
    <div className={`flex gap-4 p-4 items-center ${props.theme.bg}`}>
      <Photo />
      <UserInfo name={props.name} job={props.job} aboutMe={props.aboutMe} website={props.website} status={props.status} theme={props.theme} />
    </div>
  );
}
