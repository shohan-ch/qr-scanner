const InputField = (props) => {
  const { placeholder, handleChange, value, className } = props;
  return (
    <>
      <input
        className={`${
          className && className
        } mt-3 h-[48px] w-full rounded-md border bg-gray-200 p-2 focus:shadow-md focus:outline-0 focus:ring-1 focus:ring-primary-500 `}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
};

export default InputField;
