import InputField from "../Forms/InputField";
import SelectField from "../Forms/SelectField";
import { useFormField, useFormFieldDispatch } from "../Context/FormDataContext";
import Button from "../Utils/Button";
import { useState } from "react";

const TelephoneAddView = () => {
  const formDispatch = useFormFieldDispatch();
  const formFields = useFormField();
  const [containerCount, setContainerCount] = useState(1);
  const [containerList, setContainerList] = useState([1]);
  const [telephones, setTelephones] = useState([]);
  const handleInputChange = (index) => (e) => {
    const { name, value } = e.target;

    formDispatch({
      type: "addMultiple",
      payload: {
        index,
        name,
        value,
        category: "phones",
      },
    });

    // setTelephones((prevState) => {
    //   let updatedContacts = [...prevState];
    //   updatedContacts[index] = { ...updatedContacts[index], [name]: value };
    //   return updatedContacts;
    // });
  };

  const handleSelectChange = (index) => (e) => {
    const { name, value } = e.target;

    formDispatch({
      type: "addMultiple",
      payload: {
        index,
        name,
        value,
        category: "phones",
      },
    });

    // setTelephones((prevState) => {
    //   let updatedContacts = [...prevState];
    //   updatedContacts[index] = { ...updatedContacts[index], [name]: value };
    //   return updatedContacts;
    // });
  };

  const handleAddClick = () => {
    setContainerList([...containerList, containerCount + 1]);
    setContainerCount(containerCount + 1);
    // setTelephones([...telephones, {}]);
  };

  const handleContainerRemove = (id) => () => {
    setContainerList(containerList.filter((item) => item != id));
  };

  console.log(telephones);
  // console.log(containerList, "con");
  return (
    <>
      <div className="mt-5">
        {containerList &&
          containerList.map((item, index) => (
            <div id="container" className="mt-4" key={item}>
              <p>Telephone</p>
              <div className="flex items-center">
                <SelectField
                  name={"type"}
                  values={["Mobile phone", "Work", "Fax", "Other"]}
                  handleChange={handleSelectChange(index)}
                  className="bg-white h-[48px] mt-3 mr-2"
                />

                <InputField
                  placeholder="Label..."
                  name="label"
                  handleChange={handleInputChange(index)}
                  className="mr-2 bg-white rounded-full"
                />
                <InputField
                  placeholder="Eg 00000-000"
                  name="mobile"
                  handleChange={handleInputChange(index)}
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
