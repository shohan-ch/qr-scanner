const TemplateList = (props) => {
  const { list, value } = props;
  return (
    <>
      <div className="flex gap-x-5">
        <div>
          <input
            className="hidden"
            id="radio_1"
            type="radio"
            name="radio"
            defaultChecked=""
          />
          <label
            className="flex flex-col p-4 border-2 cursor-pointer w-[220px]"
            htmlFor="radio_1"
          >
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                alt=""
                className="rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="mb-2 text-base font-bold text-purple-800">
                  Template 1
                </h2>
              </div>
            </div>
          </label>
        </div>
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
};

export default TemplateList;
