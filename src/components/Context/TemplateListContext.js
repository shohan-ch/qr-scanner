import { createContext, useContext, useReducer } from "react";

export const TemplateContext = createContext(null);
export const TemplateContextDispatch = createContext(null);

export const TemplateListProvider = ({ children }) => {
  const [selectedTemplate, templateDispatch] = useReducer(
    templateLisrReducer,
    null
  );
  return (
    <>
      <TemplateContext.Provider value={selectedTemplate}>
        <TemplateContextDispatch.Provider value={templateDispatch}>
          {children}
        </TemplateContextDispatch.Provider>
      </TemplateContext.Provider>
    </>
  );
};

export const useSelectedTemplate = () => {
  return useContext(TemplateContext);
};

export const useTemplateDispatch = () => {
  return useContext(TemplateContextDispatch);
};
const templateLisrReducer = (state, action) => {
  switch (action.type) {
    case "change": {
      return action.payload;
    }

    default: {
      throw Error("Invalid type");
    }
  }
};
