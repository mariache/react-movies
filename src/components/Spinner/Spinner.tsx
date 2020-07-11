import React from "react";
import classes from "./Spinner.module.css";

const Spinner = (): JSX.Element => {
  return (
    <div className={classes.SpinnerWrapper}>
      <div className={classes.LdsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
