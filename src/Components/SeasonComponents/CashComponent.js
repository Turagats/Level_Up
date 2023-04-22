import React from "react";
import "./CashComponent.scss";
import infologo from "../../Assets/example-icon.png";
import giftlogo from "../../Assets/gift.png";
import planelogo from "../../Assets/travel-icon-sm.png";
import ticketlogo from "../../Assets/ticket-icon-sm.png";
import Footer from "../Footer";
import TopTwentyLeaderBoard from "./SeasonUI/TopTwentyLeaderBoard";

export default function CashComponent() {
  const topTwentyLeaderboard = [
    {
      placement: 1,
      voucher: "-",
      image: planelogo,
      prize: "A კატეგორიის საგზური",
    },
    {
      placement: 2,
      voucher: "-",
      image: ticketlogo,
      prize: "B კატეგორიის საგზური",
    },
    {
      placement: 3,
      voucher: "1 500 ₾",
      image: "",
      prize: "A კატეგორიის საგზური",
    },
    {
      placement: 3,
      voucher: "1 500 ₾",
      image: "",
      prize: "A კატეგორიის საგზური",
    },
    {
      placement: 3,
      voucher: "1 500 ₾",
      image: "",
      prize: "A კატეგორიის საგზური",
    },
    {
      placement: 3,
      voucher: "1 500 ₾",
      image: "",
      prize: "A კატეგორიის საგზური",
    },
  ];

  return (
    <section className="cash-main-container">
      <TopTwentyLeaderBoard
        info={infologo}
        gift={giftlogo}
        board={topTwentyLeaderboard}
      />
      <TopTwentyLeaderBoard
        info={infologo}
        gift={giftlogo}
        board={topTwentyLeaderboard}
      />

      <div className="cash-info-update">
        * ლიდერბორდის შედეგები განახლდება პოკერის ლობიში
      </div>
      <div style={{ width: "100%" }}>
        <Footer />
      </div>
    </section>
  );
}
