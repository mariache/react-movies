import React from "react";
import defaultImage from "../assets/images/default-image.png";

export type ImageProps = {
  poster_path: string;
  backdrop_path: string;
};

export const Image: React.FunctionComponent<ImageProps> = ({
  poster_path,
  backdrop_path,
}) => {
  return (
    <img
      className="card-img-top card-img--height"
      src={
        poster_path !== null
          ? `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`
          : defaultImage
      }
      width="100%"
      alt="poster"
    />
  );
};

export default Image;
