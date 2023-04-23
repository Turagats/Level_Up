import React from "react";
import "./TopTwentyLeaderBoard.scss";

export default function TopTwentyLeaderBoard(props) {
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
        <div className="cash-section-leaderboard">
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
        </div>
      </div>
      <div className="cash-prize-section">
        {props.prizes.map((item) => {
          return (
            <div className="cash-prize-section-list" key={item.place}>
              <div className="border-line" key={item.place}></div>
              <img alt={""} src={item.logo} />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
