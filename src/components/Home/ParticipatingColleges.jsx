import React from "react";

const colleges = [
  { id: 1, logo: "/colleges/dj.jpg", alt: "IIM College Logo" },
  { id: 2, logo: "/colleges/mithibai.jpg", alt: "Red Shield College Logo" },
  { id: 3, logo: "/colleges/hr.jpg", alt: "Red Fan College Logo" },
  { id: 4, logo: "/colleges/upg.jpg", alt: "Blue Shield College Logo" },
];

function ParticipatingColleges() {
  return (
    <div className=" bg-[#0d0d0d] pb-12 flex flex-col items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-white text-center font-normal mb-12">
          Past Participating Colleges
        </h1>
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
        </div>
      </div>
    </div>
  );
}

export default ParticipatingColleges;
