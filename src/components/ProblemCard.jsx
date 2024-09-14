import React from "react";
import "./ProblemCard.css";

const ProblemCard = ({ problem}) => {
  return (
    <div className="problem-card">
      <h3>{problem.title}</h3>
      <p>Difficulty: {problem.difficulty}</p>
      <a href={problem.link} target="_blank">solve</a>
    </div>
  );
};

export default ProblemCard;
