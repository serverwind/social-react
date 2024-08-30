import { Photo } from "../Photo/Photo";
import { UserInfo } from "../UserInfo/UserInfo";

function Bio() {
  return (
    <div className="flex gap-4 p-4 items-center bg-gray-200">
      <Photo />
      <UserInfo />
    </div>
  );
}

export { Bio };
