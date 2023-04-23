import React from "react";
import "./LeaderAndPrizes.scss";

export default function LeaderAndPrizes(props) {
  return (
    <section className="leader-and-prizes">
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
      <div className="cash-prize-section">
        {props.prizes.map((item) => {
          return (
            <div className="cash-prize-section-list" key={item.place}>
              <div className="border-line"></div>
              <img alt={""} src={item.logo} />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
