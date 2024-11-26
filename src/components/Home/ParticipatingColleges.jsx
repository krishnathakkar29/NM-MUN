import React from "react";

const colleges = [
  { id: 1, logo: "/iim.png", alt: "IIM College Logo" },
  { id: 2, logo: "/iim.png", alt: "Red Shield College Logo" },
  { id: 3, logo: "/iim.png", alt: "Red Fan College Logo" },
  { id: 4, logo: "/iim.png", alt: "Blue Shield College Logo" },
  {
    id: 5,
    logo: "/iim.png",
    alt: "Yellow Castle College Logo",
  },
  { id: 6, logo: "/iim.png", alt: "Blue Wave College Logo" },
];

function ParticipatingColleges() {
  return (
    <div className="py-16 bg-[#0d0d0d] flex flex-col items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto pb-4">
          {colleges.map((college) => (
            <div
              key={college.id}
              className="w-24 h-24 flex items-center justify-center bg-white"
            >
              <img
                src={college.logo}
                alt={college.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          <h1 className="text-4xl text-white text-center font-normal mb-12">
            Past Participating Colleges
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ParticipatingColleges;
