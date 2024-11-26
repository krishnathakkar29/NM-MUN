
// import React from "react";
// import { PinContainer } from "@/components/ui/3d-pin";


// export default function CoreComponent({ name, profile, image, link }) {
//   return (
//     <div className="flex items-center justify-center">
//       <PinContainer
//         title="LinkedIn"
//         href={link}
//         className="w-full"
//         containerClassName="w-full"
//       >
//         <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-full">
//           <h3 className="!pb-2 !m-0 font-bold text-base text-slate-100">
//             {name}
//           </h3>
//           <div className="text-base !m-0 !p-0 font-normal">
//             <span className="text-slate-500">{profile}</span>
//           </div>
//           <div className="flex-1 w-full mt-4 aspect-square relative rounded-lg overflow-hidden">
//             <img
//               src={image}
//               alt={name}
//               // fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//         </div>
//       </PinContainer>
//     </div>
//   );
// }


import { PinContainer } from "@/components/ui/3d-pin";

export default function CoreComponent({ name, profile, image, link }) {
  return (
    <div className="flex items-center justify-center w-full">
      <PinContainer 
        title="LinkedIn" 
        href={link}
        className="w-full"
        containerClassName="w-full"
      >
        <div className="flex flex-col tracking-tight text-slate-100/50 w-full">
          <h3 className="!pb-2 !m-0 font-bold text-base text-slate-100">
            {name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">{profile}</span>
          </div>
          <div className="flex-1 w-full mt-4 aspect-square relative rounded-lg overflow-hidden">
            <img
              src={image}
              alt={name}
              // fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

