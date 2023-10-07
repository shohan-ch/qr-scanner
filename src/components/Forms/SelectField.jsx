const SelectField = (props) => {
  const { values, handleChange, label, name, className } = props;

  return (
    <>
      <label
        htmlFor="countries"
        className="block mt-4 mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <select
        name={name}
        onChange={handleChange}
        className={`${
          className && className
        } capitalize border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
      >
        {values &&
          values.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectField;
