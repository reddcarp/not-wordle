import { Component } from "react";
import { GuessType } from "../../interfaces";
import "../../styles/Grid.css";
import Square from "./Square";

interface RowProps {
  guess: GuessType;
}

function Row({ guess }: RowProps) {
  if (guess) {
    return (
      <div className="Row">
        {guess.letters.map((letter, index) => {
          return (
            <Square key={index} letterKey={letter.key} state={letter.state} />
          );
        })}
      </div>
    );
  }

  return (
    <div className="Row">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

export default Row;
