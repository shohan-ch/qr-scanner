import { useFormField, useFormFieldDispatch } from "../Context/FormDataContext";
import InputField from "../Forms/InputField";

const VcardInformation = () => {
  const formDispatch = useFormFieldDispatch();
  const formFields = useFormField();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formDispatch({
      type: "add",
      payload: {
        [name]: value,
      },
    });
  };
  console.log(formFields, "sdsads");
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
      </div>
    </>
  );
};

export default VcardInformation;
