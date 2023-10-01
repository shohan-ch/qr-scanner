import { forwardRef } from "react";

const TemplateList = forwardRef((props, ref) => {
  const { templateList, value } = props;
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
                onChange={(e) => alert(e.target.value)}
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

        {/* <div>
          <input className="hidden" id="radio_2" type="radio" name="radio" />
          <label
            className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            htmlFor="radio_2"
          >
            <span className="text-xs font-semibold uppercase">Medium</span>
            <span className="mt-2 text-xl font-bold">$40/mo</span>
            <ul className="mt-2 text-sm">
              <li>Thing 1</li>
              <li>Thing 2</li>
            </ul>
          </label>
        </div>
        <div>
          <input className="hidden" id="radio_3" type="radio" name="radio" />
          <label
            className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            htmlFor="radio_3"
          >
            <span className="text-xs font-semibold uppercase">Big</span>
            <span className="mt-2 text-xl font-bold">$100/mo</span>
            <ul className="mt-2 text-sm">
              <li>Thing 1</li>
              <li>Thing 2</li>
            </ul>
          </label>
        </div> */}
      </div>

      {/* <div className="relative">
        <div>
          <input
            className="hidden"
            id="radio_1"
            type="radio"
            name="radio"
            defaultChecked=""
          />
          <label
            className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            htmlFor="radio_1"
          >
            <span className="text-xs font-semibold uppercase">Small</span>
            <span className="mt-2 text-xl font-bold">$10/mo</span>
            <ul className="mt-2 text-sm">
              <li>Thing 1</li>
              <li>Thing 2</li>
            </ul>
          </label>
        </div>

        <input type="radio" className="appearance-none" value={value} />
      </div> */}
    </>
  );
});

export default TemplateList;
