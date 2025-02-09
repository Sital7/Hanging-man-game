import React from "react";

const Popup = ({ gameOver, won, onRestart }) => {
  return (
    gameOver && (
      <div className="popup">
        <h2>{won ? "You Won! 🎉" : "You Lost 😢"}</h2>
        <button onClick={onRestart}>Restart</button>
      </div>
    )
  );
};

export default Popup;
