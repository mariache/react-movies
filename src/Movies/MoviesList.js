import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../api/api";
import MoviesTabs from "./MoviesTabs";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const useMoviesWatchLater = () => {
  const [watchLater, setWatchLater] = useState([]);
  const onWatchLater = (movie) => {
    const watchedLater = [...watchLater, movie];
    setWatchLater(watchedLater);
  };

  const onRemoveWatchLater = (id) => {
    const watchedLater = watchLater.slice().filter((x) => x.id !== id);
    setWatchLater(watchedLater);
  };
  return {
    watchLater,
    onWatchLater,
    onRemoveWatchLater,
  };
};

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = ({ sortBy }) => {
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${sortBy}&language=en-EN`;
    fetch(link)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
      });
  };

  const onRemove = (id) => {
    const updatedMovies = movies.slice().filter((x) => x.id !== id);
    setMovies(updatedMovies);
  };

  return {
    movies,
    getMovies,
    onRemove,
  };
};

export const MoviesList = () => {
  const [sortBy, setSortBy] = useState("popularity.desc");

  const {
    watchLater,
    onWatchLater,
    onRemoveWatchLater,
  } = useMoviesWatchLater();

  const { movies, getMovies, onRemove } = useMovies();

  useEffect(() => {
    getMovies({ sortBy });
    // eslint-disable-next-line
  }, [sortBy]);

  const updateSortBy = (value) => {
    setSortBy(value);
  };

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-12">
          <MoviesTabs sortBy={sortBy} updateSortBy={updateSortBy} />
        </div>
      </div>
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
