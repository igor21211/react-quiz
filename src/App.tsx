import { Reducer, useEffect, useReducer } from "react";
import "./App.css";
import DateCounter from "./components/DateCounter";
import Header from "./components/Header";
import { Main } from "./components/Main";
import { reducer } from "./reducer";
import { Action, State } from "./types";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { StartScreen } from "./components/StartScreen";
import { Question } from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishPage from "./components/FinishPage";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
const initialState: State = {
  numQuestions: 0,
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function App() {
  const [
    {
      questions,
      status,
      numQuestions,
      index,
      answer,
      points,
      highscore,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer<Reducer<State, Action>>(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishPage
            points={points}
            maxPoints={maxPoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
