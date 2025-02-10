import React, { useState, useEffect } from "react";
import "../styles/Joke.css";

const Joke = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await response.json();
    setJoke(data.joke);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="joke-container">
      <h2>😂 Enjoy a Random Joke!</h2>
      <p className="joke-text">{joke}</p>
      <button className="next-btn" onClick={fetchJoke}>Next Joke</button>
    </div>
  );
};

export default Joke;
