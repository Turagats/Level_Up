import React from "react";
import "./Mistic.scss";

const MISTIC_LIST = [
  {
    placement: 1,
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    placement: 2,
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    placement: 3,
    text: "სპეციალური ტურნირი Tournament Sharks II ადგილი",
  },
  {
    placement: 4,
    text: "სპეც. ტურნირი Tournament Sharks III ადგილი",
  },
  {
    placement: 5,
    text: "Holdem Grinders ლიდერბორდის გამარჯვებული",
  },
  {
    placement: 6,
    text: "ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები",
  },
  {
    placement: 7,
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    placement: 8,
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    placement: 9,
    text: "სპეციალური ტურნირი Tournament Sharks II ადგილი",
  },
  {
    placement: 10,
    text: "სპეც. ტურნირი Tournament Sharks III ადგილი",
  },
  {
    placement: 11,
    text: "Holdem Grinders ლიდერბორდის გამარჯვებული",
  },
  {
    placement: 12,
    text: "ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები",
  },
];

export default function Mistic() {
  return (
    <div className="mistic-main">
      <div className="mistic-main-header">მისტიური გასაღები</div>
      <div className="mistic-main-mini-header">
        მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში მიიღებენ
        საიდუმლო გასაღებს
      </div>

      <ul className="mistic-section-lists">
        {MISTIC_LIST.map((item) => {
          return (
            <li className="mistic-section-list" key={item.placement}>
              <div className="mistic-placement">{item.placement}</div>
              <div className="mistic-list-text">
                <span>{item.text}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
