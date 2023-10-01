import "./App.css";
import { TemplateListProvider } from "./components/Context/TemplateListContext";
import VcardIndex from "./components/Vcard/VcardIndex";

function App() {
  return (
    <div>
      <TemplateListProvider>
        <VcardIndex />
      </TemplateListProvider>
    </div>
  );
}

export default App;
