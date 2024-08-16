import React from "react";

const Disclaimer = ({ onProceed }) => {
  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-content">
        <h2>Welcome to DataForge (RTK)</h2>

        <p>
          Explore the power of effortless data management! Our app is a sleek
          React-based CRUD system that lets you add, update, search, and filter
          with ease.
        </p>
        <p>
          Imagine using this in real-world scenarios like recruitment, CRM,
          event planning, or healthcare. Dive in and see how DataForge can
          streamline your tasks!
        </p>
        <p>
          Note: The data here is just for demo purposes, so feel free to
          experiment and explore.
        </p>

        <button onClick={onProceed}>Proceed</button>
      </div>
    </div>
  );
};

export default Disclaimer;
