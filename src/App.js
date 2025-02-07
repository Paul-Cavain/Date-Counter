import { useState } from "react";
import Counter from "./Counter";
import Message from "./Message";
import Step from "./Step";
import ResetBtn from "./ResetBtn";

function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  const date = new Date();
  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + counter);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formatDate = nextDate.toLocaleDateString("en-US", options);

  const handleCounterAdd = (e) => {
    setCounter((currentCounter) => currentCounter + step);
  };
  const handleCounterMinus = (e) => {
    setCounter((currentCounter) => currentCounter - step);
  };

  const handleReset = () => {
    setStep(1);
    setCounter(0);
  };

  console.log(date);
  return (
    <div className="App flex flex-col justify-center items-center min-h-screen gap-y-2">
      <Step step={step} setStep={setStep} />
      <Counter
        counter={counter}
        setCounter={setCounter}
        handleCounterAdd={handleCounterAdd}
        handleCounterMinus={handleCounterMinus}
      />
      <Message
        step={step}
        counter={counter}
        formatDate={formatDate}
        handleReset={handleReset}
      />
      <ResetBtn step={step} counter={counter} handleReset={handleReset} />
    </div>
  );
}
export default App;
