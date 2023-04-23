import React from "react";
import "./Tournaments.scss";
import mleftpromo from "../../../Assets/promo-left-img-m.png";
import mrightpromo from "../../../Assets/promo-right-img-m.png";
import rightpromo from "../../../Assets/promo-right-img.png";
import leftpromo from "../../../Assets/promo-left-img.png";

export default function Tournaments() {
  return (
    <div className="tournaments-main-container">
      <div className="tournament-header">
        <div className="border-line-orange"></div>
        ტურნირები და სატელიტები
      </div>
      <div className="tournament-image-background">
        <div className="tournament-image-background-text">
          სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:
        </div>
        <div className="tournament-image-background-clock">
          19:00 / 19:30 / 20:00
        </div>
        <div className="tournaments-images">
          <div className="tournament-mobile-left-image">
            <img alt="" src={mleftpromo} />
          </div>
          <div className="tournament-mobile-right-image">
            <img alt="" src={mrightpromo} />
          </div>
          <div className="tournament-left-image">
            <img alt="" src={leftpromo} />
          </div>
          <div className="tournament-right-image">
            <img alt="" src={rightpromo} />
          </div>
        </div>
      </div>
      <div className="tournaments-footer">
        <div className="tournaments-footer-text">
          * ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან. <br />
          ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
        </div>
        <div className="tournament-button">პოკერის ლობი</div>
      </div>
    </div>
  );
}
