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
      {guesses.map((guess, index) => {
        if (index === turn) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return <Row key={index} guess={guess} />;
      })}
    </div>
  );
}

export default Grid;
