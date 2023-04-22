import Header from "./Components/Header";
import Seasons from "./Components/Seasons";
// import Footer from "./Components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="landing-page">
      <div className="main-pop-container">
        oto
        <section className="header-container"></section>
        <Header />
        <Seasons />
        {/* <Footer /> */}
        <div className="footer-end">
          <div className="footer-end-text">ითამაშე</div>
        </div>
      </div>
    </div>
  );
}

export default App;
