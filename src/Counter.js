const Counter = ({
  counter,
  setCounter,
  handleCounterAdd,
  handleCounterMinus,
}) => {
  return (
    <form className="flex flex-row justify-center items-center mt-4">
      <button
        type="button"
        className="flex justify-center items-center py-1 px-4 bg-gray-100 border-2 border-black rounded-sm text-xl font-bold"
        onClick={handleCounterMinus}
      >
        -
      </button>
      <input
        type="text"
        className="p-1.5 border-2 border-black"
        value={counter}
        onChange={(e) => setCounter(Number(e.target.value))}
      />
      <button
        type="button"
        className="flex justify-center items-center py-1 px-4 bg-gray-100 border-2 border-black rounded-sm text-xl font-bold"
        onClick={handleCounterAdd}
      >
        +
      </button>
    </form>
  );
};
export default Counter;
