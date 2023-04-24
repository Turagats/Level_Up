import React from "react";
import LeaderAndPrizes from "./LeaderAndPrizes";
import "./TopTwentyLeaderBoard.scss";
import giftlogo from "../../../Assets/gift.png";
import planelogo from "../../../Assets/travel-icon-sm.png";
import ticketlogo from "../../../Assets/ticket-icon-sm.png";

export default function TopTwentyLeaderBoard(props) {
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
      placement: 4,
      voucher: "1 500 ₾",
      image: "",
      prize: "A კატეგორიის საგზური",
    },
    {
      placement: 5,
      voucher: "1 500 ₾",
      image: "",
      prize: "A კატეგორიის საგზური",
    },
    {
      placement: 6,
      voucher: "1 500 ₾",
      image: "",
      prize: "A კატეგორიის საგზური",
    },
  ];

  const topTwentyPrizes = [
    { place: 1, logo: planelogo, text: "The Festival in Malta-ს საგზური" },
    {
      place: 2,
      logo: ticketlogo,
      text: "სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური",
    },
    {
      place: 3,
      logo: giftlogo,
      text: "ტექნიკის მაღაზიის ვაუჩერი",
    },
  ];
  return (
    <div className="top-twenty-container">
      <div className="cash-section-leaderboard-container">
        <div className="cash-section-leaderboard-header-title">
          <span>TOP20 ლიდერ ბორდი ჰოლდემში</span>
          <img alt="infologo" src={props.info} />
        </div>
        <LeaderAndPrizes
          gift={giftlogo}
          board={topTwentyLeaderboard}
          prizes={topTwentyPrizes}
        />
      </div>
    </div>
  );
}
