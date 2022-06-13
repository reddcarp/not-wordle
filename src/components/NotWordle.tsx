import { useEffect } from "react";
import useNotWordle from "../hooks/useNotWordle";
import Grid from "./grid/Grid";

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
    <div id="game" style={{}}>
      <div
        id="board-container"
        style={{
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>Turn - {turn}</div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      </div>
    </div>
  );
}

export default NotWordle;
