import { useState } from "react";
import ButtonRadio from "../Forms/ButtonRadio";
import SelectField from "../Forms/SelectField";
import CompleteLocationField from "./CompleteLocationField";
import UrlLocationField from "./UrlLocationField";

const LocationInputContainer = () => {
  const [locationType, setLocationType] = useState("");
  const buttonRadioValues = ["complete", "url"];

  return (
    <>
      <div className="flex justify-between px-2 mt-4 gap-x-5">
        {buttonRadioValues &&
          buttonRadioValues.map((value, index) => (
            <ButtonRadio
              key={index}
              label={value}
              value={value}
              groupName="locationButtonInput"
              handleChange={(e) => setLocationType(e.target.value)}
            />
          ))}
      </div>
      {locationType == "complete" ? (
        <CompleteLocationField />
      ) : (
        <UrlLocationField />
      )}
    </>
  );
};

export default LocationInputContainer;
