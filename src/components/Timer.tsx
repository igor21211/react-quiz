import React, { Dispatch, useEffect } from "react";
import { Action } from "../types";

interface TimerProps {
  dispatch: Dispatch<Action>;
  secondsRemaining: number | null;
}

const Timer = ({ dispatch, secondsRemaining }: TimerProps) => {
  const minutes = Math.floor(secondsRemaining! / 60);
  const seconds = secondsRemaining! % 60;
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="timer">
      {minutes}:{seconds.toFixed(0).padStart(2, "0")}
    </div>
  );
};

export default Timer;
