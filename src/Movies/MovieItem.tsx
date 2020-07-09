import React, { useState } from "react";
import RatingProgressBar from "../components/RatingProgressBar";
import moment from "moment";
import Image from "components/Image";
import { MovieItemType } from "./MoviesList";

export type MovieItemProps = {
  item: MovieItemType;
  onRemove: (id: any) => void;
  onWatchLater: (item: MovieItemType) => void;
  onRemoveWatchLater: (id: string) => void;
  onFavorite: (item: MovieItemType) => void;
  onRemoveFromFavorite: (id: string) => void;
};

export const MovieItem: React.FunctionComponent<MovieItemProps> = ({
  item,
  item: { release_date, vote_average, poster_path, backdrop_path, id, title },
  onRemove,
  onWatchLater,
  onRemoveWatchLater,
  onFavorite,
  onRemoveFromFavorite,
}) => {
  const [watchLater, setWatchLater] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const onHandleRemove = (id) => () => {
    onRemove(id);
  };

  const onHandleWatchLater = (item: MovieItemType) => () => {
    setWatchLater(true);
    onWatchLater(item);
  };

  const onHandleRemoveWatchLater = (id: string) => () => {
    setWatchLater(false);
    onRemoveWatchLater(id);
  };

  const onHandleFavorite = (item: MovieItemType) => () => {
    setFavorite(true);
    onFavorite(item);
  };

  const onHandleRemoveFavorite = (id: string) => () => {
    setFavorite(false);
    onRemoveFromFavorite(id);
  };

  return (
    <div className="card">
      <div className="card-body card-movie">
        <div className="card-movie__img">
          <Image poster_path={poster_path} backdrop_path={backdrop_path} />
        </div>
        <div className="card-movie__description">
          <button className="btn btn-danger" onClick={onHandleRemove(id)}>
            Delete
          </button>
          <h6 className="card-title card-movie__name">
            {title}
            {release_date
              ? `(${moment(release_date, "YYYY-MM-DD").format("YYYY")})`
              : ""}
          </h6>
          <div className="card-movie__details">
            <div className="card-movie__icons d-flex justify-content-between">
              <div style={{ width: 40 }}>
                <RatingProgressBar vote_average={vote_average} />
              </div>
              {favorite ? (
                <i
                  className="fa fa-star"
                  style={{ cursor: "pointer", color: "#E94F37" }}
                  onClick={onHandleRemoveFavorite(id)}
                ></i>
              ) : (
                <i
                  className="fa fa-star-o"
                  style={{ cursor: "pointer", color: "#081c24" }}
                  onClick={onHandleFavorite(item)}
                ></i>
              )}
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
