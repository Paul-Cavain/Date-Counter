const Counter = ({ counter, handleCounterAdd, handleCounterMinus }) => {
  return (
    <div className="flex flex-row gap-3 justify-center items-center">
      <button
        type="button"
        className="flex justify-center items-center h-8 w-8 bg-gray-100 border-2 border-black rounded-sm"
        onClick={handleCounterMinus}
      >
        -
      </button>
      <p className="font-bold">Counter: {counter}</p>
      <button
        type="button"
        className="flex justify-center items-center p-3 size-8 bg-gray-100 border-2 border-black rounded-sm"
        onClick={handleCounterAdd}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
