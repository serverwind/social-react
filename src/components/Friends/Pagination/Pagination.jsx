import React from "react";
import s from "./Pagination.module.css";

class Pagination extends React.Component {
  render() {
    return (
      <div className="overflow-x-auto w-11/12 flex gap-2">
        {this.props.pages.map((page) => (
          <span className={page === this.props.currentPage ? `${s.active} cursor-pointer bg-gray-200 py-2 px-4` : "cursor-pointer bg-gray-100 py-2 px-4"} key={page} onClick={() => this.props.onPageChanged(page)}>
            {page}
          </span>
        ))}
      </div>
    );
  }
}

export { Pagination };
