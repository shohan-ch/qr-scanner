import { useState } from "react";
import InputField from "../Forms/InputField";
import SocialNetworkList from "./SocialNetworkList";

const SocialNetworkContainer = () => {
  const [socialList, setSocialList] = useState([]);

  console.log(socialList);
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
            </div>
            <InputField placeholder="Url" className="bg-white" />
            <InputField placeholder="Text" className="bg-white " />
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

export default SocialNetworkContainer;
