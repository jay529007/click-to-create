import React, { useState } from "react";
import Card from "./component/card";

// Parent component
{/* <Card />; */}
const App = () => {
  const [cards, setCards] = useState([]); //hook

  const addCard = () => {
    setCards((prevCards) => [...prevCards, <Card key={prevCards.length} />]); //callback
  };

  return (
    <div>
      <button className="bg-blue-500 rounded-lg p-3 m-3" onClick={addCard}>
        Add Card
      </button>
      <div>{cards}</div>
    </div>
  );
};

export default App;
