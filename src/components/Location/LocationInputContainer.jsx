import ButtonRadio from "../Forms/ButtonRadio";

const LocationInputContainer = () => {
  const buttonRadioValues = ["complete", "url"];

  return (
    <>
      <div className="flex justify-center mt-4 gap-x-5">
        {buttonRadioValues &&
          buttonRadioValues.map((value, index) => (
            <ButtonRadio
              key={index}
              label={value}
              value={value}
              groupName="locationButtonInput"
              handleChange={(e) => console.log(e.target.value)}
            />
          ))}
      </div>
    </>
  );
};

export default LocationInputContainer;
