import React from "react";

export const Loader = () => {
  return (
    <div className="loaderwrapper">
      <div className="container text-center">
        {/* <h1>Loading.....</h1> */}
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
