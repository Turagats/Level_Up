import React from "react";
import "./FinalTournament.scss";
import euroicon from "../../../../Assets/poker-item-1-ticket-icon.png";

const FINAL_TOURNAMENT_LIST = [
  {
    header: "„Holdem Grinders”",
    text: "C კატეგორიის 1 საგზური",
  },
  {
    header: "“Cashgame Sharks”",
    text: "C კატეგორიის 1 საგზური",
  },
  {
    header: "„Holdem Grinders”",
    text: "C კატეგორიის 1 საგზური",
  },
  {
    header: "„The Festival in Malta, GTD“",
    text: "C კატეგორიის 1 საგზური\nC კატეგორიის 1 საგზური\n*ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.",
  },
  {
    header: "“Cashgame Sharks”",
    text: "C კატეგორიის 1 საგზური\n*ტურნირზე მონაწილებას შეძლებენ მხოლოდ ევროპაბეთის ბეჭდის მფლობელები.",
  },
];

export default function FinalTournament() {
  return (
    <div className="final-tournament-main">
      <div className="final-tournament-main-header">
        <div className="border-line-orange"></div>
        მოიგე საგზური 30 აპრილის ტურნირებზე
      </div>
      <div class="final-tournament-flex-container">
        <div className="final-tournament-flex-3">
          {FINAL_TOURNAMENT_LIST.map((item, index) => {
            if (index <= 2) {
              return (
                <div className="final-tournament-item">
                  <span className="final-tournament-item-header">
                    {item.header}
                  </span>
                  <span className="final-tournament-item-text">
                    {item.text}
                  </span>
                  <img alt="" src={euroicon} />
                </div>
              );
            }
          })}
        </div>
        <div className="final-tournament-flex-2">
          {FINAL_TOURNAMENT_LIST.map((item, index) => {
            if (index > 2) {
              return (
                <div className="final-tournament-item">
                  <span className="final-tournament-item-header">
                    {item.header}
                  </span>
                  <span className="final-tournament-item-text">
                    {item.text}
                  </span>
                  <img alt="" src={euroicon} />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="final-tournament-main-footer">
        * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the Rings
        ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით <br /> *ტურნირში
        მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი ბაი-ინის
        გადახდით.
      </div>
    </div>
  );
}
