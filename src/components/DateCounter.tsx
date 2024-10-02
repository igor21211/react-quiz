import { useReducer } from "react";

const reducer = (
  state: { count: number; step: number },
  action: { type: string; payload?: number }
) => {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "reset":
      return { count: 0, step: 1 };
    case "setCount":
      return { ...state, count: action.payload ?? 0 };
    case "setStep":
      return { ...state, step: action.payload ?? 1 };
    default:
      throw new Error("Action unknown");
  }
};

function DateCounter() {
  // const [count, setCount] = useState<number>(0);
  const initialState = { count: 0, step: 1 };

  const [state, dispatch] = useReducer(reducer, initialState);
  //const [step, setStep] = useState<number>(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    dispatch({ type: "dec", payload: -1 });
    // setCount((count) => count - 1);
    // setCount((count: number) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc", payload: +1 });
  };

  const defineCount = function (e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
    dispatch({ type: "setStep", payload: 1 });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
