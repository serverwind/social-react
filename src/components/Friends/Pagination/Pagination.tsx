import s from "./Pagination.module.css";

type PaginationProps = {
  pages: number[]; // array of pages
  currentPage: number;
  onPageChanged: (page: number) => void;
};

export default function Pagination(props: PaginationProps) {
  return (
    <div className="overflow-x-auto w-11/12 flex gap-2">
      {props.pages.map((page) => (
        <span className={page === props.currentPage ? `${s.active} cursor-pointer bg-gray-200 py-2 px-4` : "cursor-pointer bg-gray-100 py-2 px-4"} key={page} onClick={() => props.onPageChanged(page)}>
          {page}
        </span>
      ))}
    </div>
  );
}
