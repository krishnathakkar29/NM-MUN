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
    name: "Karan Ravani",
    profile: "Secretary General",
    image: "/core/karan.png",
    link: "",
  },
  {
    name: "Aradhya Jain",
    profile: "Deputy Secretary General",
    image: "/core/Aradhya.jpg",
    link: "",
  },
  {
    name: "Sheyana Kabra",
    profile: "Director General",
    image: "/core/Sieyana.jpg",
    link: "",
  },
  {
    name: "Anuj Sancheti",
    profile: "Charge'D Affairs",
    image: "/core/Anuj.jpeg",
    link: "",
  },
];

const core = [
  {
    name: "Yashvi Mistry",
    profile: "HOD Social Media",
    image: "/core/Yashvi.jpg",
    link: "",
  },
  {
    name: "Vidhi Pathak",
    profile: "HOD Social Media",
    image: "/core/Vidhi.jpeg",
    link: "",
  },
  {
    name: "Meet Thacker",
    profile: "HOD Marketing & Cafeteria",
    image: "/core/Meet.jpg",
    link: "",
  },
  {
    name: "Piyush Suchak",
    profile: "HOD Marketing & Cafeteria",
    image: "/core/Piyush.jpg",
    link: "",
  },
  {
    name: "Niharika Bora",
    profile: "HOD Public Relations",
    image: "/core/Niharika.jpeg",
    link:""
  },
  {
    name: "Disha Shah",
    profile: "HOD Public Relations",
    image: "/core/Disha.jpg",
    link:""
  },
  {
    name: "Aarushi Nandecha",
    profile: "HOD Delegate Affairs",
    image: "/core/Aarushi.jpeg",
    link:""
  },
  {
    name: "Namya Sharma",
    profile: "HOD Delegate Affairs",
    image: "/core/Namya.jpg",
    link:""
  },
  {
    name: "Kyra Manchanda",
    profile: "HOD Conference Planning",
    image: "/core/Kyra.jpeg",
    link:""
  },
  {
    name: "Rahat Mhatre",
    profile: "HOD Events & Management",
    image: "/core/Rahat.jpg",
    link:""
  },
  {
    name: "Ishika Giri",
    profile: "HOD Conference Planning",
    image: "/core/Ishika.jpg",
    link:""
  },
  {
    name: "Sushruti Mishra",
    profile: "HOD Executive Board Outreach",
    image: "/core/Sushruti.png",
    link:""
  },
  {
    name: "Yash Shah",
    profile: "HOD Executive Board Outreach",
    image: "/core/Yash.jpg",
    link:""
  },
  {
    name: "Devansh Agarwal",
    profile: "HOD Security & Outreach",
    image: "/core/Devansh.jpg",
    link:""
  },
  {
    name: "Anvesha Garg",
    profile: "HOD Security & Outreach",
    image: "/core/Anvesha.jpg",
    link:""
  },
  {
    name: "Akanksha Kulkarni",
    profile: "HOD Research & Editorials",
    image: "/core/Akanksha.jpg",
    link:""
  },
  {
    name: "Shubham Gupta",
    profile: "HOD Research & Editorials",
    image: "/core/Shubham.jpg",
    link:""
  },
];

function Core() {
  return (
    <div className="min-h-screen w-full bg-[#0d0d0d]">
      <div className="text-white py-16 md:py-32 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Top Core</h1>
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

        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Core
        </h1>
        <div className="max-w-[90rem] mx-auto p-4 md:p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {core.map((item, index) => (
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
