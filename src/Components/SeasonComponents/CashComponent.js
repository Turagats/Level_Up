import React from "react";
import "./CashComponent.scss";
import infologo from "../../Assets/example-icon.png";
import giftlogo from "../../Assets/gift.png";
import planelogo from "../../Assets/travel-icon-sm.png";
import ticketlogo from "../../Assets/ticket-icon-sm.png";
import Footer from "../Footer";

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
      <div className="cash-h3">
        <h3>1₾ რეიქი = 1 ქულას</h3>
      </div>
      <div className="cash-section-leaderboard-container">
        <div className="cash-section-leaderboard-header-title">
          <span>TOP20 ლიდერ ბორდი ჰოლდემში</span>
          <img alt="infologo" src={infologo} />
        </div>
        <div className="cash-section-leaderboard">
          <div className="cash-section-leaderboard-title">
            <span>ადგილი</span>
            <div className="cash-section-gift">
              <img alt="giftlogo" src={giftlogo} />
              <span>ვაუჩერი</span>
            </div>
            <span>პრიზი</span>
          </div>
          <ul className="cash-section-lists">
            {topTwentyLeaderboard.map((item) => {
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
        </div>
      </div>
      <div className="cash-prize-section">
        <div className="cash-prize-section-list">
          <div className="border-line"></div>
          <img alt="" src={planelogo} />
          <span>The Festival in Malta-ს საგზური</span>
        </div>
        <div className="cash-prize-section-list">
          <div className="border-line"></div>
          <img alt="" src={ticketlogo} />
          <span>
            სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The
            Festival in Malta-ს საგზური
          </span>
        </div>
        <div className="cash-prize-section-list">
          <div className="border-line"></div>
          <img alt="" src={giftlogo} />
          <span>ტექნიკის მაღაზიის ვაუჩერი</span>
        </div>
      </div>

      <div className="cash-h3">
        <h3>1₾ რეიქი = 1 ქულას</h3>
      </div>
      <div className="cash-section-leaderboard-container">
        <div className="cash-section-leaderboard-header-title">
          <span>TOP20 ლიდერ ბორდი ჰოლდემში</span>
          <img alt="infologo" src={infologo} />
        </div>
        <div className="cash-section-leaderboard">
          <div className="cash-section-leaderboard-title">
            <span>ადგილი</span>
            <div className="cash-section-gift">
              <img alt="giftlogo" src={giftlogo} />
              <span>ვაუჩერი</span>
            </div>
            <span>პრიზი</span>
          </div>
          <ul className="cash-section-lists">
            <li className="cash-section-list">
              <div>1</div>
              <span>-</span>
              <div className="cash-list-logo">
                <img alt="planelogo" src={planelogo} />
                <span>A კატეგორიის საგზური</span>
              </div>
            </li>
            <li className="cash-section-list">
              <div>2</div>
              <span>-</span>
              <div className="cash-list-logo">
                <img alt="ticketlogo" src={ticketlogo} />
                <span>B კატეგორიის საგზური</span>
              </div>
            </li>
            <li className="cash-section-list">
              <div>3</div>
              <span>1 500 ₾</span>
              <div>
                <span>სპეც. ტურნირის ბილეთი</span>
              </div>
            </li>
            <li className="cash-section-list">
              <div>4</div>
              <span>1 500 ₾</span>
              <div>
                <span>სპეც. ტურნირის ბილეთი</span>
              </div>
            </li>
            <li className="cash-section-list">
              <div>5</div>
              <span>1 500 ₾</span>
              <div>
                <span>სპეც. ტურნირის ბილეთი</span>
              </div>
            </li>
            <li className="cash-section-list">
              <div>6</div>
              <span>1 500 ₾</span>
              <div>
                <span>სპეც. ტურნირის ბილეთი</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="cash-prize-section">
        <div className="cash-prize-section-list">
          <div className="border-line"></div>
          <img alt="" src={planelogo} />
          <span>The Festival in Malta-ს საგზური</span>
        </div>
        <div className="cash-prize-section-list">
          <div className="border-line"></div>
          <img alt="" src={ticketlogo} />
          <span>
            სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The
            Festival in Malta-ს საგზური
          </span>
        </div>
        <div className="cash-prize-section-list">
          <div className="border-line"></div>
          <img alt="" src={giftlogo} />
          <span>ტექნიკის მაღაზიის ვაუჩერი</span>
        </div>
      </div>
      <div className="cash-info-update">
        * ლიდერბორდის შედეგები განახლდება პოკერის ლობიში
      </div>
      <div style={{ width: "100%" }}>
        <Footer />
      </div>
    </section>
  );
}
