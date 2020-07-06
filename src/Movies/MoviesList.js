import React from "react";
import MovieItem from "./MovieItem";

import { TransitionGroup, CSSTransition } from "react-transition-group";

export const MoviesList = ({
  movies,
  sortBy,
  updateSortBy,
  onRemove,
  onRemoveWatchLater,
  onWatchLater,
  watchLater,
}) => {
  return (
    <div className="container">
      <div className="row">
        <TransitionGroup component={null}>
          {movies.map((movie) => {
            return (
              <CSSTransition key={movie.id} classNames="movies" timeout={500}>
                <div className="col-6 mb-4 listMovies">
                  <MovieItem
                    item={movie}
                    onRemove={onRemove}
                    onWatchLater={onWatchLater}
                    onRemoveWatchLater={onRemoveWatchLater}
                  />
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <div className="col-3">
          <p>Will watch: {watchLater.length}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
