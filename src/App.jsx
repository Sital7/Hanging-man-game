import React, { useState, useEffect } from "react";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import Figure from "./components/Figure";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import "./styles.css";

const words = ["REACT", "JAVASCRIPT", "DEVELOPER", "PROGRAMMING"];
const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

const App = () => {
  const [word, setWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleLetterClick = (letter) => {
    if (guessedLetters.includes(letter)) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 1000);
      return;
    }

    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setMistakes(mistakes + 1);
    }
  };

  useEffect(() => {
    if (mistakes >= 6) {
      setGameOver(true);
    } else if (word.split("").every((letter) => guessedLetters.includes(letter))) {
      setGameOver(true);
      setWon(true);
    }
  }, [guessedLetters, mistakes]);

  const restartGame = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setMistakes(0);
    setGameOver(false);
    setWon(false);
  };

  return (
    <div className="container">
      <h1>Hangman Game</h1>
      <Figure mistakes={mistakes} />
      <HangmanWord word={word} guessedLetters={guessedLetters} />
      <Keyboard onLetterClick={handleLetterClick} guessedLetters={guessedLetters} />
      <Popup gameOver={gameOver} won={won} onRestart={restartGame} />
      <Notification show={showNotification} />
    </div>
  );
};

export default App;
