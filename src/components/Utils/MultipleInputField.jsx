import InputField from "../Forms/InputField";
import SelectField from "../Forms/SelectField";
import { useFormField, useFormFieldDispatch } from "../Context/FormDataContext";
import Button from "./Button";
import { useState } from "react";
import convertStringToLowerCase from "../../helpers/convertStringToLowerCase";

const MultipleInputField = (props) => {
  const { category, selectOptions } = props;
  let lowerCaseCategory = convertStringToLowerCase(category);
  const formDispatch = useFormFieldDispatch();
  const [containerCount, setContainerCount] = useState(1);
  const [containerList, setContainerList] = useState([]);

  const inputLableName = {
    phones: ["type", "label", "mobile"],
    emails: ["label", "email"],
    websites: ["websiteName", "url"],
  };
  const handleInputChange = (index) => (e) => {
    const { name, value } = e.target;
    formDispatch({
      type: "addMultiple",
      payload: {
        index,
        name,
        value,
        category: lowerCaseCategory,
      },
    });
  };

  const handleSelectChange = (index) => (e) => {
    const { name, value } = e.target;
    formDispatch({
      type: "addMultiple",
      payload: {
        index,
        name,
        value,
        category: lowerCaseCategory,
      },
    });
  };

  const handleAddClick = () => {
    setContainerList([...containerList, containerCount + 1]);
    setContainerCount(containerCount + 1);
  };

  const handleContainerRemove = (id) => () => {
    setContainerList(containerList.filter((item) => item != id));
    formDispatch({
      type: "deleteMultiple",
      payload: {
        id,
        category: lowerCaseCategory,
      },
    });
  };

  // console.log(containerList, "con");
  return (
    <>
      <div className="mt-5">
        {containerList &&
          containerList.map((item, index) => (
            <div id="container" className="mt-4" key={item}>
              <p>{category.slice(0, -1)}</p>
              <div className="flex items-center">
                {category == "Phones" && (
                  <SelectField
                    name={inputLableName[lowerCaseCategory][0]}
                    values={["Mobile phone", "Work", "Fax", "Other"]}
                    handleChange={handleSelectChange(item)}
                    className="bg-white h-[48px] mt-3 mr-2"
                  />
                )}

                <InputField
                  placeholder="Label..."
                  name={
                    lowerCaseCategory != "phones"
                      ? inputLableName[lowerCaseCategory][0]
                      : inputLableName[lowerCaseCategory][1]
                  }
                  handleChange={handleInputChange(item)}
                  className="mr-2 bg-white rounded-full"
                />
                <InputField
                  placeholder={"write " + lowerCaseCategory.slice(0, -1)}
                  name={
                    lowerCaseCategory != "phones"
                      ? inputLableName[lowerCaseCategory][1]
                      : inputLableName[lowerCaseCategory][2]
                  }
                  handleChange={handleInputChange(item)}
                  className="mr-2 bg-white rounded-full"
                />
                <button onClick={handleContainerRemove(item)}>X</button>
              </div>
            </div>
          ))}
        <Button handleClick={handleAddClick}>
          Add {category.slice(0, -1)}
        </Button>
      </div>
    </>
  );
};

export default MultipleInputField;
