import React from "react";

export const MoviesTabs = ({ sortBy, updateSortBy }) => {
  const onChangeTab = (value) => () => {
    updateSortBy(value);
  };

  const getActiveLink = (value) => {
    return `nav-link ${sortBy === value ? "active" : ""}`;
  };

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getActiveLink("popularity.desc")}
          onClick={onChangeTab("popularity.desc")}
          style={{ cursor: "pointer" }}
        >
          Polpularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getActiveLink("revenue.desc")}
          onClick={onChangeTab("revenue.desc")}
          style={{ cursor: "pointer" }}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getActiveLink("vote_average.desc")}
          onClick={onChangeTab("vote_average.desc")}
          style={{ cursor: "pointer" }}
        >
          Vote average desc
        </div>
      </li>
    </ul>
  );
};

export default MoviesTabs;
