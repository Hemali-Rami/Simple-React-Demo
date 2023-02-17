import React from "react";
const BirthdayremineContainer = ({ people }) => {
  return <div className="personwrap">
    {people.map((person) => {
      const { id, user, designation } = person;
      return (
        <div key={id} className="d-flex align-items-center">
          <h6>{user}</h6>
          <span>{designation}</span>
        </div>
      );
    })}
  </div>;
};
export default BirthdayremineContainer;
