import { Action } from "../types";
import React, { Dispatch } from "react";
interface FinishPageProps {
  points: number;
  maxPoints: number;
  highscore: number;
  dispatch: Dispatch<Action>;
}

const FinishPage = ({
  points,
  maxPoints,
  highscore,
  dispatch,
}: FinishPageProps) => {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishPage;
