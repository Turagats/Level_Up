import React from "react";
import "./Footer.scss";
import game1 from "../Assets/game1.jpeg";
import game2 from "../Assets/game2.jpeg";
import game3 from "../Assets/game3.jpeg";
import game4 from "../Assets/game4.jpeg";
import game5 from "../Assets/game5.jpeg";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section-1">
        <div className="footer-section-title">წესები და პირობები</div>
        <div className="footer-TC">
          <div className="footer-TC-list">
            როდის იწყება და რა ფორმატით გაიმართება აქცია
          </div>
          <div className="footer-TC-list">
            როგორ მივიღო აქციაში მონაწილეობა?
          </div>
          <div className="footer-TC-list">სხვადასვა</div>
        </div>
      </div>
      <div className="footer-section-2">
        <div className="footer-section-title">მსგავსი აქციები</div>
        <div className="footer-image-section">
          <img alt="game" src={game1} />
          <img alt="game" src={game2} />
          <img alt="game" src={game3} />
          <img alt="game" src={game4} />
          <img alt="game" src={game5} />
        </div>
      </div>
    </div>
  );
}
