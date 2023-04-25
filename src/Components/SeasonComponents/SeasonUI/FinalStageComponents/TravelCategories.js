import React from "react";
import "./TravelCategories.scss";

export default function TravelCategories(props) {
  return (
    <div className="categories-main-container">
      <div className="categories-lists-header">{props.headers}</div>
      <ul className="categories-lists">
        {props.categories.map((item) => {
          return (
            <li className="categories-list" key={item.place}>
              <img alt="" src={item.img} />
              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
