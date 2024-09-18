import { Friend } from "./Friend/Friend";
import { Pagination } from "./Pagination/Pagination";

function Friends(props) {
  let pagesAmount = Math.ceil(props.totalPages / props.pageSize);
  let pages = [];
  for (let i = 1; i < pagesAmount + 1; i++) {
    pages.push(i);
  }
  return (
    <section>
      <Pagination pages={pages} onPageChanged={props.onPageChanged} currentPage={props.currentPage} />
      <ul className="my-6 mx-4 flex sm:flex-row flex-col gap-2">
        {props.users.map((user) => (
          <Friend key={user.id} id={user.id} name={user.name} friend={user.followed} addFriend={props.addFriend} removeFriend={props.removeFriend} />
        ))}
      </ul>
    </section>
  );
}

export { Friends };
