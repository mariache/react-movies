import React from "react";
import MovieItem from "./MovieItem";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MovieItemType } from "types";

export type MoviesListProps = {
  movies: Array<MovieItemType>;
  onRemoveWatchLater: (id: string) => void;
  onWatchLater: (item: MovieItemType) => void;
  watchLater: Array<MovieItemType>;
  favoriteList: Array<MovieItemType>;
  onFavorite: (item: MovieItemType) => void;
  onRemoveFromFavorite: (id: string) => void;
};

export const MoviesList: React.FunctionComponent<MoviesListProps> = ({
  movies,
  onRemoveWatchLater,
  onWatchLater,
  watchLater,
  favoriteList,
  onFavorite,
  onRemoveFromFavorite,
}) => {
  return (
    <div className="container">
      <div className="row">
        <TransitionGroup component={null}>
          {movies.map((movie) => {
            return (
              <CSSTransition key={movie.id} classNames="movies" timeout={500}>
                <div className="col-xl-6 col-lg-12 mb-4">
                  <MovieItem
                    item={movie}
                    onWatchLater={onWatchLater}
                    onRemoveWatchLater={onRemoveWatchLater}
                    onFavorite={onFavorite}
                    onRemoveFromFavorite={onRemoveFromFavorite}
                  />
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <div className="col-3">
          <p>Will watch: {watchLater.length}</p>
          <p>Favorite: {favoriteList.length}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
