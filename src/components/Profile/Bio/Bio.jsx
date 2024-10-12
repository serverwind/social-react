import { Photo } from "../Photo/Photo";
import { UserInfo } from "../UserInfo/UserInfo";

function Bio(props) {
  return (
    <div className="flex gap-4 p-4 items-center bg-gray-200">
      <Photo />
      <UserInfo name={props.name} />
    </div>
  );
}

export { Bio };
