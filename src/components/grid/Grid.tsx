import { GuessType } from "../../interfaces";
import "../../styles/Grid.css";
import Row from "./Row";

interface GridProps {
  currentGuess: string;
  guesses: GuessType[];
  turn: number;
  isCorrect: boolean;
}

function Grid({ currentGuess, guesses, turn, isCorrect }: GridProps) {
  return (
    <div className="Grid">
      {guesses.map((guess, index) => {
        if (index === turn) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return (
          <Row
            extraAnimation={isCorrect && index === turn - 1 ? "wave" : ""}
            key={index}
            guess={guess}
          />
        );
      })}
    </div>
  );
}

export default Grid;
