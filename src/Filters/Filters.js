import React from "react";

export const Filters = (props) => {
  return (
    <form className="mb-3">
      <div className="form-group">
        <label htmlFor="sort_by">Order by:</label>
        <select className="form-control" id="sort_by">
          <option value="popularity.desc">Popularity desc</option>
          <option value="popularity.asc">Popularity asc</option>
          <option value="vote_average.desc">Rating desc</option>
          <option value="vote_average.asc">Rating asc</option>
        </select>
      </div>
    </form>
  );
};

export default Filters;
