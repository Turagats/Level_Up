import Header from "./Components/Header";
import Seasons from "./Components/Seasons";
import "./App.scss";

function App() {
  return (
    <div className="landing-page">
      <div className="main-pop-container">
        oto
        <section className="header-container"></section>
        <Header />
        <Seasons />
        <div className="footer">
          <div className="footer-text">ითამაშე</div>
        </div>
      </div>
    </div>
  );
}

export default App;
