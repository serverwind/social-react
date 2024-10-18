import Photo from "../Photo/Photo";
import UserInfo from "../UserInfo/UserInfo";

type BioProps = {
  name: string;
};

export default function Bio(props: BioProps) {
  return (
    <div className="flex gap-4 p-4 items-center bg-gray-200">
      <Photo />
      <UserInfo name={props.name} />
    </div>
  );
}
