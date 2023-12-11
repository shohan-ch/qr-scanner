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
         <div className="absolute w-[88%] top-0 h-[94%] mx-4 mt-4 bg-white rounded-3xl p-3 overflow-y-auto overflow-x-hidden">
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
             <p className="w-full text-sm"> Lorem ipsum dolor sit amet.</p>
           </div>
         </div>
       </div>
     </div>
   </>
 );
};

export default TemplatePreviewOne;
