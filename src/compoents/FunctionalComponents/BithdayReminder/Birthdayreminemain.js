import React, { useState } from "react";
import data  from "./data";
import BirthdayremineContainer from "../BithdayReminder/BirthdayremineContainer";
import "../../../scss/BirthdayReminder.css";
const Birthdayreminemain =() => {
    const [people, setPeople] = useState(data);
  return (
    <div className="birthdauremiderwrap">
      <div className="container">
        <div className="birthdayreminderpart text-center">
          <h3>Birthday reminder</h3>
          <div className="birthdayremimderbox">
            <h4>{people.length} birthday today</h4>
            <BirthdayremineContainer people={people} />
            <button onClick={() => setPeople([])}>Clear all</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Birthdayreminemain;
