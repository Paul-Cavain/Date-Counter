import { useState } from "react";
import Counter from "./Counter";
import Message from "./Message";
import Step from "./Step";

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

  const handleStepAdd = () => {
    setStep((currentStep) => currentStep + 1);
  };
  const handleStepMinus = () => {
    setStep((currentStep) => currentStep - 1);
  };
  const handleCounterAdd = () => {
    setCounter((currentCounter) => currentCounter + step);
  };
  const handleCounterMinus = () => {
    setCounter((currentCounter) => currentCounter - step);
  };

  console.log(date);
  return (
    <div className="App flex flex-col justify-center items-center min-h-screen gap-y-2">
      <Step
        step={step}
        handleStepAdd={handleStepAdd}
        handleStepMinus={handleStepMinus}
      />
      <Counter
        counter={counter}
        handleCounterAdd={handleCounterAdd}
        handleCounterMinus={handleCounterMinus}
      />
      <Message counter={counter} formatDate={formatDate} />
    </div>
  );
}
export default App;
