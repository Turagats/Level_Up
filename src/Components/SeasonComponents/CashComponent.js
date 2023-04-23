import React from "react";
import "./CashComponent.scss";
import infologo from "../../Assets/example-icon.png";
// import giftlogo from "../../Assets/gift.png";
// import planelogo from "../../Assets/travel-icon-sm.png";
// import ticketlogo from "../../Assets/ticket-icon-sm.png";
import Footer from "../Footer";
import TopTwentyLeaderBoard from "./SeasonUI/TopTwentyLeaderBoard";
import Tournaments from "./SeasonUI/Tournaments";

export default function CashComponent() {
  return (
    <section className="cash-main-container">
      <TopTwentyLeaderBoard
        info={infologo}
        // gift={giftlogo}
        // board={topTwentyLeaderboard}
        // plane={planelogo}
        // ticket={ticketlogo}
        // prizes={TopTwentyPrizes}
      />
      <TopTwentyLeaderBoard
        info={infologo}
        // gift={giftlogo}
        // board={topTwentyLeaderboard}
        // plane={planelogo}
        // ticket={ticketlogo}
        // prizes={TopTwentyPrizes}
      />

      <div className="cash-info-update">
        * ლიდერბორდის შედეგები განახლდება პოკერის ლობიში
      </div>
      <Tournaments />

      <div style={{ width: "100%" }}>
        <Footer />
      </div>
    </section>
  );
}
