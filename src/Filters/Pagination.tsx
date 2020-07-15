import React from "react";

export type PaginationProps = {
  pageNumber: number;
  totalPages: number;
  onChangePage: (number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  pageNumber,
  totalPages,
  onChangePage,
}) => {
  return (
    <div>
      <div className="btn-group btn-pagination">
        <button
          type="button"
          className="btn mr-2"
          disabled={pageNumber === 1}
          onClick={() => onChangePage(pageNumber - 1)}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => onChangePage(pageNumber + 1)}
        >
          Next
        </button>
      </div>
      <div className="page-pagination">
        {pageNumber} from {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
