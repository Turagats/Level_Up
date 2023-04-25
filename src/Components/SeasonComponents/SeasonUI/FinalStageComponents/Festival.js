import React from "react";
import "./Festival.scss";
import TravelCategories from "./TravelCategories";
import backgroundIMG from "../../../../Assets/malta.jpeg";
import ticketicon from "../../../../Assets/final-item-ticket-icon.png";
import eventicon from "../../../../Assets/final-item-event-icon.png";
import hotelicon from "../../../../Assets/final-item-hotel-icon.png";
import moneyicon from "../../../../Assets/final-item-money-icon.png";

export default function Festival() {
  const headers = [
    "A კატეგორიის საგზურში შედის",
    "B კატეგორიის საგზურში შედის",
    "C კატეგორიის საგზურში შედის",
  ];
  const categoriesList1 = [
    {
      place: "1",
      img: ticketicon,
      text: "ორმხრივი ავიაბილეთი",
    },
    {
      place: "2",
      img: eventicon,
      text: "The Festival in Malta -ს მეინ ივენთის ბაი-ინი",
    },
    {
      place: "3",
      img: ticketicon,
      text: "Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი",
    },
    {
      place: "4",
      img: hotelicon,
      text: "სასტუმრო",
    },
    {
      place: "5",
      img: moneyicon,
      text: "€500 სახარჯი ფული",
    },
  ];

  const categoriesList2 = [
    {
      place: "1",
      img: ticketicon,
      text: "ორმხრივი ავიაბილეთი",
    },
    {
      place: "2",
      img: eventicon,
      text: "The Festival in Malta -ს მეინ ივენთის ბაი-ინი",
    },
    {
      place: "4",
      img: hotelicon,
      text: "სასტუმრო",
    },
    {
      place: "5",
      img: moneyicon,
      text: "€500 სახარჯი ფული",
    },
  ];

  const categories = [categoriesList1, categoriesList1, categoriesList2];

  return (
    <div className="festival-container">
      <div className="festival-backroung-img">
        <img alt="" src={backgroundIMG} id="festival-backroung-img" />
      </div>
      <div className="festival-title">გაემგზავრე THE FESTIVAL IN MALTA-ზე!</div>
      <div className="festival-text">
        The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს პოკერის
        მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
      </div>
      <div className="festival-dates">
        15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
      </div>
      <div className="festival-travel-categories-container">
        {headers.map((item, index) => {
          return (
            <TravelCategories headers={item} categories={categories[index]} />
          );
        })}
      </div>
    </div>
  );
}
