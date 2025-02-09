import React from "react";

const HangmanWord = ({ word, guessedLetters }) => {
  return (
    <div className="word">
      {word.split("").map((letter, index) => (
        <span key={index} className="letter">
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
