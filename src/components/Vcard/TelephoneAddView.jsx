import InputField from "../Forms/InputField";
import SelectField from "../Forms/SelectField";
import { useFormField, useFormFieldDispatch } from "../Context/FormDataContext";
import Button from "../Utils/Button";
import { useState } from "react";

const TelephoneAddView = () => {
  const formDispatch = useFormFieldDispatch();
  const [containerCount, setContainerCount] = useState(1);
  const [containerList, setContainerList] = useState([1]);

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
    setContainerList([...containerList, containerCount + 1]);
    setContainerCount(containerCount + 1);
  };

  const handleContainerRemove = (id) => () => {
    alert(id);
    setContainerList(containerList.filter((item) => item != id));
  };

  console.log(containerList, "con");
  return (
    <>
      <div className="mt-5">
        {containerList &&
          containerList.map((item, index) => (
            <div id="container" className="mt-4" key={item}>
              <p>Telephone</p>
              <div className="flex items-center">
                <SelectField
                  name="telephoneType"
                  values={["Mobile phone", "Work", "Fax", "Other"]}
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
                <button onClick={handleContainerRemove(item)}>X</button>
              </div>
            </div>
          ))}
        <Button handleClick={handleAddClick}>Add Telephone</Button>
      </div>
    </>
  );
};

export default TelephoneAddView;
