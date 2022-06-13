import { Component } from "react";
import { GuessType } from "../../interfaces";
import "../../styles/Grid.css";
import Square from "./Square";

interface RowProps {
  guess?: GuessType;
  currentGuess?: string;
}

function Row({ guess, currentGuess }: RowProps) {
  if (guess) {
    return (
      <div className="Row previous-guess">
        {guess.letters.map((letter, index) => {
          return (
            <Square key={index} letterKey={letter.key} state={letter.state} />
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    const charArray = [...currentGuess];

    return (
      <div className="Row">
        {charArray.map((char, index) => (
          <Square key={index} letterKey={char} />
        ))}
        {[...Array(5 - charArray.length)].map((_, index) => (
          <Square key={index} />
        ))}
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
