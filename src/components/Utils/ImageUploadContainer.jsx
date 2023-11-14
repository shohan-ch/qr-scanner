const ImageUploadContainer = (props) => {
  const { handleChange } = props;

  // const handleImageUpload = (e) => {
  //   alert(1234);
  //   console.log(e);

  //   // e.target.files;
  // };

  return (
    <>
      <div className="relative px-2 mt-4">
        {/* <input type="file" onChange={handleImageUpload} /> */}
        <div className="flex justify-center items-center p-5 mx-auto text-center border-2 border-gray-400 border-dashed rounded-md h-[150px] ">
          <div>
            <input
              type="file"
              onChange={handleChange}
              className="absolute top-0 left-0 w-full h-full opacity-0"
            />
            <button className="cursor-pointer p-3 text-white bg-blue-600 rounded-full w-[150px]">
              Upload Images
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageUploadContainer;
