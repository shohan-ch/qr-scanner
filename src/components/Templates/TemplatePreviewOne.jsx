import { useFormField } from "../Context/FormDataContext";
import ContactHeader from "../Vcard/ContactHeader";

const TemplatePreviewOne = (props) => {
  const { pickerColor, primaryCOlor, secondaryColor, name, mobile } = props;
  const icons = ["mobile", "email", "location"];
  // console.log(pickerColor, "preview");

 const formField =  useFormField();
 
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
           <div className="mt-4 centerSection">
             <p className="flex items-center justify-center w-full text-sm">
               {formField.summary}
             </p>
             <hr />
           </div>
           {/* list */}
           <div className="flex items-center px-2 py-2 border-b gap-x-4 bg-gray-50">
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
               <p>0172319065</p>
               <p>label</p>
             </div>
           </div>

           <div className="flex items-center px-2 py-2 border-b gap-x-4 bg-gray-50">
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
               <p>Email</p>
               <p>label</p>
             </div>
           </div>

           <div className="flex items-center px-2 py-2 border-b gap-x-4 bg-gray-50">
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
               <p>Website</p>
               <p>label</p>
             </div>
           </div>
           {/* Company list */}
           <div className="border-b">
             <div className="flex items-center px-2 py-2 company_list gap-x-4 bg-gray-50">
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
                 <p>Root softit</p>
                 <p>Software engineer</p>
               </div>
             </div>

             <div className="flex items-center px-2 py-2 company_list gap-x-4 bg-gray-50">
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
                 <p>Root softit</p>
                 <p>Software engineer</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </>
 );
};

export default TemplatePreviewOne;
