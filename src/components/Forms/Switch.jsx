const Switch = (props) => {
  const { label, handleSwitch } = props;
  return (
    <>
      <label className="mt-8 relative inline-flex cursor-pointer items-center gap-x-3">
        <input type="checkbox" defaultValue="" className="peer sr-only" />
        <div className="peer h-6 w-11  rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:bg-white peer-focus:outline-none"></div>
        <small>{label}</small>
      </label>
    </>
  );
};

export default Switch;
