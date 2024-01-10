const StepsView = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex justify-between w-full h-[60px] px-10 items-center bg-gray-200">
        <div className="flex gap-x-5">
          <button value={"content"}> 1 Content</button>
          <button value={"design"}> 2 Design</button>
        </div>
        <div>
          <button className="px-6 py-2 ml-2 text-white bg-blue-700 rounded-md">Back</button>
          <button className="px-6 py-2 ml-2 text-white bg-blue-700 rounded-md">Next</button>
        </div>
      </div>
    </>
  );
};

export default StepsView;
