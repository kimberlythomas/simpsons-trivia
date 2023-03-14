import React from "react";
import { useState } from "react";
import CardComponent from "./Card";

const CardListComponent = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="card-list">
      <CardComponent
        question={cards[currentIndex].question}
        answer={cards[currentIndex].answer}
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick}
      />
    </div>
  );
};

export default CardListComponent;
