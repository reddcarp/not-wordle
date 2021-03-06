import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NotWordle from "./components/NotWordle";
import "./styles/App.css";
import { default as db } from "./data/db.json";

function App() {
  const [solution, setSolution] = useState("");

  // initializing the first solution
  useEffect(() => {
    // 1 not included in Math.random so Math.floor < db.solution.length
    const randomIndex = Math.floor(Math.random() * db.solutions.length);
    setSolution(db.solutions[randomIndex]);
  }, [setSolution]);

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={800}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={false}
        pauseOnFocusLoss={false}
      />
      <div className="header">Not Wordle</div>
      {solution && <NotWordle solution={solution} />}
    </div>
  );
}

export default App;
