import { StateType } from "../../interfaces";
import "../../styles/Grid.css";

interface SquareProps {
  letterKey?: string;
  state?: StateType;
  animationType?: "delay" | "instant";
  extraAnimation?: string;
}

function Square({
  letterKey,
  state = "empty",
  animationType = "instant",
  extraAnimation,
}: SquareProps) {
  if (!letterKey) {
    return <div className="Square">‎</div>;
  }

  return (
    <div
      id={"square-" + state}
      animation-type={extraAnimation}
      className={"Square " + animationType}
    >
      {letterKey}
    </div>
  );
}

export default Square;
