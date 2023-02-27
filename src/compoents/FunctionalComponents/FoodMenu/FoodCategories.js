import React from "react";

const FoodCategories = ({ getCategories, categories }) => {
  return (
    <div className="categoieswrap">
      <div className="container">
        <div className="catgoriespart">
          {/* manual fetch the categories */}
          {/* <button onClick={() => getCategories("all")}>all</button>
          <button onClick={() => getCategories("breakfast")}>Breakfast</button> */}

          {/* fetch the data dynamically */}
          {categories.map((categ, index) => {
            return (
              <button key={index} onClick={() => getCategories(categ)}>
                {categ}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodCategories;
