import React from "react";
import Pagination from "./Pagination";

export type FiltersProps = {
  updateSortBy: (value: string) => void;
  pageNumber: number;
  totalPages: number;
  onChangePage: (number: number) => void;
  onReset: () => void;
};

export enum FiltersLabels {
  releaseDateDesc = "Release Date Descending",
  releaseDateAsc = "Release Date Ascending",
  popularDesc = "Popularity Descending",
  popularAsc = "Popularity Ascending",
  rateDesc = "Rating Descending",
  rateAsc = "Rating Ascending",
  nowPlaying = "Now Playing",
  upcoming = "Upcoming",
}

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
      label: FiltersLabels.popularDesc,
    },
    {
      value: "popularity.asc",
      label: FiltersLabels.popularAsc,
    },
    {
      value: "vote_average.desc",
      label: FiltersLabels.rateDesc,
    },
    {
      value: "vote_average.asc",
      label: FiltersLabels.rateAsc,
    },
    {
      value: "now_playing",
      label: FiltersLabels.nowPlaying,
    },
    {
      value: "upcoming",
      label: FiltersLabels.upcoming,
    },
    {
      value: "primary_release_date.desc",
      label: FiltersLabels.releaseDateDesc,
    },
    {
      value: "primary_release_date.asc",
      label: FiltersLabels.releaseDateAsc,
    },
  ];

  const onChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateSortBy(event.target.value);
  };

  return (
    <form className="mb-3">
      <div className="form-group">
        <button
          type="button"
          className="btn clear-btn btn-light"
          onClick={onReset}
          style={{ border: "1px solid #ced4da" }}
        >
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
