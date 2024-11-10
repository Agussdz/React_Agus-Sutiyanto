import React from "react";
import Chatbot from "./components/Chatbot";
import "./index.css";
import PlantsHelper from "./components/PlantsHelper";

const App = () => {
  return (
    <div>
      <Chatbot />
      <PlantsHelper />
    </div>
  );
};

export default App;
