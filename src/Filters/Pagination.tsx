import React from "react";

export type PaginationProps = {
  pageNumber: number;
  totalPages: number;
};

const Pagination: React.FC<PaginationProps> = ({ pageNumber, totalPages }) => {
  return (
    <div>
      Page {pageNumber} from {totalPages}
    </div>
  );
};

export default Pagination;
