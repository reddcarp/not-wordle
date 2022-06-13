import React, { useEffect } from "react";
import useNotWordle from "../hooks/useNotWordle";

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
    <div>
      <div>Guess - {currentGuess}</div>
      <div>Turn - {turn}</div>
      <div>isCorrect - {isCorrect ? "true" : "false"}</div>
    </div>
  );
}

export default NotWordle;
