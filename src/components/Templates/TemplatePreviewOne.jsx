import ContactHeader from "../Vcard/ContactHeader";

const TemplatePreviewOne = (props) => {
  const { primaryCOlor, secondaryColor, name, mobile } = props;
  const icons = ["mobile", "email", "location"];
  return (
    <>
      <div className="w-full text-center ">
        <div
          // style={{
          //   backgroundImage: "url('/cell.737ed730a414fd5f9c61.webp')",
          //   width: "250px",
          //   height: "350px",
          // }}
          className="relative"
        >
          <img src="/cell.737ed730a414fd5f9c61.webp" width={250} />
          <div className="absolute top-0 h-[94%] mx-4 mt-4 bg-white rounded-3xl p-3 overflow-y-auto overflow-x-hidden">
            <div className="header bg-red-500 h-[65%] -mx-4 -mt-4 px-4 pt-16">
              <div className="mx-auto space-y-2 text-center">
                <img
                  src="https://img.qrfy.com/img/original/mockup_vcard.webp"
                  alt="img"
                  width={82}
                  height={82}
                  className="mx-auto border border-white rounded-full"
                />
                <h2 className="text-2xl font-semibold">Alvarto Diaz</h2>
                <p>CEO</p>

                <div className="flex justify-between w-[70%] mx-auto">
                  {icons.length &&
                    icons.map((icon, index) => (
                      <ContactHeader
                        icon={icon}
                        key={index}
                        secondaryColor="bg-white"
                      />
                    ))}
                </div>
              </div>
            </div>

            <div className="w-full centerSection">
              di
              <p className="text-sm"> Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplatePreviewOne;
