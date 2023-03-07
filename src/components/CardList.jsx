import React from 'react';
import { useState } from "react";
import CardComponent from "./Card";


const CardListComponent = ({ cards }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(
      Math.floor(Math.random() * cards.length)
    );
    const [showAnswer, setShowAnswer] = useState(false);
  
    const handleNextButtonClick = () => {
      setShowAnswer(false); // reset showAnswer to false
      setTimeout(() => {
        setCurrentCardIndex(Math.floor(Math.random() * cards.length));
      }, 500); // delay showing next question by 0.5 second so the answer doesn't flash before the question loads
      
    };

    return (
      <div>
        <CardComponent
          question={cards[currentCardIndex].question}
          answer={cards[currentCardIndex].answer}
          showAnswer={showAnswer}
          onCardClick={() => setShowAnswer(!showAnswer)}
        />
        <button className="btn btn-primary" onClick={handleNextButtonClick}>
          Next
        </button>
      </div>
    );
  };

  export default CardListComponent;
  