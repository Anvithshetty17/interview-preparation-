import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Joke from "./components/Joke";
import CriticalQuiz from "./components/CriticalQuiz";

import FunFacts from "./components/FunFacts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/joke" element={<Joke />} />
      
        <Route path="/fact" element={<FunFacts />} />
        <Route path="/critical-quiz" element={<CriticalQuiz />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
