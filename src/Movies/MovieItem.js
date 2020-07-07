import React, { useState } from "react";
import defaultImage from "../assets/images/default-image.png";
import RatingProgressBar from "../components/RatingProgressBar";

export const MovieItem = ({
  item,
  item: { vote_average, poster_path, backdrop_path, id, title },
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
              poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${
                    poster_path || backdrop_path
                  }`
                : defaultImage
            }
            width="100%"
            alt="movie"
          />
        </div>
        <div className="card-movie__description">
          <button className="btn btn-danger" onClick={onHandleRemove(id)}>
            Delete
          </button>
          <h6 className="card-title card-movie__name">{title}</h6>
          <div className="card-movie__details">
            <div className="card-movie__icons d-flex justify-content-between">
              <div style={{ width: 40 }}>
                <RatingProgressBar vote_average={vote_average} />
              </div>
              <i
                className="fa fa-star-o"
                style={{ cursor: "pointer", color: "#081c24" }}
              ></i>
              {watchLater ? (
                <i
                  className="fa fa-bookmark"
                  style={{ cursor: "pointer", color: "#E94F37" }}
                  onClick={onHandleRemoveWatchLater(id)}
                ></i>
              ) : (
                <i
                  className="fa fa-bookmark-o"
                  style={{ cursor: "pointer", color: "#081c24" }}
                  onClick={onHandleWatchLater(item)}
                ></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
