import React, { useEffect, useState } from "react";
import "../../../scss/Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  // faQuoteLeft,
} from "@fortawesome/fontawesome-free-solid";

import { slidedata } from "./Slidedata";
const SliderContainer = () => {
  const [data] = useState(slidedata);
  const [index, setIndex] = useState(0);
  const mod = (n, m) => {
    let res = n % m;
    return res > 0 ? res : res + m;
  };
  // useEffect(() => {
  //   const prevIndex = data.length - 1;
  //   if (index < 0) {
  //     setIndex(prevIndex);
  //   }
  //   if (index > prevIndex) {
  //     setIndex(0);
  //   }
  // }, [index, data]);
  // useEffect(() => {
  //   setInterval(
  //     () => {
  //       setIndex(index - 1);
  //     },5000
  //   )
  // },[index]

  // )
  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % data.length);
    }, 3000);
  }, [index]);

  return (
    <div className="sliderwrap">
      <div className="container-fluid p-0">
        <div className="sliderpart">
          <h3>Carousel</h3>
          <div className="slidermain">
            {data.map((people, peopleId) => {
              const { id, img, name, desi, description } = people;
              // let pos = "next";
              // if (peopleId === index) {
              //   pos = "active";
              // }
              // if (
              //   peopleId === index - 1 ||
              //   (index === 0 && peopleId === data.length - 1)
              // ) {
              //   pos = "prev";
              // }
              const indexLeft = mod(index - 1, data.length);
              const indexright = mod(index + 1, data.length);
              let pos = "";
              if (peopleId === index) {
                pos = "active";
              } else if (peopleId === indexright) {
                pos = "next";
              } else if (peopleId === indexLeft) {
                pos = "prev";
              } else {
                pos = "slider";
              }

              return (
                <div className={`sliderbox ${pos}`} key={id}>
                  <div className="sliderdata">
                    <div className="slidermaindata">
                      <h4>{name}</h4>
                      <span>{desi}</span>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="sliderimages">
                    <img src={img} alt={name} />
                  </div>
                </div>
              );
            })}
            <div className="sliderbtns">
              <div className="slidebtn">
                <button onClick={() => setIndex(mod(index + 1, data.length))}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="slidebtn">
                <button onClick={() => setIndex(mod(index - 1, data.length))}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderContainer;
