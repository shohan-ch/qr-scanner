import { useRef, useState } from "react";
// import templateListData from "../../data/templateList.json";
import ColorsPlateView from "../ColorPlate/ColorsPlateView";
import { useSelectedTemplate } from "../Context/TemplateListContext";
import InputField from "../Forms/InputField";
import Switch from "../Forms/Switch";
import TemplateList from "../List/TemplateList";
import TemplatePreviewOne from "../Templates/TemplatePreviewOne";
import VcardInformation from "./VcardInformation";
const VcardIndex = () => {
  const selectedTemplate = useSelectedTemplate();
  const [pickerColor, setPickerColor] = useState({});

  console.log(selectedTemplate, "From v card index");

  return (
    <>
      <section className="container flex items-center gap-5 px-5 py-10 mx-auto max-w-7xl bg-slate-100">
        <div className="w-[75%]">
          <h2 className="text-lg font-medium">
            Complete the content of the QR
          </h2>
          <InputField placeholder="Name Of Qr Code" />

          <Switch label="Autocomplete fields" />
          <TemplateList />
          <ColorsPlateView setPickerColor={setPickerColor} />
          <VcardInformation />
        </div>
        <div className="previewSection">
          <TemplatePreviewOne pickerColor={pickerColor} />
        </div>
      </section>
    </>
  );
};

export default VcardIndex;
