const Message = ({ formatDate, counter }) => {
  return (
    <div className="pt-4 font-medium text-center">
      <p>
        {counter === 0
          ? "Today is"
          : `${counter} ${
              counter < 0 ? "days before today was " : "days from today is"
            }`}{" "}
        {formatDate}
      </p>
    </div>
  );
};
export default Message;
