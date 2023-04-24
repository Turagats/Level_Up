import "./Satelits.scss";
import React from "react";
import banner1 from "../../../Assets/tournament-bg.png";
import banner2 from "../../../Assets/main-bg-sm.png";
import banner3 from "../../../Assets/main-bg.png";
import banner4 from "../../../Assets/tournament-bg-m.png";

export default function Satelits() {
  return (
    <div className="satelits-main">
      <div className="satelits-header">ყოველდღიური ტურნირები და სატელიტები</div>
      <div className="satelits-banner-container">
        <div className="satelits-banners">
          <img alt="" src={banner1} className="satelits-desktop-banners" />
          <img alt="" src={banner4} className="satelits-mobile-banners" />
        </div>
        <div className="satelits-banners">
          <img alt="" src={banner1} className="satelits-desktop-banners" />
          <img alt="" src={banner4} className="satelits-mobile-banners" />
        </div>
        <div className="satelits-banners">
          <img alt="" src={banner3} className="satelits-desktop-banners" />
          <img alt="" src={banner2} className="satelits-mobile-banners" />
        </div>
      </div>
      <div className="satelits-footer">
        * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The
        Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის
        მისაღებად.
      </div>
    </div>
  );
}
