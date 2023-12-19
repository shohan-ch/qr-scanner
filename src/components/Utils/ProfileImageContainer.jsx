import { useState } from "react";
import { useFormField, useFormFieldDispatch } from "../Context/FormDataContext";

const ProfileImageContainer = (props) => {
  const { handleChange } = props;
  const [image, setImage] = useState(null)
  const formDispatch = useFormFieldDispatch();
  const formField =  useFormField();

  const handleProfileImgChange = (e) => {
    formDispatch({
    type: "addImage",
    payload: {
      name: e.target.name,
      file: e.target.files[0],
    },
   });
    // setImage(e.target.files[0]);
    // console.log(e.target.files[0]);
  };

  const removeImage = (name) => () =>{
   formDispatch({
     type: "deleteImage",
     payload: {
       name: name,
  
     },
   });
  }
 
  console.log(formField);

  return (
    <>
      <div className="flex items-center gap-x-6">
        <div
          onChange={handleProfileImgChange}
          className="relative border h-[65px] w-[65px]"
        >
          <input
            name="profileImage"
            type="file"
            id="image"
            className="hidden appearance-none"
          />
          <label
            htmlFor="image"
            className="absolute flex items-center justify-center w-full h-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-box-arrow-in-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
              />
            </svg>
          </label>
        </div>
        {formField?.profileImage && (
          <>
            <div className="h-[80px] flex items-center">
              <img
                alt="not found"
                width={"80px"}
                className="w-auto h-[70px]"
                src={URL.createObjectURL(formField?.profileImage)}
              />
            </div>

            <p
              onClick={removeImage("profileImage")}
              className="px-3 py-1 border border-blue-600 rounded-full cursor-pointer"
            >
              Delete
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ProfileImageContainer;
