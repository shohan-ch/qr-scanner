import colotPlateData from "../../data/colorPlate.json";

const ColorPlateView = () => {
  console.log(colotPlateData);
  return (
    <>
      <div className="px-5 py-10 mt-10 bg-white">
        <h3 className="mb-4 text-base font-semibold">Design</h3>
        <p className="mb-3 text-base text-gray-400">Colour plate *</p>

        <div className="flex w-full overflow-x-auto overflow-y-hidden gap-x-4 scroll-m-10">
          {colotPlateData &&
            colotPlateData.map((color, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={"color_" + color.id}
                  className="hidden appearance-none"
                  value={"color_" + color.id}
                />
                <label
                  htmlFor={"color_" + color.id}
                  className="flex w-[150px] gap-4 border rounded p-3  cursor-pointer"
                >
                  <div
                    style={{ background: `${color.primary}` }}
                    className={` w-[50%] h-[30px]`}
                  ></div>
                  <div
                    style={{ background: `${color.secondary}` }}
                    className={`w-[50%]`}
                  ></div>
                </label>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ColorPlateView;
