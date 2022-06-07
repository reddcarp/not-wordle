import React from "react";
import logo from "./assets/logo.svg";
import NotWordle from "./components/NotWordle";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <NotWordle />
      </header>
    </div>
  );
}

export default App;
