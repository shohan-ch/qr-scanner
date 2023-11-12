const TextArea = (props) => {
  const { handleChange, label } = props;
  return (
    <>
      <div className="px-2 mt-3">
        <label for="message" class="block mb-2 text-sm ">
          {label}
        </label>
        <textarea
          onChange={handleChange}
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm rounded-lg border border-gray-300"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;
