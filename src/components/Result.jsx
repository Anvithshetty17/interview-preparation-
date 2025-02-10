import React from "react";
import { Link } from "react-router-dom";
import "../styles/Result.css";

const Result = ({ score }) => {
  return (
    <div className="result-container">
      <h1>Quiz Completed!</h1>
      <p className="result-score">Your Score: {score}</p>
      <Link to="/quiz">
        <button className="play-again-btn">Play Again</button>
      </Link>
    </div>
  );
};

export default Result;
