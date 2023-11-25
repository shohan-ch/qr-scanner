import { useFormField, useFormFieldDispatch } from "../Context/FormDataContext";
import InputField from "../Forms/InputField";

const UrlLocationField = () => {
  const formDispatch = useFormFieldDispatch();

  const handChangeLocationUrl = (e) => {
    formDispatch({
      type: "addLocation",
      payload: {
        locationType: "url",
        url: e.target.value,
      },
    });
  };

  return (
    <>
      <div className="px-2">
        <InputField
          handleChange={handChangeLocationUrl}
          placeholder="Url"
          name="url"
          className="w-full bg-white rounded-2xl"
        />
      </div>
    </>
  );
};

export default UrlLocationField;
