import { useRef, useState } from "react";
// import templateListData from "../../data/templateList.json";
import ColorsPlateView from "../ColorPlate/ColorsPlateView";
import { useSelectedTemplate } from "../Context/TemplateListContext";
import InputField from "../Forms/InputField";
import Switch from "../Forms/Switch";
import TemplateList from "../List/TemplateList";
import TemplatePreviewOne from "../Templates/TemplatePreviewOne";
import VcardInformation from "./VcardInformation";
import StepsView from "../Steps/StepsView";
const VcardIndex = () => {
  const selectedTemplate = useSelectedTemplate();
  const [pickerColor, setPickerColor] = useState({});
  const [selectSteps, setSelectSteps] = useState(1);

  const handleSlectSteps = (step) => {
    setSelectSteps(step);
  };

  return (
    <>
      <StepsView handleSlectSteps={handleSlectSteps} step={selectSteps} />

      {selectSteps == 1 && (
        <>
          <section className="container flex gap-5 px-5 mx-auto sm:items-center xs:items-start sm:py-10 xs:py-0 max-w-7xl bg-slate-100">
            <div className="w-[75%] sm:block xs:hidden">
              <h2 className="text-lg font-medium">
                Complete the content of the QR
              </h2>
              <InputField placeholder="Name Of Qr Code" />

              <Switch label="Autocomplete fields" />
              <TemplateList />
              <ColorsPlateView setPickerColor={setPickerColor} />
              <VcardInformation />
            </div>
            <div className="fixed sm:top-[10%] right-0 xs:w-full sm:w-[25%]">
              <TemplatePreviewOne pickerColor={pickerColor} />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default VcardIndex;
