import React, { useState, useEffect } from "react";
import "../styles/FunFacts.css";

const FunFacts = () => {
  const [fact, setFact] = useState("Loading fun fact...");

  const fetchFunFact = async () => {
    try {
      const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
      const data = await response.json();
      setFact(data.text);
    } catch (error) {
      console.error("Error fetching fun fact:", error);
      setFact("Did you know? The first programmer was Ada Lovelace!");
    }
  };

  useEffect(() => {
    fetchFunFact();
  }, []);

  return (
    <div className="funfact-container">
      <h2>🤔 Did You Know?</h2>
      <p className="funfact-text">{fact}</p>
      <button className="next-btn" onClick={fetchFunFact}>Next Fact</button>
    </div>
  );
};

export default FunFacts;
