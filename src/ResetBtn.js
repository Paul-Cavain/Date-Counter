const ResetBtn = ({ step, counter, handleReset }) => {
  return (
    <div>
      {counter !== 0 || step !== 1 ? (
        <button
          type="reset"
          onClick={handleReset}
          className="mt-4 border-black border-2 w-fit px-4 py-1"
        >
          Reset
        </button>
      ) : null}
    </div>
  );
};
export default ResetBtn;
