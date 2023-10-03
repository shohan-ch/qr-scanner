import colotPlateData from "../../data/colorPlate.json";

const ColorsPlateView = () => {
  console.log(colotPlateData);

  return (
    <>
      <div className="px-5 py-10 mt-10 bg-white">
        <h3 className="mb-4 text-base font-semibold">Design</h3>
        <p className="mb-3 text-base text-gray-400">Colour plate *</p>
        {/* Color plate list */}
        <div className="flex w-full overflow-x-scroll gap-x-4 scroll-m-10">
          {colotPlateData &&
            colotPlateData.map((color, index) => (
              <div key={index} className="pb-8">
                <input
                  type="radio"
                  id={"color_" + color.id}
                  className="hidden appearance-none"
                  value={"color_" + color.id}
                  defaultChecked=""
                  name="templateRadio"
                />
                <label
                  htmlFor={"color_" + color.id}
                  className="flex w-[150px] gap-4 border rounded p-3  cursor-pointer"
                >
                  <div
                    style={{ background: `${color.primary}` }}
                    className={`w-[50%] h-[30px]`}
                  ></div>
                  <div
                    style={{ background: `${color.secondary}` }}
                    className={`w-[50%]`}
                  ></div>
                </label>
              </div>
            ))}
        </div>
        {/* color pickup selector */}
        <div
          id="colorPickupSelector"
          className="flex justify-between px-3 py-5 mt-10 bg-gray-100 rounded"
        >
          <div className="w-[30%]">
            <p className="mb-2 text-xs font-semibold text-gray-500">Primary</p>

            <div className="flex justify-between px-4 py-3 bg-white rounded-3xl">
              <p>#64ADD</p>
              <input
                type="color"
                value={"#ffff"}
                className="rounded cursor-pointer w-7"
              />
            </div>
          </div>

          <div className="w-[30%]">
            <p className="mb-2 text-xs font-semibold text-gray-500">
              Secondary
            </p>

            <div className="flex justify-between px-4 py-3 bg-white rounded-3xl">
              <p>#64ADD</p>
              <input
                type="color"
                value={"#ffff"}
                className="rounded cursor-pointer w-7"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorsPlateView;
