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

import AnimationWrapper from "@/components/AnimationWrapper";
import CoreComponent from "@/components/Core/Core";
import React from "react";

const topCore = [
  {
    name: "Karan Ravani",
    profile: "Secretary General",
    image: "/core/karan.png",
    link: "https://www.linkedin.com/in/karan-ravani-ca?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Aradhya Jain",
    profile: "Deputy Secretary General",
    image: "/core/Aradhya.jpg",
    link: "https://www.linkedin.com/in/aradhya-jain-14b168249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Sheyana Kabra",
    profile: "Director General",
    image: "/core/Sieyana.jpg",
    link: "https://www.linkedin.com/in/sieyana-kabra-b5a3a3258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Anuj Sancheti",
    profile: "Charge'D Affairs",
    image: "/core/Anuj.jpeg",
    link: "https://www.linkedin.com/in/anuj-sancheti-b4a111287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const core = [
  {
    name: "Yashvi Mistry",
    profile: "HOD Social Media",
    image: "/core/Yashvi.jpg",
    link: "https://www.linkedin.com/in/yashvi-mistry-725136224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Vidhi Pathak",
    profile: "HOD Social Media",
    image: "/core/Vidhi.jpeg",
    link: "https://www.linkedin.com/in/vidhi-pathak-2051ab265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Meet Thacker",
    profile: "HOD Marketing & Cafeteria",
    image: "/core/Meet.jpg",
    link: "https://www.linkedin.com/in/meet-thacker-2696b825a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Piyush Suchak",
    profile: "HOD Marketing & Cafeteria",
    image: "/core/Piyush.jpg",
    link: "https://www.linkedin.com/in/piyushsuchak?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Niharika Bora",
    profile: "HOD Public Relations",
    image: "/core/Niharika.jpeg",
    link: "https://www.linkedin.com/in/niharika-bora-8b601a2b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Disha Shah",
    profile: "HOD Public Relations",
    image: "/core/Disha.jpg",
    link: "https://www.linkedin.com/in/disha-shah-2aaa70229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Aarushi Nandecha",
    profile: "HOD Delegate Affairs",
    image: "/core/Aarushi.jpeg",
    link: "https://www.linkedin.com/in/aarushi-nandecha-9868b0290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Namya Sharma",
    profile: "HOD Delegate Affairs",
    image: "/core/Namya.jpg",
    link: "https://www.linkedin.com/in/namya-sharma-201710287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Kyra Manchanda",
    profile: "HOD Conference Planning",
    image: "/core/Kyra.jpeg",
    link: "https://www.linkedin.com/in/kyra-manchanda-891b5a279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Rahat Mhatre",
    profile: "HOD Events & Management",
    image: "/core/Rahat.jpg",
    link: "https://www.linkedin.com/in/rahat-mhatre-147a3a319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Ishika Giri",
    profile: "HOD Events & Management",
    image: "/core/Ishika.jpg",
    link: "https://www.linkedin.com/in/ishika-giri-b21b92307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Sushruti Mishra",
    profile: "HOD Executive Board Outreach",
    image: "/core/Sushruti.png",
    link: "https://www.linkedin.com/in/sushruti-mishra-8b7b3921a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Yash Shah",
    profile: "HOD Executive Board Outreach",
    image: "/core/Yash.jpg",
    link: "https://www.linkedin.com/in/yash-shah-a97896219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Devansh Agarwal",
    profile: "HOD Security & Logistics",
    image: "/core/Devansh.jpg",
    link: "https://www.linkedin.com/in/devansh-agrawal-599073284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Anvesha Garg",
    profile: "HOD Security & Logistics",
    image: "/core/Anvesha.jpg",
    link: "https://www.linkedin.com/in/anvesha-garg-167931292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Akanksha Kulkarni",
    profile: "HOD Research & Editorials",
    image: "/core/Akanksha.jpg",
    link: "https://www.linkedin.com/in/akanksha-kulkarni-698115288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Shubham Gupta",
    profile: "HOD Research & Editorials",
    image: "/core/Shubham.jpg",
    link: "https://www.linkedin.com/in/shubham-gupta-6a9bba275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

function Core() {
  return (
    <AnimationWrapper title="Core">
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

          <h1 className="text-3xl md:text-4xl font-bold text-center">Core</h1>
          <div className="max-w-[90rem] mx-auto p-4 md:p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 ">
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
    </AnimationWrapper>
  );
}

export default Core;
