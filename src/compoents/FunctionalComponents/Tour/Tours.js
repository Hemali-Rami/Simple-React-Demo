import React from "react";
import { Tour } from "./Tour";
const Tours = ({ tour, removeTour}) => {
  return (
    <div className="tourwrap">
      <div className="container">
        <div className="tourpart">
          <h3>Tours</h3>
          <div className="tourmain">
            {tour.map((tours) => {
              return (
                <>
                  <Tour key={tours.id} {...tours} removeTour={removeTour} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tours; 