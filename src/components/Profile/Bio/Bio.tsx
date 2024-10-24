import Photo from "../Photo/Photo";
import UserInfo from "../UserInfo/UserInfo";

type BioProps = {
  name: string;
  theme: {
    bg: string;
    text: string;
  }
};

export default function Bio(props: BioProps) {
  return (
    <div className={ `flex gap-4 p-4 items-center ${props.theme.bg}` }>
      <Photo />
      <UserInfo name={props.name} theme={props.theme} />
    </div>
  );
}
