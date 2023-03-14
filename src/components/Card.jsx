import React from "react";
import { useState } from "react";
import "../App.css";

const CardComponent = ({ question, answer, onNextClick, onPrevClick }) => {
  const [guess, setGuess] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.toLowerCase() === answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowAnswer(true);
  };

  const handleNextClick = () => {
    setGuess("");
    setShowAnswer(false);
    setIsCorrect(null);
    onNextClick();
  };

  const handlePrevClick = () => {
    setGuess("");
    setShowAnswer(false);
    setIsCorrect(null);
    onPrevClick();
  };

  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div className={`card ${showAnswer ? "flipped" : ""}`}>
          <div className="card-front">{question}</div>
          <div className="card-back">
            {showAnswer && (
              <>
                <div className="answer">
                  <p>{answer}</p>

                  {isCorrect !== null && (
                    <div
                      className={`feedback ${
                        isCorrect ? "correct" : "incorrect"
                      }`}
                    >
                      {isCorrect ? (
                        <img
                          src="../src/assets/woohoo.png"
                          alt="Woohoo! Correct."
                          title="Woohoo! Correct."
                        />
                      ) : (
                        <img
                          src="../src/assets/doh.png"
                          alt="D'oh! Incorrect."
                          title="D'oh! Incorrect."
                        />
                      )}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {!showAnswer && (
            <>
              <input
                type="text"
                placeholder="Enter your guess here"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
              />
              <button type="submit">Submit</button>
            </>
          )}
        </form>
        <div className="buttons">
          <button onClick={handlePrevClick}>&#60; Prev</button>
          <button onClick={handleNextClick}>Next &#62;</button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
