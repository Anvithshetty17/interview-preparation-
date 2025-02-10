import React, { useState } from "react";
import "../styles/CriticalQuiz.css";
import { criticalQuestions } from "./questions";


const CriticalQuiz = () => {
  const [questionIndex, setQuestionIndex] = useState(Math.floor(Math.random() * criticalQuestions.length));
  const [userAnswer, setUserAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  const fetchQuestion = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * criticalQuestions.length);
    } while (randomIndex === questionIndex);

    setQuestionIndex(randomIndex);
    setUserAnswer(null);
    setIsCorrect(null);
  };

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    setIsCorrect(answer === criticalQuestions[questionIndex].correctAnswer);
  };

  return (
    <div className="critical-quiz-container">
      <h2>🧠 Critical Thinking Quiz</h2>

      

      {showAddQuestion ? (
        <AddQuestion onClose={() => setShowAddQuestion(false)} />
      ) : (
        <>
          <h3 className="question">{criticalQuestions[questionIndex].question}</h3>
          <div className="options-container">
            {criticalQuestions[questionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${userAnswer ? (option === criticalQuestions[questionIndex].correctAnswer ? "correct" : "wrong") : ""}`}
                onClick={() => handleAnswer(option)}
                disabled={userAnswer}
              >
                {option}
              </button>
            ))}
          </div>
          {userAnswer && (
            <>
              <p className="explanation">💡 Explanation: {criticalQuestions[questionIndex].explanation}</p>
              <button className="next-btn" onClick={fetchQuestion}>Next Question</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CriticalQuiz;
