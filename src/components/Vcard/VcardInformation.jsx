import InputField from "../Forms/InputField";

const VcardInformation = () => {
  return (
    <>
      <div className="px-5 py-10 mt-10 bg-white">
        <h3 className="mb-4 text-base font-semibold">Vcard Information</h3>
        <p className="mb-3 text-base text-gray-400">About ypu *</p>

        <div className="flex gap-x-8">
          <InputField placeholder="Name" className="bg-white rounded-2xl" />
          <InputField placeholder="Surname" className="bg-white rounded-2xl" />
          <InputField placeholder="Title" className="bg-white rounded-2xl" />
        </div>
      </div>
    </>
  );
};

export default VcardInformation;
