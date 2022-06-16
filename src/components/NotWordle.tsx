import { useEffect, useState } from "react";

import useNotWordle from "../hooks/useNotWordle";
import Grid from "./grid/Grid";
import Keyboard from "./keyboard";
import Modal from "./modal";

interface NotWordleProps {
  solution: string;
}

function NotWordle({ solution }: NotWordleProps) {
  const { currentGuess, handleKeyup, turn, isCorrect, guesses, usedKeys } =
    useNotWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    // game end condition
    if (isCorrect || turn > 5) {
      setTimeout(() => setShowModal(true), 3500);
      window.removeEventListener("keyup", handleKeyup);
    }

    // prevents multiple event lister
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <div id="game" style={{ display: "flex", flexDirection: "column" }}>
      {showModal && (
        <Modal isCorrect={isCorrect} solution={solution} turn={turn} />
      )}
      <div id="board-container">
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      </div>
      <div id="game-keyboard">
        <Keyboard usedKeys={usedKeys} />
      </div>
    </div>
  );
}

export default NotWordle;
