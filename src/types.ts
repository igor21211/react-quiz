export interface State {
  numQuestions: number;
  questions: Question[];
  status: "loading" | "ready" | "error" | "active" | "finished";
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number | null;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

export type Action =
  | { type: "dataReceived"; payload: Question[] }
  | { type: "dataFailed" }
  | { type: "start" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" }
  | { type: "finish" }
  | { type: "restart" }
  | { type: "tick" };
