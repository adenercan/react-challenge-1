import React from "react";

function Result({ score, onRestart, totalQuestions = 10, category = "HTML", icon = "/assets/images/icon-html.svg" }) {
  return (
    <div className="result-container">
      <div className="result-text">
        <h1 className="title-light">Quiz completed</h1>
        <h1 className="title-bold">You scored...</h1>
      </div>
      <div className="result-content">
        <div className="score-card">
          <div className="category-header">
            <img src={icon} alt={category} />
            <span>{category}</span>
          </div>
          
          <div className="score-display">
            <span className="final-score">{score}</span>
            <span className="total-score">out of {totalQuestions}</span>
          </div>
        </div>

        <button className="btn-primary" onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
}
// hello world
export default Result;

