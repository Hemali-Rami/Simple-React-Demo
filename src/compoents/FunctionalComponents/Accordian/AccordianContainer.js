import React, { useState } from "react";
import "../../../scss/Accordian.css";
import quedata from "../Accordian/AccordianData";
import { SingleQuestion } from "./SingleQuestion";
const  AccordianContainer = () => {
  const [question, Setquestion] = useState(quedata);
  return (
    <div className="accordianwarp">
      <div className="container">
        <div className="accordianpart text-center">
          <h3>accordian</h3>
          <div className="accordianmain">
            {question.map((ques) => {
              return <SingleQuestion key={ques.id} {...ques} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccordianContainer;