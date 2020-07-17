import React from "react";
import Pagination from "./Pagination";

export type FiltersProps = {
  updateSortBy: (value: string) => void;
  pageNumber: number;
  totalPages: number;
  onChangePage: (number: number) => void;
  onReset: () => void;
};

export const Filters: React.FC<FiltersProps> = ({
  updateSortBy,
  totalPages,
  pageNumber,
  onChangePage,
  onReset,
}) => {
  const filtersCategory: {
    value: string;
    label: string;
  }[] = [
    {
      value: "popularity.desc",
      label: "Popularity Descending",
    },
    {
      value: "popularity.asc",
      label: "Popularity Ascending",
    },
    {
      value: "vote_average.desc",
      label: "Rating Descending",
    },
    {
      value: "vote_average.asc",
      label: "Rating Ascending",
    },
    {
      value: "now_playing",
      label: "Now Playing",
    },
    {
      value: "upcoming",
      label: "Upcoming",
    },
    {
      value: "primary_release_date.desc",
      label: "Release Date Descending",
    },
    {
      value: "primary_release_date.asc",
      label: "Release Date Ascending",
    },
  ];

  const onChangeFilter = (event) => {
    updateSortBy(event.target.value);
  };

  return (
    <form className="mb-3">
      <div className="form-group">
        <button type="button" className="btn clear-btn" onClick={onReset}>
          Reset filters
        </button>
        <label htmlFor="sort_by">Order by:</label>
        <select className="form-control" id="sort_by" onChange={onChangeFilter}>
          {filtersCategory.map((x, idx) => {
            return (
              <option key={`${x.value}-${idx}`} value={x.value}>
                {x.label}
              </option>
            );
          })}
        </select>
        <Pagination
          totalPages={totalPages}
          pageNumber={pageNumber}
          onChangePage={onChangePage}
        />
      </div>
    </form>
  );
};

export default Filters;
