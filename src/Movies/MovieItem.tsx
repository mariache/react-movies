import React, { useState } from "react";
import RatingProgressBar from "../components/RatingProgressBar";
import moment from "moment";
import Image from "components/Image";
import { appTheme } from "appTheme";
import { MovieItemType } from "types";

export type MovieItemProps = {
  item: MovieItemType;
  onWatchLater: (item: MovieItemType) => void;
  onRemoveWatchLater: (id: string) => void;
  onFavorite: (item: MovieItemType) => void;
  onRemoveFromFavorite: (id: string) => void;
};

export const MovieItem: React.FunctionComponent<MovieItemProps> = ({
  item,
  item: {
    release_date,
    vote_average,
    poster_path,
    backdrop_path,
    id,
    title,
    overview,
  },

  onWatchLater,
  onRemoveWatchLater,
  onFavorite,
  onRemoveFromFavorite,
}) => {
  const [watchLater, setWatchLater] = useState(false);
  const [favorite, setFavorite] = useState(false);

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

  const cutOverview = (): string | JSX.Element => {
    const overviewLength: string = overview.split(". ")[0];
    return overviewLength.length > 200 ? (
      `${overview.substring(0, 200)}...`
    ) : !overviewLength.length ? (
      <i>Overview is not presented</i>
    ) : (
      `${overviewLength}...`
    );
  };

  return (
    <div className="card">
      <div className="card-body card-movie">
        <div className="card-movie__img img-container">
          <Image poster_path={poster_path} backdrop_path={backdrop_path} />
          <div className="btn-container">
            <button
              className="btn btn-success btn-container__button"
              style={{ backgroundColor: appTheme.palette.green }}
            >
              More
            </button>
          </div>
        </div>
        <div className="card-movie__description">
          <div className="d-flex">
            <span className="badge badge-primary ml-auto">
              {release_date
                ? moment(release_date, "YYYY-MM-DD").format("YYYY")
                : ""}
            </span>
          </div>

          <h6 className="card-title card-movie__name">{title}</h6>
          <p className="d-xl-none">{cutOverview()}</p>
          <div className="card-movie__details">
            <div className="card-movie__icons d-flex justify-content-between">
              <div style={{ width: 40 }}>
                <RatingProgressBar vote_average={vote_average} />
              </div>
              {favorite ? (
                <i
                  className="fa fa-star"
                  style={{ cursor: "pointer", color: appTheme.palette.gold }}
                  onClick={onHandleRemoveFavorite(id)}
                ></i>
              ) : (
                <i
                  className="fa fa-star-o"
                  style={{ cursor: "pointer", color: appTheme.palette.dark }}
                  onClick={onHandleFavorite(item)}
                ></i>
              )}
              {watchLater ? (
                <i
                  className="fa fa-bookmark"
                  style={{ cursor: "pointer", color: appTheme.palette.red }}
                  onClick={onHandleRemoveWatchLater(id)}
                ></i>
              ) : (
                <i
                  className="fa fa-bookmark-o"
                  style={{ cursor: "pointer", color: appTheme.palette.dark }}
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
