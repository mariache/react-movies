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
    <div className="card" style={{ width: "100%" }}>
      <img
        className="card-img-top card-img--height"
        src={
          item.poster_path !== null
            ? `https://image.tmdb.org/t/p/w500${
                item.backdrop_path || item.poster_path
              }`
            : defaultImage
        }
        alt="movie"
      />
      <div className="card-body card">
        <h6 className="card-title">{item.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
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
        <button className="btn btn-danger" onClick={onHandleRemove(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
