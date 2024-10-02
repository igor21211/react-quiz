import React from "react";
import { Action, Question as QuestionType } from "../types";
import Options from "./Options";

interface QuestionProps {
  question: QuestionType;
  dispatch: React.Dispatch<Action>;
  answer: number | null;
}

export const Question = ({ question, dispatch, answer }: QuestionProps) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};
