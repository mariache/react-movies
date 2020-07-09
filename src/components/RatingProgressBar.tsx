import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { appTheme } from "appTheme";

export type RatingProgressBarProps = {
  vote_average: number;
};

const RatingProgressBar: React.FunctionComponent<RatingProgressBarProps> = ({
  vote_average,
}) => {
  const percentage = vote_average * 10;
  const color: string =
    percentage >= 70
      ? appTheme.palette.green
      : percentage > 50 && percentage < 70
      ? appTheme.palette.yellow
      : appTheme.palette.red;
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      background
      backgroundPadding={6}
      styles={buildStyles({
        backgroundColor: appTheme.palette.dark,
        textColor: appTheme.palette.white,
        pathColor: color,
        trailColor: appTheme.palette.transparent,
      })}
    />
  );
};

export default RatingProgressBar;
