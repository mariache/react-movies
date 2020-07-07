import React, { useState, useEffect } from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";
import { API_URL, API_KEY_3 } from "./api/api";

const useMoviesWatchLater = () => {
  const [watchLater, setWatchLater] = useState([]);
  const onWatchLater = (movie) => {
    const watchedLater = [...watchLater, movie];
    setWatchLater(watchedLater);
  };

  const onRemoveWatchLater = (id) => {
    const watchedLater = watchLater.filter((x) => x.id !== id);
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

export const App = () => {
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
      <div className="row mt-4">
        <div className="col-3">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h3>Filters:</h3>
              <Filters updateSortBy={updateSortBy} />
            </div>
          </div>
        </div>
        <div className="col-9">
          <MoviesList
            movies={movies}
            sortBy={sortBy}
            updateSortBy={updateSortBy}
            onRemove={onRemove}
            onRemoveWatchLater={onRemoveWatchLater}
            onWatchLater={onWatchLater}
            watchLater={watchLater}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
