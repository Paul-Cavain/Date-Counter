const Step = ({ step, setStep }) => {
  return (
    <form className="flex flex-row gap-7 justify-center items-center w-full">
      <input
        type="range"
        min={0}
        max={10}
        className="w-fit px-14"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <p>{step}</p>
    </form>
  );
};
export default Step;
