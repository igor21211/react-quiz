import React from "react";
import { Action } from "../types";
interface StartScreenProps {
  numQuestions: number;
  dispatch: React.Dispatch<Action>;
}

export const StartScreen = ({ numQuestions, dispatch }: StartScreenProps) => {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
};
