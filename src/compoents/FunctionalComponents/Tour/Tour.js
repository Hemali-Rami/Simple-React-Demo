import React from "react";
export const Tour = ({ id, name, username, email, removeTour }) => {
  return (
    <div className="tourmainbox" key={id}>
      <h6>{name}</h6>
      <span>{username}</span>
      <p>{email}</p>
      <button onClick={() =>{removeTour(id);} }>close</button>
    </div>
  );
};
