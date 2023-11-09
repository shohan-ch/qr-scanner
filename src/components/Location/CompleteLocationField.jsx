import InputField from "../Forms/InputField";
import SelectField from "../Forms/SelectField";
import Button from "../Utils/Button";

const CompleteLocationField = () => {
  return (
    <>
      <div className="container px-2 mt-4">
        <div className="flex gap-x-3">
          <InputField
            placeholder="State / Province"
            name="name"
            className="w-full bg-white rounded-2xl"
          />
          <Button className="mt-2 text-[13px]  w-[250px] h-[40px]">
            {" "}
            Delete address{" "}
          </Button>
        </div>
        <SelectField
          values={["show map", "hide link", "show link"]}
          handleChange={(e) => console.log(e.target.value)}
          label="Location options"
          className="bg-white"
          name="mapShowOption"
        />

        <div className="flex justify-between gap-x-3">
          <InputField
            placeholder="Street"
            name="name"
            className="bg-white rounded-2xl"
          />
          <InputField
            placeholder="Number"
            name="name"
            className="bg-white rounded-2xl"
          />
          <InputField
            placeholder="Postal code"
            name="name"
            className="bg-white rounded-2xl"
          />
        </div>

        <div className="flex justify-between mt-3 gap-x-3">
          <InputField
            placeholder="City"
            name="name"
            className="w-1/2 bg-white rounded-2xl"
          />
          <InputField
            placeholder="State / Province"
            name="name"
            className="w-1/2 bg-white rounded-2xl"
          />
        </div>
        <InputField
          placeholder="State / Province"
          name="name"
          className="w-full bg-white rounded-2xl"
        />
      </div>
    </>
  );
};

export default CompleteLocationField;
