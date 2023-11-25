import { memo, useState } from "react";
import InputField from "../Forms/InputField";
import SocialNetworkList from "./SocialNetworkList";
import { useFormField, useFormFieldDispatch } from "../Context/FormDataContext";

const SocialNetworkContainer = () => {
  const [socialList, setSocialList] = useState([]);
  const [socialInfo, setSocialInfo] = useState([]);

  const formDispatch = useFormFieldDispatch();

  const handleSocialInfoChange = (socialName) => (e) => {
    const { name, value } = e.target;
    formDispatch({
      type: "addSocialInfo",
      payload: {
        socialNetworkName: socialName,
        name,
        value,
      },
    });

    // let info = socialInfo.map((social) =>
    //   social.socialName == socialName ? { ...social, [name]: value } : social
    // );
    // let updateInfo = socialInfo.some(
    //   (social) => social.socialName == socialName
    // )
    //   ? info
    //   : [...socialInfo, { socialName: socialName, [name]: value }];
    // setSocialInfo(updateInfo);
  };

  const handleSocialRemove = (socialName) => () => {
    formDispatch({
      type: "deleteSocialInfo",
      payload: {
        name: socialName,
      },
    });

    // setSocialInfo(
    //   socialInfo.filter((social) => social.socialName !== socialName)
    // );
    setSocialList(socialList.filter((social) => social.name !== socialName));
  };

  // console.log(socialInfo, "social");

  console.log(useFormField(), "Social Network");

  return (
    <>
      <div className="mx-2 space-y-7 mt-7">
        <h2>Soical Networks</h2>
        <InputField placeholder="Title" className="bg-white" />

        {socialList.map((social) => (
          <div className="space-y-5 socialUrls">
            <div className="flex items-center gap-x-5">
              <img src={social.logo} alt={social.name} width={30} />
              <p className="text-[16px]">{social.name}</p>
              <button
                className="ml-auto text-gray-600"
                onClick={handleSocialRemove(social.name)}
              >
                X
              </button>
            </div>
            <InputField
              handleChange={handleSocialInfoChange(social.name)}
              name="url"
              placeholder="Url"
              className="bg-white"
            />
            <InputField
              handleChange={handleSocialInfoChange(social.name)}
              name="text"
              placeholder="Text"
              className="bg-white "
            />
          </div>
        ))}

        <SocialNetworkList
          socialList={socialList}
          setSocialList={setSocialList}
        />
      </div>
    </>
  );
};

export default memo(SocialNetworkContainer);
