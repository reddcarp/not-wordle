import { Component } from "react";
import { GuessType } from "../../interfaces";
import "../../styles/Grid.css";
import Row from "./Row";

interface GridProps {
  currentGuess: string;
  guesses: GuessType[];
  turn: number;
}

function Grid({ currentGuess, guesses, turn }: GridProps) {
  return (
    <div className="Grid">
      {guesses.map((guess, index) => (
        <Row key={index} guess={guess} />
      ))}
    </div>
  );
}

export default Grid;
