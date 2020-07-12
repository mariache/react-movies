import React from "react";

export type FiltersProps = {
  updateSortBy: (value: string) => void;
};

export const Filters: React.FC<FiltersProps> = ({ updateSortBy }) => {
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

  return (
    <form className="mb-3">
      <div className="form-group">
        <label htmlFor="sort_by">Order by:</label>
        <select
          className="form-control"
          id="sort_by"
          onChange={(e) => updateSortBy(e.target.value)}
        >
          {filtersCategory.map((x, idx) => {
            return (
              <option key={`${x.value}-${idx}`} value={x.value}>
                {x.label}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};

export default Filters;
