import React, { useState } from "react";
import "./Seasons.scss";
import CashComponent from "./SeasonComponents/CashComponent";
import NewYearComponent from "./SeasonComponents/NewYearComponent";
import FinalStageComponent from "./SeasonComponents/FinalStageComponent";

export default function Seasons() {
  const [visible, setVisible] = useState("CashGames");

  return (
    <section className="season-section">
      <div className="seasons">
        <div
          className={
            visible === "CashGames"
              ? "choosen-season"
              : "season-choose cash-left"
          }
          onClick={() => setVisible("CashGames")}
        >
          <span className="season-date">28 ოქტ. - 7 ნოემ.</span>
          <span className="season-stages">Cash Games</span>
        </div>
        <div
          className={visible === "NewYear" ? "choosen-season" : "season-choose"}
          onClick={() => setVisible("NewYear")}
        >
          <span className="season-date">10 - 29 დეკ.</span>
          <span className="season-stages">New Year Series</span>
        </div>
        <div
          className={
            visible === "Final" ? "choosen-season" : "season-choose final-right"
          }
          onClick={() => setVisible("Final")}
        >
          <span className="season-date">28 ოქტ. - 7 ნოემ.</span>
          <span className="season-stages">Final Stage</span>
        </div>
      </div>
      {visible === "CashGames" && <CashComponent />}
      {visible === "NewYear" && <NewYearComponent />}
      {visible === "Final" && <FinalStageComponent />}
    </section>
  );
}
