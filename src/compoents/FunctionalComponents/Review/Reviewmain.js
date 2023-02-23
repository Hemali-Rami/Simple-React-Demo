import React, { useState } from "react";
import { people } from "./Reviewdata";
import "../../../scss/Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faQuoteLeft,
} from "@fortawesome/fontawesome-free-solid";

export const Reviewmain = () => {
  const [id, setId] = useState(0);
  const { img, name, desi, review } = people[id];
  const checknumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }
  const prevperson = () => {
    setId((index) => {
      let newId = index - 1;
      return checknumber(newId);
    });
  };
  const nextperson = () => {
    setId((index) => {
      let newId = index + 1;
      return checknumber(newId);
    });
  };
  const randomreview = () => {
    let newrandom = Math.floor(Math.random() * people.length);
    if (newrandom === id) {
      newrandom = id + 1;
    }
    setId(checknumber(newrandom));
  };
  return (
    <div className="reviewmain">
      <div className="container">
        <div className="reviewpart">
          <h3>Testimonial</h3>
          <div className="reviewboxwrp">
            <div className="testimaonialbox">
              <div className="imagebox">
                <img src={img} alt={name} />
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <div className="personpro">
                <h4>{name}</h4>
                <span>{desi}</span>
                <p>{review}</p>
              </div>
            </div>
            <div className="sliderarrows">
              <div className="slider_arrow next">
                <button onClick={nextperson}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="slider_arrow previous">
                <button onClick={prevperson}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
              </div>
              <div className="randomperson">
                <button onClick={randomreview}>Random review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
