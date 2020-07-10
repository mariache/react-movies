import React from "react";

const Spinner = (): JSX.Element => {
  return (
    <div className="spinner-wrapper">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
