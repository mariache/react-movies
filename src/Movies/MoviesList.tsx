import React from "react";
import MovieItem from "./MovieItem";

import { TransitionGroup, CSSTransition } from "react-transition-group";

export interface MovieItemType {
  vote_average: number;
  release_date: Date;
  poster_path: string;
  backdrop_path: string;
  id: string;
  title: string;
}

export type MoviesListProps = {
  movies: Array<MovieItemType>;
  onRemove: (id: string) => void;
  onRemoveWatchLater: (id: string) => void;
  onWatchLater: (item: MovieItemType) => void;
  watchLater: Array<MovieItemType>;
};

export const MoviesList: React.FunctionComponent<MoviesListProps> = ({
  movies,
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
                <div className="col-6 mb-4">
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