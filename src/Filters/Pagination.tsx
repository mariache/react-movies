import React from "react";

export type PaginationProps = {
  pagination: { page: number; totalPages: number };
};

const Pagination: React.FC<PaginationProps> = ({
  pagination: { page, totalPages },
}) => {
  return (
    <div>
      Page {page} from {totalPages}
    </div>
  );
};

export default Pagination;
