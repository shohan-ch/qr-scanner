import { createContext, useContext, useReducer } from "react";

export const FormFieldContext = createContext({});
export const FormFieldContextDispatch = createContext(null);

export const FormFieldProvider = ({ children }) => {
  const [formField, formFieldDispatch] = useReducer(formFieldsReducer, {});

  return (
    <>
      <FormFieldContext.Provider value={formField}>
        <FormFieldContextDispatch.Provider value={formFieldDispatch}>
          {children}
        </FormFieldContextDispatch.Provider>
      </FormFieldContext.Provider>
    </>
  );
};

export const useFormField = () => {
  return useContext(FormFieldContext);
};

export const useFormFieldDispatch = () => {
  return useContext(FormFieldContextDispatch);
};

const formFieldsReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return {
        ...state,
        [Object.keys(action.payload).toString()]:
          action.payload[Object.keys(action.payload).toString()],
      };
    }

    case "addMultiple": {
      const { category, index, name, value } = action.payload;
      const categoryArray = state[category] || [];
      let newState = {
        ...state,
        [category]: [...categoryArray],
      };
      newState[category][index] = {
        ...newState[category][index],
        [name]: value,
      };
      console.log(newState, "new state");
      return newState;
    }

    default:
      break;
  }
};
