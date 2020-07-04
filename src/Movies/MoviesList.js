import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../api/api";
import MoviesTabs from "./MoviesTabs";

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [sortBy, setSortBy] = useState("popularity.desc");

  const getMovies = () => {
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${sortBy}&language=en-EN`;
    fetch(link)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const onRemove = (id) => {
    const updatedMovies = this.state.movies.slice().filter((x) => x.id !== id);
    setMovies(updatedMovies);
  };

  const onWatchLater = (movie) => {
    const watchedLater = [...watchLater, movie];
    setWatchLater(watchedLater);
  };

  const onRemoveWatchLater = (id) => {
    const watchedLater = watchLater.slice().filter((x) => x.id !== id);
    setWatchLater(watchedLater);
  };

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
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="col-6 mb-4">
              <MovieItem
                item={movie}
                onRemove={onRemove}
                onWatchLater={onWatchLater}
                onRemoveWatchLater={onRemoveWatchLater}
              />
            </div>
          );
        })}
        <div className="col-3">
          <p>Will watch: {watchLater.length}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
