import React from "react";
import Footer from "../../Components/Footer";
import Festival from "./SeasonUI/FinalStageComponents/Festival";
import FinalTournament from "./SeasonUI/FinalStageComponents/FinalTournament";
import Mistic from "./SeasonUI/FinalStageComponents/Mistic";

export default function FinalStageComponent() {
  return (
    <section className="final-stage-main-container">
      <Festival />
      <FinalTournament />
      <Mistic />
      <Footer />
    </section>
  );
}
