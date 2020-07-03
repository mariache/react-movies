import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../api/api";

export default class MoviesList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      watchLater: [],
    };
  }

  componentDidMount() {
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=en-EN`;
    fetch(link)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          movies: data.results,
        });
      });
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

  render() {
    const { movies, watchLater } = this.state;
    return (
      <div className="container">
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
