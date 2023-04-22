import React from "react";
import "./Header.scss";
import banner from "../Assets/banner.jpg";
import closeImg from "../Assets/close-outline.svg";

export default function Header() {
  return (
    <div className="main-header">
      <div className="background-image">
        <img alt="background_image" src={banner} />
      </div>
      <div className="dates-and-gifts-container">
        <div className="header-dates">
          <div className="header-dates-slots">სლოტები</div>
          <span>10 სექტემბერი - 7 ნოემბერი</span>
        </div>
        <div className="header-date-close">
          <img src={closeImg} alt="close" />
        </div>
        <div className="header-travel-gifts">
          <div className="">მოიპოვე 10 საგზურიდან ერთ-ერთი</div>
          <span>მოხვდი პოკერის ფესტივალზე მალტაში</span>
        </div>
      </div>
    </div>
  );
}
