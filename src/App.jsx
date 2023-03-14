import React from "react";
import "./App.css";
import CardListComponent from "./components/CardList";

const cards = [
  {
    question: "In what year did the first episode of The Simpsons air?",
    answer: "1989",
  },
  {
    question: "What's the name of the Simpsons' pet dog?",
    answer: "Santa's Little Helper",
  },
  {
    question: "Who composed The Simpsons' theme song?",
    answer: "Danny Elfman",
  },
  {
    question: "What is Homer's job?",
    answer: "Nuclear Safety Inspector",
  },
  {
    question: "Which member of the Simpsons family is a vegetarian?",
    answer: "Lisa",
  },
  {
    question: "How many children do Apu and Manjula have?",
    answer: "8",
  },
  {
    question: "What's Mr Burns' catchphrase?",
    answer: "Excellent",
  },
  {
    question: "Which Simpsons kid starred in the short Playdate with Destiny?",
    answer: "Maggie",
  },
  {
    question: "What is Homer's full name?",
    answer: "Homer Jay Simpson",
  },
  {
    question:
      "What's the name of the retirement home where Homer's father, Abraham Simpson, lives?",
    answer: "Springfield Retirement Castle",
  },
];

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>Simpsons Trivia</h1>
        <h2>Test Your Knowledge of The Simpsons</h2>
        <p>Total number of flashcards: {cards.length}</p>
      </div>
      <CardListComponent cards={cards} />
    </div>
  );
};

export default App;
