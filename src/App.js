import Header from "./Components/Header";
import Seasons from "./Components/Seasons";
import "./App.scss";
import background from "./Assets/backgroun-europebet.jpeg";

function App() {
  return (
    <div className="landing-page">
      <div className="main">
        <div className="main-pop-container">
          <Header />
          <Seasons />
          <div className="footer-end">
            <div className="footer-end-text">ითამაშე</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
