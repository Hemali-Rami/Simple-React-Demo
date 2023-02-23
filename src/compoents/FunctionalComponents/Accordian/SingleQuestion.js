import React, { useState } from "react";
export const SingleQuestion = ({ question, ans }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="accordianbox">
      <div className="accordianheader">
        <button onClick={() => setShow(!show)}>
          <div className="questxt">{question}</div>
          <div className="icon">{show ? <span>-</span> : <span>+</span>}</div>
        </button>
      </div>
      {show && <div className="accordianinfo">{ans}</div>}
    </div>
  );
};
