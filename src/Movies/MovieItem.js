import React, { useState } from "react";
import defaultImage from "../assets/images/default-image.png";

export const MovieItem = ({
  item,
  onRemove,
  onWatchLater,
  onRemoveWatchLater,
}) => {
  const [watchLater, setWatchLater] = useState(false);

  const onHandleRemove = (id) => () => {
    onRemove(id);
  };

  const onHandleWatchLater = (item) => () => {
    setWatchLater(true);
    onWatchLater(item);
  };

  const onHandleRemoveWatchLater = (id) => () => {
    setWatchLater(false);
    onRemoveWatchLater(id);
  };

  return (
    <div className="card">
      <div className="card-body card-movie">
        <div className="card-movie__img">
          <img
            className="card-img-top card-img--height"
            src={
              item.poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${
                    item.backdrop_path || item.poster_path
                  }`
                : defaultImage
            }
            width="100%"
            alt="movie"
          />
        </div>
        <div className="card-movie__description">
          <div className="card-movie__icons d-flex justify-content-between">
            <p className="mb-0">Rating: {item.vote_average}</p>
            {watchLater ? (
              <i
                className="fa fa-bookmark"
                style={{ cursor: "pointer", color: "#EAA221" }}
                onClick={onHandleRemoveWatchLater(item.id)}
              ></i>
            ) : (
              <i
                className="fa fa-bookmark-o"
                style={{ cursor: "pointer" }}
                onClick={onHandleWatchLater(item)}
              ></i>
            )}
          </div>
          <h6 className="card-title card-movie__name">{item.title}</h6>
          <div className="card-movie__details">
            <button
              className="btn btn-danger"
              onClick={onHandleRemove(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
