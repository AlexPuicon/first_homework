import { useState } from "react";
import Cards from "./components/Cards";
import phrases from "./assets/phrase.json";
import Footer from "./components/Footer";
import { getRandomNumber } from "./utils/getRandomNumber";
import background from "./assets/images";
import "./App.css";

function App() {
  const [indexPhrase, setIndexPhrase] = useState(
    getRandomNumber(0, phrases.length - 1)
  );
  const [count, setcount] = useState(getRandomNumber(0, background.length - 1));
  const changeFhrase = () => {
    let newIndex = getRandomNumber(0, phrases.length - 1);
    while (newIndex === indexPhrase) {
      newIndex = getRandomNumber(0, phrases.length - 1);
    }
    setIndexPhrase(newIndex);
    changeImg();
  };
  const changeImg = () => {
    let newimg = getRandomNumber(0, background.length - 1);
    while (newimg === count) {
      newimg = getRandomNumber(0, background.length - 1);
    }
    setcount(newimg);
  };

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${background[count]})` }}
    >
      <Cards phrase={phrases[indexPhrase]} />
      <button onClick={changeFhrase}>
        <i class="fa-solid fa-rotate-right"></i>
      </button>
      <Footer phrase={phrases[indexPhrase]} />
    </div>
  );
}

export default App;
