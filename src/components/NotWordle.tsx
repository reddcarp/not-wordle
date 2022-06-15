import { useEffect } from "react";

import useNotWordle from "../hooks/useNotWordle";
import Grid from "./grid/Grid";
import Keyboard from "./keyboard";

interface NotWordleProps {
  solution: string;
}

function NotWordle({ solution }: NotWordleProps) {
  const { currentGuess, handleKeyup, turn, isCorrect, guesses } =
    useNotWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    // prevents multiple event lister
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return (
    <div id="game" style={{ display: "flex", flexDirection: "column" }}>
      <div id="board-container">
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      </div>
      <div id="game-keyboard">
        <Keyboard />
      </div>
    </div>
  );
}

export default NotWordle;
