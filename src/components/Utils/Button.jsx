const Button = (props) => {
  const { handleClick, children } = props;

  return (
    <>
      <button
        onClick={handleClick}
        className="p-2 mt-5 bg-transparent border border-blue-700 rounded-3xl"
      >
        + {children}
      </button>
    </>
  );
};

export default Button;
