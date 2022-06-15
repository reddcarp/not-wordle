import { StateType } from "../../interfaces";
import "../../styles/Keyboard.css";
import { ReactComponent as BackspaceSvg } from "../../assets/backspace.svg";

interface KeyboardKeyProps {
  letterKey: string;
  state: StateType;
}

function KeyboardKey({ letterKey, state }: KeyboardKeyProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log("pressed = " + letterKey);
    window.dispatchEvent(new KeyboardEvent("keyup", { key: letterKey }));
  }

  // Special keys aka: "enter" / "delete"
  if (letterKey.length !== 1) {
    if (letterKey.includes("half-divider")) {
      return <div id="half-divider"></div>;
    }
    if (letterKey === "Backspace") {
      return (
        <button
          onClick={handleClick}
          data-state={state}
          id="special-key"
          className="key"
        >
          <BackspaceSvg />
        </button>
      );
    }
    return (
      <button
        onClick={handleClick}
        data-state={state}
        id="special-key"
        className="key"
      >
        {letterKey}
      </button>
    );
  }
  return (
    <button onClick={handleClick} data-state={state} className="key">
      {letterKey}
    </button>
  );
}

export default KeyboardKey;
