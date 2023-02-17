import React, { useState } from "react";
import { useEffect } from "react";
import Tours from "./Tours";
import "../../../scss/Tours.css";
const url = "https://jsonplaceholder.typicode.com/users";
const TourContainer = () => {
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);
  const removeTour = (id) => {
    const newremove = tour.filter((tour) => tour.id !== id);
    setTour(newremove);
  }
  const fetchurl = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tour = await response.json();
      setLoading(false);
      setTour(tour);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchurl();
  }, []);
  if (loading) {
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
  }
  if (tour.length === 0) {
    return (
      <div className="nodata">
        <h1>No data found</h1>
        <button onClick={fetchurl}>Go back</button>
      </div>
    );
  }
  return (
    <div className="tourbox">
      <Tours tour={tour} removeTour={removeTour} />
    </div>
  );
};
export default TourContainer;
