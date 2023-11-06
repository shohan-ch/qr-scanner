const LocationInputContainer = () => {
  return (
    <>
      <div>
        <input
          type="radio"
          name="locationButtonInput"
          value={"complete"}
          className="appearance-none sr-only peer"
          id="radio1"
        />
        <label
          htmlFor="radio1"
          className="w-[100px] h-[50px] border-2 block peer-checked:border-red-400"
        >
          Complete
        </label>
      </div>

      <div>
        <input
          value={"url"}
          type="radio"
          name="locationButtonInput"
          className="appearance-none sr-only peer"
          id="radio2"
        />
        <label
          htmlFor="radio2"
          className="w-[100px] h-[50px] border-2 block peer-checked:border-red-400"
        >
          Url
        </label>
      </div>

      {/* <div>
        <input
          type="radio"
          name="locationButtonInput"
          classNameName="appearance-none"
        />
        <label
          htmlFor="locationButtonInput"
          classNameName="w-[100px] h-[50px] border border-red-400 block "
        ></label>
      </div>

      <div>
        <input
          type="radio"
          name="locationButtonInput"
          classNameName="appearance-none"
        />
        <label
          htmlFor="locationButtonInput"
          classNameName="w-[100px] h-[50px] border border-red-400 block "
        ></label>
      </div>  */}
    </>
  );
};

export default LocationInputContainer;
