import "./App.css";
import { FormFieldProvider } from "./components/Context/FormDataContext";
import { TemplateListProvider } from "./components/Context/TemplateListContext";
import VcardIndex from "./components/Vcard/VcardIndex";

function App() {
  return (
    <div>
      <FormFieldProvider>
        <TemplateListProvider>
          <VcardIndex />
        </TemplateListProvider>
      </FormFieldProvider>
    </div>
  );
}

export default App;
