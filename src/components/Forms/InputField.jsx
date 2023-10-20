const InputField = (props) => {
  const { placeholder, handleChange, value, className, name } = props;
  return (
    <>
      <input
        required
        className={`${
          className && className
        } mt-3 h-[48px] w-full rounded-md border bg-gray-200 p-2 focus:shadow-md focus:outline-0 focus:ring-1 focus:ring-primary-500 `}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
      />
    </>
  );
};

export default InputField;
