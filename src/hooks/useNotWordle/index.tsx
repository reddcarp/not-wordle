import { useState } from "react";
import { toast } from "react-toastify";
import { GuessType } from "../../interfaces";
import helpFormatGuess from "./helpFormatGuess";

const useNotWordle = (solution: string) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses]: [GuessType[], any] = useState([]); // (array of array)
  const [history, setHistory]: [string[], any] = useState([]); //used to check that the user didn't send the same guess (array of strings)
  const [isCorrect, setIsCorrect] = useState(false);

  // format guess into array of letter objects
  const formatGuess = () => {
    let formatedGuess = helpFormatGuess(currentGuess, solution);
    return formatedGuess;
  };

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
    } else if (event.key === "Enter") {
      // only add guess if turn less than 6
      if (turn > 5) {
        toast.info("no guess left");
        return;
      }
      // only add guess if 5 char long
      if (currentGuess.length !== 5) {
        toast.warn("word must be 5 characters long!");
        return;
      }
      // no duplicate words
      if (history.includes(currentGuess)) {
        toast.info("word already used");
        return;
      }

      formatGuess();
    } else if (event.key === "Backspace") {
      // remove last character from current guess
      setCurrentGuess((prev) => prev.slice(0, prev.length - 1));
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useNotWordle;
