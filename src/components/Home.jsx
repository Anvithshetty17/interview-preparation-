import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-options">
        <h1>Welcome to Prepify!</h1>
        <p>Choose an option to get started:</p>

        <div className="options-grid">
          <Link to="/quiz">
            <button className="option-btn">📚 Take a Quiz</button>
          </Link>
          <Link to="/joke">
            <button className="option-btn">😂 See a Joke</button>
          </Link>
          <Link to="/fact">
            <button className="option-btn">🎉 Fun Fact</button>
          </Link>
          <Link to="/critical-quiz">
            <button className="option-btn">🧠 Critical Thinking Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
