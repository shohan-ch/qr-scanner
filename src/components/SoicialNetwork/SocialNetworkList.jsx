import socials from "../../data/socialNetwork.json";

const SocialNetworkList = (props) => {
  const { socialList, setSocialList } = props;

  return (
    <>
      <div className="px-3 py-5 bg-gray-100">
        <h6>Add</h6>

        <div className="flex flex-wrap mt-4 gap-x-5">
          {socials &&
            socials.map((social, index) => (
              <div
                onClick={() => setSocialList([...socialList, social])}
                title={social.name}
                className="p-1 border-2 border-gray-400 rounded-md cursor-pointer hover:border-blue-700"
              >
                {/* <p>{social.name}</p> */}
                <img src={social.logo} alt={social.name} width={30} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SocialNetworkList;
