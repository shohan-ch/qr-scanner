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
      // newState[category][index] = {
      //   ...newState[category][index],
      //   [name]: value,
      // };
      newState[category][index] = {
        ...newState[category][index],
        id: index,
        [name]: value,
      };
      console.log(newState, "new state");
      return newState;
    }

    case "deleteMultiple": {
      const { id, category } = action.payload;
      console.log(state[category], "prev state ");

      let filterArray = state[category].filter((item, index) => item.id != id);

      return { ...state, [category]: filterArray };
      let newState = {
        ...state,
        [category]: state[category].filter((item, index) => {
          console.log(item, id);
          return item[id].id != id;
        }),
      };
      console.log(newState, "New state after");
      // alert(action.payload.id);
      return newState;
    }

    default:
      break;
  }
};
