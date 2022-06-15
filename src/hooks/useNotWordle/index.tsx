import { useState } from "react";
import { toast } from "react-toastify";
import { GuessType, StateType, UsedKeysType } from "../../interfaces";
import helpFormatGuess from "./helpFormatGuess";

const useNotWordle = (solution: string) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses]: [GuessType[], any] = useState([...Array(6)]); // (array of array)
  const [history, setHistory]: [string[], any] = useState([]); //used to check that the user didn't send the same guess (array of strings)
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys]: [UsedKeysType, any] = useState({});

  // format guess into array of letter objects
  const formatGuess = () => {
    const formattedGuess = helpFormatGuess(currentGuess, solution);
    return formattedGuess;
  };

  // adds guess to the guesses state
  // increment turn by one
  // set isCorrect to true if guess is correct
  // update history
  const addGuess = (formattedGuess: GuessType) => {
    setGuesses((previousGuesses: GuessType[]) => {
      /* We are creating a new array from the previous one
       * so it is more obvious that the state changed
       * (as the address of the array is a new one)
       * helping for re render condition
       */
      let newGuesses = [...previousGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setTurn((prev) => prev + 1);
    setIsCorrect(currentGuess === solution);
    setHistory((prev: string[]) => [...prev, currentGuess]);
    setCurrentGuess("");
    setUsedKeys((prev: any) => {
      let newKeys = { ...prev };

      formattedGuess.letters.forEach((letter) => {
        const currentLetterState: StateType = newKeys[letter.key];
        if (currentLetterState === "correct") {
          return;
        }
        if (currentLetterState === "present") {
          if (letter.state === "correct") {
            newKeys[letter.key] = letter.state;
          }
          return;
        }
        newKeys[letter.key] = letter.state;
        return;
      });

      return newKeys;
    });
  };

  // handle keydown event
  // if Enter, add the new guess
  const handleKeyup = (event: KeyboardEvent) => {
    if (isCorrect) return;

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

      const formattedGuess = formatGuess();
      addGuess(formattedGuess);
    } else if (event.key === "Backspace") {
      // remove last character from current guess
      setCurrentGuess((prev) => prev.slice(0, prev.length - 1));
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys };
};

export default useNotWordle;
