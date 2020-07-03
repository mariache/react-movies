import React from "react";

export default class MovieItem extends React.Component {
  render() {
    const { item, onRemove, onWatchLater } = this.props;

    const onHandleRemove = (id) => () => {
      onRemove(id);
    };

    const onHandleWatchLater = (item) => () => {
      onWatchLater(item);
    };

    return (
      <div className="card" style={{ width: "100%" }}>
        <img
          className="card-img-top card-img--height"
          src={`https://image.tmdb.org/t/p/w500${
            item.backdrop_path || item.poster_path
          }`}
          alt="movie"
        />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {item.vote_average}</p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onHandleWatchLater(item)}
            >
              Watch later
            </button>
          </div>
          <button className="btn btn-danger" onClick={onHandleRemove(item.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
