import React from "react";

export type PaginationProps = {
  pageNumber: number;
  totalPages: number;
  onChangePage: (number: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  pageNumber,
  totalPages,
  onChangePage,
}) => {
  const onPageChange = (number: number) => () => {
    onChangePage(number);
  };
  return (
    <div>
      <div className="btn-group btn-pagination">
        <button
          type="button"
          className="btn mr-2"
          disabled={pageNumber === 1}
          onClick={onPageChange(pageNumber - 1)}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn"
          onClick={onPageChange(pageNumber + 1)}
        >
          Next
        </button>
      </div>
      <div className="page-pagination">
        Page {pageNumber} from {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
