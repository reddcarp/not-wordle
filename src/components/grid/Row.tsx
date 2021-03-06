import { GuessType } from "../../interfaces";
import "../../styles/Grid.css";
import Square from "./Square";

interface RowProps {
  guess?: GuessType;
  currentGuess?: string;
  extraAnimation?: string;
}

function Row({ guess, currentGuess, extraAnimation }: RowProps) {
  if (guess) {
    return (
      <div className="Row">
        {guess.letters.map((letter, index) => {
          return (
            <Square
              extraAnimation={extraAnimation}
              animationType="delay"
              key={index}
              letterKey={letter.key}
              state={letter.state}
            />
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
