import { useState } from "react";
import InputField from "../Forms/InputField";
import Button from "./Button";

const CompaniesAddContainer = () => {
  const [companies, setCompanies] = useState([1]);
  const [professions, setProfessions] = useState([]);

  const handleAddCompanies = () => {
    setCompanies([...companies, companies.length + 1]);
  };

  const handleProfessionChange = (index) => (e) => {
    const { name, value } = e.target;
    let professionArray = professions.map((profession) => {
      return profession.id === index
        ? { ...profession, [name]: value }
        : profession;
    });

    let updateProfessionArray = professions.some((item) => item.id === index)
      ? professionArray
      : [...professionArray, { id: index, [name]: value }];

    setProfessions(updateProfessionArray);
  };

  console.log(professions);

  return (
    <>
      {companies &&
        companies.map((company, index) => (
          <div className="mx-2 mt-7">
            <div className="flex items-center justify-between">
              <h2>Company {company}</h2>
              <Button className="mt-0">Delete</Button>
            </div>
            <hr className="mt-3 mb-0 divide-x" />
            <InputField
              handleChange={handleProfessionChange(index)}
              name="company"
              placeholder="Company Name"
              className="bg-white"
            />
            <div className="px-2 py-5 mt-4 bg-gray-100">
              <div>
                <h2>Profession</h2>
                <InputField
                  handleChange={handleProfessionChange(index)}
                  name="profession"
                  className="bg-white"
                  placeholder="Name"
                />
                <hr className="mt-5 mb-0 divide-x" />
              </div>
            </div>
          </div>
        ))}

      <div className="px-2">
        <Button handleClick={handleAddCompanies}>Add Company</Button>
      </div>
    </>
  );
};

export default CompaniesAddContainer;
