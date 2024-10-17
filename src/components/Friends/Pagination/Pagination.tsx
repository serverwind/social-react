import s from "./Pagination.module.css";

type PaginationProps = {
  pages: number[]; // array of pages
  currentPage: number;
  onPageChanged: (page: number) => void;
};

function Pagination({ pages, currentPage, onPageChanged }: PaginationProps) {
  return (
    <div className="overflow-x-auto w-11/12 flex gap-2">
      {pages.map((page) => (
        <span className={page === currentPage ? `${s.active} cursor-pointer bg-gray-200 py-2 px-4` : "cursor-pointer bg-gray-100 py-2 px-4"} key={page} onClick={() => onPageChanged(page)}>
          {page}
        </span>
      ))}
    </div>
  );
}

export { Pagination };
