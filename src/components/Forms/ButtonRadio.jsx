const ButtonRadio = (props) => {
  const { value, label, groupName, handleChange } = props;
  return (
    <>
      <div className="w-[50%]">
        <input
          onChange={handleChange}
          type="radio"
          name={groupName}
          value={value}
          className="appearance-none peer"
          id={value}
        />
        <label
          htmlFor={value}
          className="block p-5 text-center border-2 peer-checked:border-blue-600 peer-checked:rounded-md"
        >
          {label.toUpperCase()}
        </label>
      </div>
    </>
  );
};

export default ButtonRadio;
