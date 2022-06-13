import { Component } from "react";
import { LetterType, StateType } from "../../interfaces";
import "../../styles/Grid.css";

interface SquareProps {
  letterKey?: string;
  state?: StateType;
  animationType?: "delay" | "instant";
}

function Square({ letterKey, state = "empty", animationType }: SquareProps) {
  if (!letterKey) {
    return <div className="Square">‎</div>;
  }

  return (
    <div id={"square-" + state} className={"Square " + animationType}>
      {letterKey}
    </div>
  );
}

export default Square;
