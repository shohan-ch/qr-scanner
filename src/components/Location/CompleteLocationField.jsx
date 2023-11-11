import InputField from "../Forms/InputField";
import SelectField from "../Forms/SelectField";
import Button from "../Utils/Button";
import data from "../../data/LocationData.json";
import { useState } from "react";

const CompletelocationsField = () => {
  const [locations, setlocations] = useState("");
  const [selectField, setSelectField] = useState(null);
  const handlelocationsChange = (e) => {
    setlocations(
      data.filter((location, index) => location.street.match(e.target.value))
    );
  };

  const handleSeleclocations = (street) => () => {
    setlocations(locations.find((item) => item.street == street));
  };

  console.log(locations);
  return (
    <>
      <div className="container px-2 mt-4">
        <div className="flex gap-x-3">
          <InputField
            handleChange={handlelocationsChange}
            placeholder="State / Province"
            name="name"
            className="w-full bg-white rounded-2xl"
          />
          <Button className="mt-2 text-[13px]  w-[250px] h-[40px]">
            {" "}
            Delete address{" "}
          </Button>
        </div>

        {locations.length > 1 && (
          <div className="relative px-1 py-2 mt-3 bg-white border shadow-md locationsList">
            {locations.length > 1 &&
              locations.map((location, index) => (
                <button
                  value={location.street}
                  onClick={handleSeleclocations(location.street)}
                  className="block w-full px-2 py-2 mb-0 text-left rounded hover:bg-gray-100"
                >
                  {location.street.toUpperCase()}
                </button>
              ))}
          </div>
        )}

        <SelectField
          values={["show map", "hide link", "show link"]}
          handleChange={(e) => console.log(e.target.value)}
          label="locations options"
          className="bg-white"
          name="mapShowOption"
        />

        <div className="flex justify-between gap-x-3">
          <InputField
            placeholder="Street"
            name="name"
            className="bg-white rounded-2xl"
            value={locations.street}
          />
          <InputField
            placeholder="Number"
            name="name"
            className="bg-white rounded-2xl"
            value={locations.number}
          />
          <InputField
            placeholder="Postal code"
            name="name"
            className="bg-white rounded-2xl"
            value={locations.postalCode}
          />
        </div>

        <div className="flex justify-between mt-3 gap-x-3">
          <InputField
            placeholder="City"
            name="name"
            className="w-1/2 bg-white rounded-2xl"
            value={locations.city}
          />
          <InputField
            placeholder="State / Province"
            name="name"
            className="w-1/2 bg-white rounded-2xl"
            value={locations.state}
          />
        </div>
        <InputField
          placeholder="State / Province"
          name="name"
          className="w-full bg-white rounded-2xl"
          value={locations.country}
        />
      </div>
    </>
  );
};

export default CompletelocationsField;
