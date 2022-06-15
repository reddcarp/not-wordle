import { useEffect, useState } from "react";

import db from "../../data/db.json";
import { LetterType, UsedKeysType } from "../../interfaces";
import KeyboardKey from "./KeyboardKey";

interface KeyboardProps {
  usedKeys: UsedKeysType;
}

function Keyboard({ usedKeys }: KeyboardProps) {
  const [keys, setKeys]: [LetterType[][], any] = useState([]);

  // initializing the first solution
  useEffect(() => {
    setKeys(
      db.keyboard.rows.map((row) =>
        row.map((letter) => {
          return { key: letter.key, state: usedKeys[letter.key] };
        })
      )
    );
  }, [setKeys, usedKeys]);

  return (
    <div className="keyboard">
      {keys.map((row) => {
        return (
          <div className="keyboard-row">
            {row.map((letter) => (
              <KeyboardKey
                key={letter.key}
                letterKey={letter.key}
                state={letter.state}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
