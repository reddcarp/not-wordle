import { StateType } from "../../interfaces";

interface KeyboardKeyProps {
  key: string;
  state: StateType;
}

function KeyboardKey({ key, state }: KeyboardKeyProps) {
  return (
    <button id={"key-" + state} className="key">
      {key}
    </button>
  );
}

export default KeyboardKey;
