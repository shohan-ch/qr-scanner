import { useCallback, useState } from "react";
import { useFormField, useFormFieldDispatch } from "../Context/FormDataContext";
import InputField from "../Forms/InputField";
import SelectField from "../Forms/SelectField";
import TextArea from "../Forms/TextArea";
import LocationInputContainer from "../Location/LocationInputContainer";
import ImageUploadContainer from "../Utils/ImageUploadContainer";
import MultipleInputField from "../Utils/MultipleInputField";
import TelephoneAddView from "../Utils/TelephoneAddView";
import CompaniesAddContainer from "../Utils/CompaniesAddContainer";
import SocialNetworkContainer from "../SoicialNetwork/SocialNetworkContainer";

const VcardInformation = () => {
  const formDispatch = useFormFieldDispatch();
  const formFields = useFormField();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    formDispatch({
      type: "add",
      payload: {
        [name]: value,
      },
    });
  }, []);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    formDispatch({
      type: "add",
      payload: {
        [name]: value,
      },
    });
  };

  // console.log(formFields, "sdsads");
  return (
    <>
      <div className="px-5 py-10 mt-10 bg-white">
        <h3 className="mb-4 text-base font-semibold">Vcard Information</h3>
        <p className="mb-3 text-base text-gray-400">About ypu *</p>

        <div className="flex gap-x-8">
          <InputField
            placeholder="Name"
            name="name"
            className="bg-white rounded-2xl"
            handleChange={handleInputChange}
          />
          <InputField
            placeholder="Surname"
            name="surname"
            handleChange={handleInputChange}
            className="bg-white rounded-2xl"
          />
          <InputField
            placeholder="Title"
            name="title"
            handleChange={handleInputChange}
            className="bg-white rounded-2xl"
          />
        </div>
        <div className="w-[15%]">
          <SelectField
            name="alignment"
            label="Text align"
            values={["center", "left", "right"]}
            handleChange={handleSelectChange}
          />
        </div>

        <MultipleInputField category="Phones" />
        <MultipleInputField category="Emails" />
        <MultipleInputField category="websites" />

        {/* LocationInput */}
        <LocationInputContainer />
        <TextArea
          label="summary"
          handleChange={(e) => console.log(e.target.value)}
        />
        <ImageUploadContainer />
        <CompaniesAddContainer />

        <SocialNetworkContainer />
      </div>
    </>
  );
};

export default VcardInformation;
