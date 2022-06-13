import { Component } from "react";
import { LetterType, StateType } from "../../interfaces";
import "../../styles/Grid.css";

interface SquareProps {
  letterKey?: string;
  state?: StateType;
}

function Square({ letterKey, state = "empty" }: SquareProps) {
  if (!letterKey) {
    return <div className="Square">‎</div>;
  }

  return (
    <div id={"square-" + state} className={"Square"}>
      {letterKey}
    </div>
  );
}

export default Square;
