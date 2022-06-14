import { useEffect, useState } from "react";

import db from "../../data/db.json";
import { LetterType } from "../../interfaces";
import KeyboardKey from "./KeyboardKey";

function Keyboard() {
  const [keys, setKeys]: [LetterType[][], any] = useState([]);

  // initializing the first solution
  useEffect(() => {
    setKeys(
      db.keyboard.rows.map((row) =>
        row.map((letter) => {
          return { key: letter.key, state: "empty" };
        })
      )
    );
  }, [setKeys]);

  console.log(keys);

  return (
    <div className="keyboard">
      {keys.map((row) => {
        return (
          <div className="keyboard-row">
            {row.map((letter) => (
              <KeyboardKey key={letter.key} state={letter.state} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
