import React from "react";
import "../../../scss/Error.css";
import errorimg from "../../../images/404page.jpg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="erroepagewrapper">
      <div className="container">
        <div className="errorpagepart">
          <div className="error404image">
            <img src={errorimg} alt="404 page" />
          </div>
          <div className="errordescpart">
            <h4>Oops!!! page not found.</h4>
            <Link to="/">back to home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
