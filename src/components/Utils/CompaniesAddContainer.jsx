import InputField from "../Forms/InputField";
import Button from "./Button";

const CompaniesAddContainer = () => {
  return (
    <>
      <div className="mx-2 mt-5">
        <h2>Company count</h2>
        <InputField
          name="company"
          placeholder="Company Name"
          className="bg-white"
        />
        <div className="px-2 py-5 mt-4 bg-gray-100">
          <h2>Profession</h2>

          <InputField
            name="profession"
            className="bg-white"
            placeholder="Name"
          />
          <hr className="mt-5 mb-0 divide-x" />
          <Button>Add profession</Button>
        </div>
      </div>
      <div className="px-2">
        <Button>Add Company</Button>
      </div>
    </>
  );
};

export default CompaniesAddContainer;
