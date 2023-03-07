import React from 'react';
import { useState } from "react";
import '../App.css';


const CardComponent = ({ question, answer, showAnswer, onCardClick }) => {
    return (
      <div className="card-wrapper">
        <div className="card-container">
          <div
            className={`card ${showAnswer ? "flipped" : ""}`}
            onClick={onCardClick}
          >
            <div className="card-front">{question}</div>
            <div className="card-back">{answer}</div>
          </div>
        </div>
      </div>
    );
  };

  export default CardComponent;