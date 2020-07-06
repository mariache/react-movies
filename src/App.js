import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";

export const App = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-3">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h3>Filters:</h3>
              <Filters />
            </div>
          </div>
        </div>
        <div className="col-9">
          <MoviesList />
        </div>
      </div>
    </div>
  );
};
export default App;
