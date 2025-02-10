import React, { useState, useEffect } from "react";
import "../styles/Quiz.css";

const Quiz = () => {
  const [question, setQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [topic, setTopic] = useState("Computer");

  const fetchQuestion = async () => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=1&category=18&type=multiple`
    );
    const data = await response.json();
    setQuestion(data.results[0]);
    setUserAnswer(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    setIsCorrect(answer === question.correct_answer);
  };

  return (
    <div className="quiz-container">
      <h2>📚 {topic} Quiz</h2>
      {question && (
        <div>
          <h3 className="question">{question.question}</h3>
          <div className="options-container">
            {[...question.incorrect_answers, question.correct_answer]
              .sort()
              .map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${
                    userAnswer ? (option === question.correct_answer ? "correct" : "wrong") : ""
                  }`}
                  onClick={() => handleAnswer(option)}
                  disabled={userAnswer}
                >
                  {option}
                </button>
              ))}
          </div>
          {userAnswer && (
            <button className="next-btn" onClick={fetchQuestion}>Next Question</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
