import React, { useEffect, useState } from "react";
import "../../../scss/Tabs.css";
const url = "https://jsonplaceholder.typicode.com/users";
const TabsContainer = () => {
  const [loading, setLoading] = useState(true);
  const [Jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchjobs = async () => {
    const response = await fetch(url);
    const newjobs = await response.json();
    setJobs(newjobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchjobs();
  }, []);
  if (loading) {
    return (
      <div className="text-center">
        <div>Loading...</div>
      </div>
    );
  }
  console.log();
  const { name, email, website, phone } = Jobs[value];
  return (
    <div className="verticaltabswrap">
      <div className="container">
        <div className="verticaltabpart text-center">
          <h3>Tabs</h3>
          <div className="tabsmain">
            <div className="tabsbutton">
              {Jobs.map((item, index) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => setValue(index)}
                    className={`tabbtn ${index === value && "active"}`}
                  >
                    {item.username}
                  </button>
                );
              })}
            </div>
            <div className="tabsinfo">
              <h1>Employee Details</h1>
              <div className="emp_info">
                <h2>{name}</h2>
                <p>
                  <b>Email:</b>
                  {email}
                </p>
                <p>
                  <b>Webiste:</b>
                  {website}
                </p>
                <p>
                  <b>Phone:</b>
                  {phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsContainer;
