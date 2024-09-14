import React, { useState } from "react";
import ProblemCard from "./ProblemCard";
import "./ProblemList.css";
import problems from "../data/problemData.js"

console.log("problems==>", problems);


const ProblemList = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredProblems =
    filter === "All"
      ? problems
      : problems.filter((problem) => problem.difficulty === filter);

  return (
    <div className="problem-list-container">
      <div className="filter-container">
        <label htmlFor="difficulty-filter">Filter by difficulty: </label>
        <select
          id="difficulty-filter"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className="problem-list">
        {filteredProblems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} link={problem.link} />
        ))}
      </div>
    </div>
  );
};

export default ProblemList;
