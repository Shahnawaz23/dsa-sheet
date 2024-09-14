import React from "react";
import ProblemList from "./ProblemList";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h2 className="title">Problems</h2>
        <ProblemList />
      </div>

    </div>
  );
};

export default Dashboard;
