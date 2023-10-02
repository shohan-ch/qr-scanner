import templateListData from "../../data/templateList.json";
import ColorPlateView from "../ColorPlate/ColorPlateView";
import { useSelectedTemplate } from "../Context/TemplateListContext";
import InputField from "../Forms/InputField";
import Switch from "../Forms/Switch";
import TemplateList from "../List/TemplateList";
import TemplatePreviewOne from "../Templates/TemplatePreviewOne";

const VcardIndex = () => {
  const selectedTemplate = useSelectedTemplate();
  console.log(selectedTemplate, "sfds");
  return (
    <>
      <section className="container flex items-center gap-5 px-5 py-10 mx-auto max-w-7xl bg-slate-100">
        <div className="w-[75%]">
          <h2 className="text-lg font-medium">
            Complete the content of the QR
          </h2>
          <InputField placeholder="Name Qr Code" />

          <Switch label="Autocomplete fields" />
          <TemplateList templateList={templateListData} />

          <ColorPlateView />
        </div>
        <div className="previewSection">
          <TemplatePreviewOne />
        </div>
      </section>
    </>
  );
};

export default VcardIndex;
