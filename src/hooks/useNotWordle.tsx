import { useState } from "react";

const useNotWordle = (solution: string) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // (array of array)
  const [history, setHistory]: [string[], any] = useState([]); //used to check that the user didn't send the same guess (array of strings)
  const [isCorrect, setIsCorrect] = useState(false);

  // format guess into array of letter objects
  const formatGuess = (guess: string) => {};

  // adds guess to the guesses state
  const addGuess = () => {};

  // handle keydown event
  // if Enter, add the new guess
  const handleKeyup = (event: KeyboardEvent) => {
    // only alphabet characters
    if (event.key.length === 1 && /[a-zA-Z]/.test(event.key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + event.key.toLowerCase());
      }
    } else if (event.key == "Enter") {
      // only add guess if turn less than 6
      if (turn >= 6) {
        console.log("no guess left");
        return;
      }
      // only add guess if 5 char long
      if (currentGuess.length !== 5) {
        console.log("word must be 5 characters long");
        return;
      }
      // no duplicate words
      if (history.includes(currentGuess)) {
        console.log("word already used");
        return;
      }

      formatGuess(currentGuess);
    } else if (event.key == "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, prev.length - 1));
    }

    return;
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useNotWordle;
