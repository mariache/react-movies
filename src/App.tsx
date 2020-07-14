import React, { useState, useEffect } from "react";
import Filters from "./Filters/Filters";
import MoviesList, { MovieItemType } from "./Movies/MoviesList";
import { API_URL, API_KEY_3 } from "./api/api";
import Spinner from "components/Spinner/Spinner";
import axios from "axios";

const useMoviesWatchLater = () => {
  const [watchLater, setWatchLater] = useState<MovieItemType[]>([]);
  const onWatchLater = (movie: MovieItemType) => {
    const watchedLater = [...watchLater, movie];
    setWatchLater(watchedLater);
  };

  const onRemoveWatchLater = (id: string) => {
    const watchedLater = watchLater.filter((x) => x.id !== id);
    setWatchLater(watchedLater);
  };
  return {
    watchLater,
    onWatchLater,
    onRemoveWatchLater,
  };
};

const useMoviesFavorite = () => {
  const [favoriteList, setFavoriteList] = useState<MovieItemType[]>([]);
  const onFavorite = (movie: MovieItemType) => {
    const favorite = [...favoriteList, movie];
    setFavoriteList(favorite);
  };

  const onRemoveFromFavorite = (id: string) => {
    const favorite = favoriteList.filter((x) => x.id !== id);
    setFavoriteList(favorite);
  };
  return {
    favoriteList,
    onFavorite,
    onRemoveFromFavorite,
  };
};

const useMovies = () => {
  const [movies, setMovies] = useState<MovieItemType[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
  });

  const getMovies = async ({ sortBy }) => {
    setLoading(true);
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${sortBy}&language=en-EN`;
    const res = await axios.get(link);
    console.log(res.data);
    setMovies(res.data.results);
    setPagination({ page: res.data.page, totalPages: res.data.total_pages });
    setLoading(false);
  };

  return {
    movies,
    getMovies,
    loading,
    pagination,
  };
};

export const App: React.FunctionComponent = () => {
  const [sortBy, setSortBy] = useState("popularity.desc");

  const {
    watchLater,
    onWatchLater,
    onRemoveWatchLater,
  } = useMoviesWatchLater();

  const {
    favoriteList,
    onFavorite,
    onRemoveFromFavorite,
  } = useMoviesFavorite();

  const { movies, getMovies, loading, pagination } = useMovies();

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
              <Filters updateSortBy={updateSortBy} pagination={pagination} />
            </div>
          </div>
        </div>
        <div className="col-9">
          {loading ? (
            <Spinner />
          ) : (
            <MoviesList
              movies={movies}
              onRemoveWatchLater={onRemoveWatchLater}
              onWatchLater={onWatchLater}
              watchLater={watchLater}
              favoriteList={favoriteList}
              onFavorite={onFavorite}
              onRemoveFromFavorite={onRemoveFromFavorite}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
