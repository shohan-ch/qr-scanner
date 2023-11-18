import { useState } from "react";

const ImageUploadContainer = (props) => {
  const [images, setImages] = useState([]);
  const [imageCount, setImageCount] = useState(0);

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    file.id = imageCount + 1;
    setImages([...images, file]);
    setImageCount(imageCount + 1);
  };

  const handleImageRemove = (id) => {
    setImages(images.filter((image, index) => image.id != id));
  };

  return (
    <>
      <div className="relative px-2 mt-4">
        <div className="flex justify-center items-center p-5 mx-auto text-center border-2 border-gray-400 border-dashed rounded-md h-[150px] ">
          <div>
            <input
              type="file"
              onChange={handleImageUpload}
              className="absolute top-0 left-0 w-full h-full opacity-0"
            />
            <button className="cursor-pointer p-3 text-white bg-blue-600 rounded-full w-[150px]">
              Upload Images
            </button>
          </div>
        </div>
      </div>

      {images.length > 0 &&
        images.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 pr-10 mx-2 mt-4 border-2 border-gray-400 border-dashed rounded-md "
          >
            <div className="w-[80px] h-[80px] overflow-hidden border border-gray-400 p-2 flex items-center rounded-md ">
              <img
                alt="not found"
                width={"80px"}
                height={"70px"}
                src={URL.createObjectURL(image)}
              />
            </div>

            <div>
              <button onClick={() => handleImageRemove(image.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default ImageUploadContainer;
