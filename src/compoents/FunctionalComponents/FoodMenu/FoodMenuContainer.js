import React, { useState } from "react";
import { items } from "./FoodMenuitems";
import FoodMenu from "./FoodMenu";
import FoodCategories from "./FoodCategories";
import "../../../scss/FoodMenu.css";
const FoodMenuContainer = () => {
  //Dynamic all categories
  const allcategory = ["all", ...new Set(items.map((item) => item.categ))];
  console.log(allcategory);
  const [menuitems, setMenuitems] = useState(items);
  const [categories, setCategories] = useState(allcategory);
  const getCategories = (categ) => {
    //For all button items
    if (categ === "all") {
      setMenuitems(items);
      return;
    }
    //Fetch the data manually from the items
    const newCategories = items.filter((item) => item.categ === categ);
    setMenuitems(newCategories);
  };
  return (
    <div className="foodmenuwrap">
      <div className="container">
        <div className="foodmenupart text-center">
          <h3>Food Menu</h3>
          <div className="foodmenumain">
            <FoodCategories
              getCategories={getCategories}
              categories={categories}
            />
            <FoodMenu items={menuitems} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoodMenuContainer;
