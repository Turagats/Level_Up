import React from "react";
import "./CashComponent.scss";
import infologo from "../../Assets/example-icon.png";
import Footer from "../Footer";
import TopTwentyLeaderBoard from "./SeasonUI/TopTwentyLeaderBoard";
import Tournaments from "./SeasonUI/Tournaments";

export default function CashComponent() {
  return (
    <section className="cash-main-container">
      <TopTwentyLeaderBoard info={infologo} />
      <TopTwentyLeaderBoard info={infologo} />
      <div className="cash-info-update">
        * ლიდერბორდის შედეგები განახლდება პოკერის ლობიში
      </div>
      <Tournaments />
      <Footer />
    </section>
  );
}
