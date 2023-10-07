import InputField from "../Forms/InputField";
import SelectField from "../Forms/SelectField";
import { useFormField, useFormFieldDispatch } from "../Context/FormDataContext";
import Button from "../Utils/Button";
import { useState } from "react";

const TelephoneAddView = () => {
  const formDispatch = useFormFieldDispatch();
  const [phnContainerCount, setPhnContainerCount] = useState(1);
  const [phnContainerList, setPhnContainerList] = useState([1]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formDispatch({
      type: "add",
      payload: {
        [name]: value,
      },
    });
  };
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    formDispatch({
      type: "add",
      payload: {
        [name]: value,
      },
    });
  };

  const handleAddClick = () => {
    // alert(123);
    setPhnContainerCount(phnContainerCount + 2);
    setPhnContainerList([...phnContainerList, phnContainerCount]);
  };

  console.log(phnContainerList, "con");
  return (
    <>
      <div className="mt-5">
        {phnContainerList &&
          phnContainerList.map((list, index) => (
            <div id="container" className="mt-4" key={index}>
              <p>Telephone</p>
              <div className="flex items-center">
                <SelectField
                  name="telephoneType"
                  values={[
                    "Mobile phone",
                    "handleInputChangeome",
                    "Work",
                    "Fax",
                    "Other",
                  ]}
                  handleChange={handleSelectChange}
                  className="bg-white h-[48px] mt-3 mr-2"
                />

                <InputField
                  placeholder="Label..."
                  name="label"
                  handleChange={handleInputChange}
                  className="mr-2 bg-white rounded-full"
                />
                <InputField
                  placeholder="Eg 00000-000"
                  name="mobile"
                  handleChange={handleInputChange}
                  className="mr-2 bg-white rounded-full"
                />
                <div>X</div>
              </div>
            </div>
          ))}
        <Button handleClick={handleAddClick}>Add Telephone</Button>
      </div>
    </>
  );
};

export default TelephoneAddView;
