import React, { useState } from "react";

// Card component
const Card = () => {
  return (
    <div className="bg-green-400 p-5 m-3 rounded-2xl shadow-2xl">
      <h3>Hello</h3>
      {/* <p>ds</p> */}
      <p>This is a dynamically added card.</p>
    </div>
  );
};

// Parent component
const App = () => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards((prevCards) => [...prevCards, <Card key={prevCards.length} />]);
  };

  return (
    <div>
      <button className="bg-blue-500 rounded-lg p-3 m-3" onClick={addCard}>Add Card</button>
      <div>
        {cards}
      </div>
    </div>
  );
};

export default App;
