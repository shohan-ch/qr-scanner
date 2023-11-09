import InputField from "../Forms/InputField";

const UrlLocationField = () => {
  return (
    <>
      <div className="px-2">
        <InputField
          placeholder="Url"
          name="url"
          className="w-full bg-white rounded-2xl"
        />
      </div>
    </>
  );
};

export default UrlLocationField;
