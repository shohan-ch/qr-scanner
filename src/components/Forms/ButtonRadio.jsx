const ButtonRadio = (props) => {
  const { value, label, groupName, handleChange } = props;
  return (
    <>
      <div>
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
          className="p-5 w-[400px] text-center border-2 block peer-checked:border-blue-600 peer-checked:rounded-md"
        >
          {label.toUpperCase()}
        </label>
      </div>
    </>
  );
};

export default ButtonRadio;
