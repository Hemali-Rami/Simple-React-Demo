import React, { useState } from "react";
import { people } from "./Reviewdata";
import "../../../scss/Review.css";
export const Reviewmain = () => {
  const [id, setId] = useState(0);
  const { img, name, desi, review } = people[id];
  return (
    <div className="reviewmain">
      <div className="container">
        <div className="reviewpart">
          <h3>Testimonial</h3>
          <div className="reviewboxwrp">
            <div className="testimaonialbox">
              <img src={img} alt={name} />
              <div className="personpro">
                <h4>{name}</h4>
                <span>{desi}</span>
                <p>{review}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
