import "./Cards.css";
const Cards = ({ phrase }) => {
  return (
    <div className="container__text">
      <span>INFOGALAX</span>
      <div className="phrase__container">
        <p>{phrase.phrase}</p>
      </div>
    </div>
  );
};

export default Cards;
