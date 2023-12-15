import { useFormField } from "../Context/FormDataContext";
import ContactHeader from "../Vcard/ContactHeader";
import socialNetwork from '../../data/socialNetwork.json'
 
const TemplatePreviewOne = (props) => {
  const { pickerColor, primaryCOlor, secondaryColor, name, mobile } = props;
  const icons = ["mobile", "email", "location"];
  const formField   =  useFormField();
  const {location}  = formField.location ?? {}
  console.log(formField, "Form Template preview");
 return (
   <>
     <div className="w-full text-center ">
       <div className="relative">
         <img src="/cell.737ed730a414fd5f9c61.webp" width={250} />
         <div className="absolute w-[88%] top-0 h-[94%] mx-4 mt-4 bg-white rounded-3xl overflow-y-auto overflow-x-hidden">
           <div
             style={{ background: pickerColor.primary }}
             className="header  h-[65%] -mx-4 -mt-4 px-4 pt-16"
           >
             <div className="mx-auto space-y-2 text-center">
               <img
                 src="https://img.qrfy.com/img/original/mockup_vcard.webp"
                 alt="img"
                 width={82}
                 height={82}
                 className="mx-auto border border-white rounded-full"
               />
               <h2 className="text-2xl font-semibold">
                 {formField.name} {formField.surname}
               </h2>
               <p>{formField.title}</p>

               <div className="flex justify-between w-[70%] mx-auto">
                 {icons.length &&
                   icons.map((icon, index) => (
                     <ContactHeader
                       icon={icon}
                       key={index}
                       secondaryColor={pickerColor.secondary}
                     />
                   ))}
               </div>
             </div>
           </div>
           <div className="pb-2 mt-4 border-b centerSection">
             <p className="flex flex-wrap items-center w-full text-sm">
               {formField.summary}
             </p>
           </div>
           {/* list */}
           <div className="border-b ">
             {formField.phones?.length > 0 &&
               formField.phones.map((phone) => (
                 <div className="flex items-center px-2 py-2 gap-x-4 bg-gray-50">
                   <p>
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       width="16"
                       height="16"
                       fill="currentColor"
                       class="bi bi-phone"
                       viewBox="0 0 16 16"
                     >
                       <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                       <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                     </svg>
                   </p>
                   <div className="text-xs text-left">
                     <p>{phone.mobile}</p>
                     <p>{phone.label}</p>
                   </div>
                 </div>
               ))}
           </div>

           <div className="border-b">
             {formField.emails?.length > 0 &&
               formField.emails.map((email) => (
                 <div className="flex items-center px-2 py-2 gap-x-4 bg-gray-50">
                   <p>
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       width="16"
                       height="16"
                       fill="currentColor"
                       class="bi bi-envelope"
                       viewBox="0 0 16 16"
                     >
                       <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                     </svg>
                   </p>
                   <div className="text-xs text-left">
                     <p>{email.email}</p>
                     <p>{email.label}</p>
                   </div>
                 </div>
               ))}
           </div>

           <div className="border-b">
             {formField.websites?.length > 0 &&
               formField.websites.map((website) => (
                 <div className="flex items-center px-2 py-2 gap-x-4 bg-gray-50">
                   <p>
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       width="16"
                       height="16"
                       fill="currentColor"
                       class="bi bi-browser-chrome"
                       viewBox="0 0 16 16"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                       />
                     </svg>
                   </p>
                   <div className="text-xs text-left">
                     <p>{website.websiteName}</p>
                     {/* <p>{email.label}</p> */}
                   </div>
                 </div>
               ))}
           </div>

           <div className="border-b">
             {location && (
               <div className="flex items-center px-2 py-2 gap-x-4 bg-gray-50">
                 <p>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="currentColor"
                     class="bi bi-browser-chrome"
                     viewBox="0 0 16 16"
                   >
                     <path
                       fill-rule="evenodd"
                       d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                     />
                   </svg>
                 </p>
                 <div className="text-xs text-left">
                   <p>
                     {location.street +
                       ", " +
                       location.number +
                       ", " +
                       location.city +
                       ", " +
                       location.state}
                   </p>
                   {/* <p>{email.label}</p> */}
                 </div>
               </div>
             )}
           </div>

           {/* Company list */}
           <div className="border-b">
             {formField.profession?.length > 0 &&
               formField.profession.map((profession) => (
                 <div className="flex items-center px-2 py-2 gap-x-4 bg-gray-50">
                   <p>
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       width="16"
                       height="16"
                       fill="currentColor"
                       class="bi bi-duffle-fill"
                       viewBox="0 0 16 16"
                     >
                       <path d="M5.007 4.097c.008-.097.016-.197.027-.298.05-.464.141-.979.313-1.45.169-.465.432-.933.853-1.249 1.115-.836 2.485-.836 3.6 0 .42.316.684.784.853 1.25.171.47.263.985.313 1.449.01.1.02.2.027.298 1.401.194 2.65.531 3.525 1.012 2.126 1.169 1.446 6.095 1.089 8.018a.954.954 0 0 1-.95.772H1.343a.954.954 0 0 1-.95-.772c-.357-1.923-1.037-6.85 1.09-8.018.873-.48 2.123-.818 3.524-1.012ZM4.05 5.633a21.876 21.876 0 0 0-1.565.352l-.091.026-.034.01a.5.5 0 0 0 .282.959l.005-.002.02-.005.08-.023a20.874 20.874 0 0 1 1.486-.334A20.942 20.942 0 0 1 8 6.25c1.439 0 2.781.183 3.767.367a20.854 20.854 0 0 1 1.567.356l.02.005.004.001a.5.5 0 0 0 .283-.959h-.003l-.006-.002-.025-.007a14.787 14.787 0 0 0-.43-.113 21.87 21.87 0 0 0-1.226-.265A21.939 21.939 0 0 0 8 5.25c-1.518 0-2.926.192-3.95.383M6.8 1.9c-.203.153-.377.42-.513.791a5.258 5.258 0 0 0-.265 1.292 34.54 34.54 0 0 1 1.374-.076c.866-.022 1.742.003 2.584.076a5.258 5.258 0 0 0-.266-1.292c-.135-.372-.309-.638-.513-.791-.76-.57-1.64-.57-2.4 0Z" />
                     </svg>
                   </p>
                   <div className="text-xs text-left">
                     <p>{profession.company}</p>
                     <p>{profession.profession}</p>
                   </div>
                 </div>
               ))}
           </div>
           {/* Socail Network */}
           <div className="border-b">
            <small className="text-center">Find me on:</small>
             {formField.socialNetworks?.length > 0 &&
               formField.socialNetworks.map((social) => {
               let socialImage =  socialNetwork.find((item)=> item.name == social.name)
                return  (
                 <div className="flex items-center px-2 py-2 gap-x-4 bg-gray-50">
                   <p>
                    <img src={socialImage.logo} alt="img" width={30} height={50} />
                   </p>
                   <div className="text-xs text-left">
                    <a href={social.url}>{social.name} </a>
                   </div>
                 </div>
                 )
               }
               )}
           </div>


         </div>
       </div>
     </div>
   </>
 );
};

export default TemplatePreviewOne;
