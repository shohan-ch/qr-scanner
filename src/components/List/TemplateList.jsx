import { forwardRef } from "react";
import { useTemplateDispatch } from "../Context/TemplateListContext";
import templateList from "../../data/templateList.json";

const TemplateList = forwardRef((props, ref) => {
  const templateDispatch = useTemplateDispatch();
  // const { templateList } = props;

  const handleChange = (e) => {
    templateDispatch({
      type: "change",
      payload: e.target.value,
    });
  };

  return (
    <>
      <div className="flex mt-6 gap-x-5">
        {templateList &&
          templateList.map((list, index) => (
            <div key={index}>
              <input
                className="hidden"
                id={"radio_" + index}
                type="radio"
                name="radio"
                value={"template" + index}
                defaultChecked=""
                onChange={handleChange}
                ref={ref}
              />
              <label
                className="flex flex-col p-4 border-2 cursor-pointer w-[200px]"
                htmlFor={"radio_" + index}
              >
                <div className="bg-white rounded-lg shadow-lg">
                  <img
                    src={list.image}
                    alt=""
                    className="w-full rounded-t-lg"
                  />
                  <div className="p-4">
                    <h2 className="mb-2 text-base text-center text-purple-800">
                      {list.name}
                    </h2>
                  </div>
                </div>
              </label>
            </div>
          ))}
      </div>
    </>
  );
});

export default TemplateList;
