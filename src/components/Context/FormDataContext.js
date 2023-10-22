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
      // return;
      console.log(action, "obj");
      let prevState = {
        ...state,
        [category]: [...state[category], [{ name: "shoa" }]],
      };

      console.log(prevState, "sdsadsad");

      return prevState;
      // console.log({ ...state[category] }, "cat");

      return;

      let arr = {
        ...state,
        [action.payload.category]: [
          [...state.action.payload.category],
          {
            [action.payload.name]: action.payload.value,
          },
        ],
      };

      console.log(arr, "form context");

      // arr[action.payload.category] = [
      //   {
      //     // ...arr[action.payload.category],
      //     [action.payload.name]: action.payload.value,
      //   },
      // ];
      // console.log(arr, "from context");
      return arr;
    }

    default:
      break;
  }
};
