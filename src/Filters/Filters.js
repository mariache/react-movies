import React from "react";

export default class Filters extends React.Component {
  render() {
    return (
      <form className="mb-3">
        <div className="form-group">
          <label htmlFor="sort_by">Order by:</label>
          <select className="form-control" id="sort_by">
            <option value="popularity.desc">Popular desc</option>
            <option value="popularity.asc">Popular asc</option>
            <option value="vote_average.desc">Rate desc</option>
            <option value="vote_average.asc">Rate asc</option>
          </select>
        </div>
      </form>
    );
  }
}
