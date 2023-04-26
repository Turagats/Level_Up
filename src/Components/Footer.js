import React, { useState } from "react";
import "./Footer.scss";
import tccomponent from "./SeasonComponents/TCobject";
import game1 from "../Assets/game1.jpeg";
import game2 from "../Assets/game2.jpeg";
import game3 from "../Assets/game3.jpeg";
import game4 from "../Assets/game4.jpeg";
import game5 from "../Assets/game5.jpeg";
import dropdown from "../Assets/dropdown.png";

export default function Footer() {
  const [terms, setTerms] = useState(tccomponent);

  const toggleDetails = (index) => {
    setTerms(
      terms.map((term, i) =>
        i === index
          ? { ...term, showDetails: !term.showDetails, rotated: !term.rotated }
          : term
      )
    );
  };

  return (
    <div className="footer-container">
      <div className="footer-section-1">
        <div className="footer-section-title">წესები და პირობები</div>
        <div className="footer-TC">
          {terms.map((term, index) => (
            <div key={index}>
              <div
                className="footer-TC-list"
                onClick={() => toggleDetails(index)}
              >
                {term.title}
                <img
                  src={dropdown}
                  alt=""
                  style={{
                    transform: term.rotated && "rotate(180deg)",
                    transition: "transform 0.4s ease-in-out",
                  }}
                />
              </div>
              {term.showDetails && (
                <div
                  className="footer-TC-list-description"
                  id="footer-TC-list-description"
                  style={{
                    color: "aliceblue",
                    opacity: "0.7",
                    transition: term.showDetails && "opacity 0.8s ease-in-out",
                  }}
                >
                  {term.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-section-2">
        <div className="footer-section-title">მსგავსი აქციები</div>
        <div className="footer-image-section">
          <div className="footer-image-container">
            <img alt="game" src={game1} />
            <img alt="game" src={game2} />
            <img alt="game" src={game3} />
            <img alt="game" src={game4} />
            <img alt="game" src={game5} />
          </div>
        </div>
      </div>
    </div>
  );
}
