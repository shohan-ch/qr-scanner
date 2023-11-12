const ImageUploadContainer = (props) => {
  const { handleChange } = props;
  return (
    <>
      <div className="relative px-2 mt-4">
        <div className="flex justify-center items-center p-5 mx-auto text-center border-2 border-gray-400 border-dashed rounded-md h-[150px] ">
          <div>
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0"
            />
            <button
              onChange={handleChange}
              className="cursor-pointer p-3 text-white bg-blue-600 rounded-full w-[150px]"
            >
              Upload Images
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageUploadContainer;
