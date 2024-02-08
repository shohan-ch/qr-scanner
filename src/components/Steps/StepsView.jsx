const StepsView = (props) => {
  const { handleSlectSteps, step } = props;
  return (
    <>
      <div className="xs:hidden sm:flex max-w-7xl mx-auto  justify-between w-full h-[60px] px-10 items-center bg-gray-200">
        <div className="flex gap-x-5">
          <button
            value={"content"}
            onClick={() => handleSlectSteps(1)}
            className={`font-bold ${step == 1 && "text-blue-700"}`}
          >
            {" "}
            <span>1</span> Content
          </button>
          <button
            className={`font-bold ${step == 2 && "text-blue-700"}`}
            value={"design"}
            onClick={() => handleSlectSteps(2)}
          >
            {" "}
            2 Design
          </button>
        </div>
        <div>
          <button
            onClick={() => handleSlectSteps(1)}
            className="px-6 py-2 ml-2 text-white bg-blue-700 rounded-md"
          >
            Back
          </button>
          <button
            onClick={() => handleSlectSteps(2)}
            className="px-6 py-2 ml-2 text-white bg-blue-700 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default StepsView;
