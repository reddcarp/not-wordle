import React, { useEffect } from "react";
import useNotWordle from "../hooks/useNotWordle";

function NotWordle() {
  var solution = "apple";
  const { currentGuess, handleKeyup } = useNotWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    // prevents multiple event lister
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return (
    <div>
      <div>Guess - {currentGuess}</div>
    </div>
  );
}

export default NotWordle;
