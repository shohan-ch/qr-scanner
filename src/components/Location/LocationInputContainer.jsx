const LocationInputContainer = () => {
  return (
    <>
      <div className="flex justify-center mt-4 gap-x-5">
        <div>
          <input
            type="radio"
            name="locationButtonInput"
            value={"complete"}
            className="appearance-none peer"
            id="radio1"
          />
          <label
            htmlFor="radio1"
            className="p-5 w-[400px] text-center border-2 block peer-checked:border-blue-600 peer-checked:rounded-md"
          >
            Complete
          </label>
        </div>

        <div>
          <input
            value={"url"}
            type="radio"
            name="locationButtonInput"
            className="appearance-none peer"
            id="radio2"
          />
          <label
            htmlFor="radio2"
            className="p-5 w-[400px] text-center border-2 block peer-checked:border-blue-600 peer-checked:rounded-md"
          >
            Url
          </label>
        </div>
      </div>
    </>
  );
};

export default LocationInputContainer;
