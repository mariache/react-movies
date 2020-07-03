import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../api/api";
import MoviesTabs from "./MoviesTabs";

export default class MoviesList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      watchLater: [],
      sortBy: "popularity.desc",
    };
  }

  getMovies = () => {
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sortBy}&language=en-EN`;
    fetch(link)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          movies: data.results,
        });
      });
  };

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy) {
      this.getMovies();
    }
  }

  onRemove = (id) => {
    const updatedMovies = this.state.movies.slice().filter((x) => x.id !== id);
    this.setState({ movies: updatedMovies });
  };

  onWatchLater = (movie) => {
    const watchedLater = [...this.state.watchLater, movie];
    this.setState({
      watchLater: watchedLater,
    });
  };

  onRemoveWatchLater = (id) => {
    const watchedLater = this.state.watchLater
      .slice()
      .filter((x) => x.id !== id);
    this.setState({ watchLater: watchedLater });
  };

  updateSortBy = (value) => {
    this.setState({ sortBy: value });
  };

  render() {
    const { movies, watchLater } = this.state;
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <MoviesTabs
              sortBy={this.state.sortBy}
              updateSortBy={this.updateSortBy}
            />
          </div>
        </div>
        <div className="row">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="col-6 mb-4">
                <MovieItem
                  item={movie}
                  onRemove={this.onRemove}
                  onWatchLater={this.onWatchLater}
                  onRemoveWatchLater={this.onRemoveWatchLater}
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
  }
}
