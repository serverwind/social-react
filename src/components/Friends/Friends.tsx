import Friend from "./Friend/Friend";
import Pagination from "./Pagination/Pagination";
import Loader from "../Loader/Loader";

type FriendsProps = {
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  users: [];
  onPageChanged: (page: number) => void;
  theme: {
    bg: string;
    text: string;
  };
};

export default function Friends(props: FriendsProps) {
  const pagesAmount: number = Math.ceil(props.totalPages / props.pageSize);
  const pages = Array.from({ length: pagesAmount }, (_, i) => i + 1);

  return (
    <section className={`${props.theme.bg} h-full p-4`}>
      {props.isLoading ? <Loader /> : <Pagination pages={pages} onPageChanged={props.onPageChanged} currentPage={props.currentPage} />}
      <ul className="my-6 mx-4 flex sm:flex-row flex-col gap-2">
        {props.users.map((user: { id: number; name: string; followed: boolean }) => (
          <Friend id={user.id} name={user.name} friend={user.followed} />
        ))}
      </ul>
    </section>
  );
}
