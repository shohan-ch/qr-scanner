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

      const updatedCategoryArray = categoryArray.map((item) =>
        item.id === index ? { ...item, [name]: value } : item
      );
      let newState = {
        ...state,
        [category]: categoryArray.some((item) => item.id === index)
          ? updatedCategoryArray
          : [...updatedCategoryArray, { id: index, [name]: value }],
      };
      console.log(newState, "new state");
      return newState;
    }

    case "deleteMultiple": {
      const { id, category } = action.payload;
      let filterArray = state[category].filter((item, index) => {
        console.log(item.id, "filter");
        return item.id != id;
      });
      let newState = { ...state, [category]: filterArray };
      // console.log(newState, "new");
      return newState;
    }

    case "addLocation": {
      const { locationType, location, url } = action.payload;
      delete state.location;
      return locationType === "complete"
        ? { ...state, location: { locationType, location } }
        : { ...state, location: { locationType, url } };
      // return { ...state, location: { locationType, location } };
    }

    default:
      break;
  }
};
