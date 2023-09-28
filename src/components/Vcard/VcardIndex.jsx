import InputField from "../Forms/InputField";
import Switch from "../Forms/Switch";
import TemplateList from "../List/TemplateList";
import data from "../../data/templateList.json";

const VcardIndex = () => {
  console.log(data);
  return (
    <>
      <section className="container px-5 py-10 mx-auto max-w-7xl bg-slate-100">
        <h2 className="text-lg font-medium">Complete the content of the QR</h2>
        <InputField placeholder="Name Qr Code" />

        <Switch label="Autocomplete fields" />
        <TemplateList list={data} />
      </section>
    </>
  );
};

export default VcardIndex;
