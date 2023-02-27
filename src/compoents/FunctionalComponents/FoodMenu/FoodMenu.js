import React from "react";

const FoodMenu = ({ items }) => {
  return (
    <div className="itemmain">
      {items.map((menuitem) => {
        const { id, img, foodname, price, discount, desc } = menuitem;
        return (
          <div className="itembox" key={id}>
            <div className="itemimage">
              <img src={img} alt={foodname} />
              <div className="discount">{discount}</div>
            </div>
            <div className="itemdescpart">
              <div className="toppart">
                <span>
                  <b>{foodname}</b>
                </span>
                <div className="price">
                  <b>{price}</b>
                </div>
              </div>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FoodMenu;
