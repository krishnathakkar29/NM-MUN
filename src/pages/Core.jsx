// import CoreComponent from "@/components/Core/Core";
// import React from "react";

// const topCore = [
//   {
//     name: "Meet Thacker",
//     profile: "Marketing",
//     image: "/core/Meet.jpg",
//     link: "",
//   },
//   {
//     name: "Meet Thacker",
//     profile: "Marketing",
//     image: "/core/Meet.jpg",
//     link: "",
//   },
//   {
//     name: "Meet Thacker",
//     profile: "Marketing",
//     image: "/core/Meet.jpg",
//     link: "",
//   },
//   {
//     name: "Meet Thacker",
//     profile: "Marketing",
//     image: "/core/Meet.jpg",
//     link: "",
//   },
// ];

// function Core() {
//   return (
//     <div className="min-h-screen w-full bg-[#0d0d0d]">
//       <div className="text-white py-32 px-4">
//         <h1 className="text-4xl font-bold text-center ">Top Core</h1>
//         <div className="max-w-7xl mx-auto p-8 rounded-lg">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {topCore.map((item, index) => (
//               <CoreComponent
//                 key={index}
//                 image={item.image}
//                 link={item.link}
//                 name={item.name}
//                 profile={item.profile}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Core;

import CoreComponent from "@/components/Core/Core";
import React from "react";

const topCore = [
  {
    name: "Meet Thacker",
    profile: "Marketing",
    image: "/core/Meet.jpg",
    link: "",
  },
  {
    name: "Meet Thacker",
    profile: "Marketing",
    image: "/core/Meet.jpg",
    link: "",
  },
  {
    name: "Meet Thacker",
    profile: "Marketing",
    image: "/core/Meet.jpg",
    link: "",
  },
  {
    name: "Meet Thacker",
    profile: "Marketing",
    image: "/core/Meet.jpg",
    link: "",
  },
];

function Core() {
  return (
    <div className="min-h-screen w-full bg-[#0d0d0d]">
      <div className="text-white py-16 md:py-32 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Top Core
        </h1>
        <div className="max-w-[90rem] mx-auto p-4 md:p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {topCore.map((item, index) => (
              <CoreComponent
                key={index}
                image={item.image}
                link={item.link}
                name={item.name}
                profile={item.profile}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Core;
