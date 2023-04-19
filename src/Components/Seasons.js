import React from "react";
import "./Seasons.scss";

export default function Seasons(props) {
  return (
    <section className="season-section">
      <div className="season-date">{props.dates}</div>
      <div className="season-stages">{props.stages}</div>
    </section>
  );
}
