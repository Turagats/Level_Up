import React from "react";
import Footer from "../../Components/Footer";
import LeaderAndPrizes from "../SeasonComponents/SeasonUI/LeaderAndPrizes";
import giftlogo from "../../Assets/gift.png";
import planelogo from "../../Assets/travel-icon-sm.png";
import ticketlogo from "../../Assets/ticket-icon-sm.png";
import circlelogo from "../../Assets/mechanic-icon.png";
import "./NewYearComponent.scss";
import Tournaments from "./SeasonUI/Tournaments";

export default function NewYearComponent() {
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
    <section className="new-year-main-container">
      <div className="leaderboard-container">
        <div className="leaderboard-container-header">
          მოხვდი TOP22 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით
        </div>
        <div className="leaderboard-container-mini-header">
          <span>ქულების დაგროვების მექანიკა</span>
          <div className="leaderboard-container-mini-header-circle">
            <img alt="circle" src={circlelogo} />
          </div>
        </div>
        <LeaderAndPrizes
          board={topTwentyLeaderboard}
          prizes={topTwentyPrizes}
          gift={giftlogo}
        />
      </div>
      <div className="cash-info-update">
        * ლიდერბორდის შედეგები განახლდება პოკერის ლობიში <br />* სატურნირო
        ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და სატელიტები
      </div>
      <Tournaments />
      <Footer />
    </section>
  );
}
