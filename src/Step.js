const Step = ({ step, handleStepAdd, handleStepMinus }) => {
  return (
    <div className="flex flex-row gap-7 justify-center items-center">
      <button
        className="flex justify-center items-center h-8 w-8 bg-gray-100 border-2 border-black rounded-sm"
        onClick={handleStepMinus}
      >
        -
      </button>
      <p className="font-bold">Step: {step}</p>
      <button
        type="button"
        className="flex justify-center items-center p-3 size-8 bg-gray-100 border-2 border-black rounded-sm"
        onClick={handleStepAdd}
      >
        +
      </button>
    </div>
  );
};
export default Step;
