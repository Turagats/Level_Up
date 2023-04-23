import React from "react";
import LeaderAndPrizes from "./LeaderAndPrizes";
import "./TopTwentyLeaderBoard.scss";
// import infologo from "../../../Assets/example-icon.png";
import giftlogo from "../../../Assets/gift.png";
import planelogo from "../../../Assets/travel-icon-sm.png";
import ticketlogo from "../../../Assets/ticket-icon-sm.png";
// import Footer from "../Footer";
// import TopTwentyLeaderBoard from "./SeasonUI/TopTwentyLeaderBoard";

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
      <div className="cash-h3">
        <h3>1₾ რეიქი = 1 ქულას</h3>
      </div>
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
        {/* <div className="cash-section-leaderboard">
          <div className="cash-section-leaderboard-title">
            <span>ადგილი</span>
            <div className="cash-section-gift">
              <img alt="giftlogo" src={props.gift} />
              <span>ვაუჩერი</span>
            </div>
            <span>პრიზი</span>
          </div>
          <ul className="cash-section-lists">
            {props.board.map((item) => {
              return (
                <li className="cash-section-list" key={item.placement}>
                  <div className="cash-placement">{item.placement}</div>
                  <span>{item.voucher}</span>
                  <div className="cash-list-logo">
                    <img alt={""} src={item.image} />
                    <span>{item.prize}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
      {/* <div className="cash-prize-section">
        {props.prizes.map((item) => {
          return (
            <div className="cash-prize-section-list" key={item.place}>
              <div className="border-line" key={item.place}></div>
              <img alt={""} src={item.logo} />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
