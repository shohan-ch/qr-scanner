import ButtonRadio from "../Forms/ButtonRadio";
import SelectField from "../Forms/SelectField";

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

      <SelectField
        values={["show map", "hide link", "show link"]}
        handleChange={(e) => console.log(e.target.value)}
        label="Location options"
        className="bg-white"
        name="mapShowOption"
      />
    </>
  );
};

export default LocationInputContainer;
