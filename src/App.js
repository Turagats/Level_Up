import Header from "./Components/Header";
import Seasons from "./Components/Seasons";
import "./Styles/Mixins.scss";

function App() {

  
  return (
    <div className="landing-page">
      <div className="main-pop-container">
        oto
        <section className="header-container"></section>
        <Header />
        <Seasons />
      </div>
    </div>
  );
}

export default App;
