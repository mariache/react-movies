import React from "react";

export type FiltersProps = {
  updateSortBy: (value: string) => void;
};

export const Filters: React.FunctionComponent<FiltersProps> = ({
  updateSortBy,
}) => {
  return (
    <form className="mb-3">
      <div className="form-group">
        <label htmlFor="sort_by">Order by:</label>
        <select
          className="form-control"
          id="sort_by"
          onChange={(e) => updateSortBy(e.target.value)}
        >
          <option value="popularity.desc">Popularity Descending</option>
          <option value="popularity.asc">Popularity Ascending</option>
          <option value="vote_average.desc">Rating Descending</option>
          <option value="vote_average.asc">Rating Ascending</option>
          <option value="now_playing">Now Playing</option>
          <option value="upcoming">Upcoming</option>
          <option value="primary_release_date.desc">
            Release Date Descending
          </option>
          <option value="primary_release_date.asc">
            Release Date Ascending
          </option>
        </select>
      </div>
    </form>
  );
};

export default Filters;
