import { useState } from "react";

const About = () => {
  const [mainImage, setMainImage] = useState("/about/nmcollege.webp");
  const images = [
    "/about/nmcollege.webp",
    "/about/corridor.webp",
    "/about/nm.jpeg",
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white ">
      <main className="pt-32 md:pt-24">
        <div className="max-w-7xl mx-auto py-4 flex flex-col md:flex-row gap-8">
          <div className="px-8 w-full md:w-1/2 text-center md:text-left">
            <div className="element inline-block p-4 rounded-lg  text-center mb-4">
              <h1 className="text-5xl italic text-white">About</h1>
            </div>
            {/* College Title */}
            <h1 className="text-5xl font-serif  mb-5">NM College</h1>
            {/* Description */}
            <p className="text-base text-gray-500 leading-7 mb-8">
              SVKM's Narsee Monjee College of Commerce and Economics
              (Autonomous) is one of India's premier commerce institutions. It
              is affiliated to the University of Mumbai. Since 1964, NM has
              offered a wide range of courses, fostering the youth's academic
              and co-curricular growth through delightful experiences. In
              essence, NM is not just a place of learning; it is a vibrant
              community that nurtures creativity and continues to shape the
              future leaders of the business world.
            </p>
            {/* Know More Button */}
            <button className="element hover:bg-purple-800 text-white px-6 py-3 rounded-md text-base cursor-pointer">
              KNOW MORE
            </button>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6">
            <div className="h-80 overflow-hidden flex justify-center items-center ">
              <img src={mainImage} alt="Main Logo" className="w-full h-full " />
            </div>
            <div className="grid grid-cols-3 gap-6 mt-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-20 h-20 rounded-lg overflow-hidden shadow-sm cursor-pointer border border-transparent hover:border-blue-500 transition"
                  onClick={() => setMainImage(image)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
            {[
              { value: "3.42", label: "CGPA" },
              { value: '"A"', label: "NAAC Accredited" },
              { value: "4th", label: "AIR EWP Autonomous Colleges 2023-24" },
            ].map((stat, index) => (
              <div
                key={index}
                className="element rounded-xl px-6 py-4 flex items-center justify-between shadow-lg relative overflow-hidden group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-white">
                    {stat.value}
                  </span>
                  <div className="w-px h-14 bg-blue-300" />
                  <span className="text-xl text-white">{stat.label}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/about/people.webp"
                alt="Arthmos Team"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <div className="element rounded-lg inline-block py-4 px-6 mb-4">
                  <h2 className="text-4xl italic text-white">About</h2>
                </div>
                <h2 className="text-5xl font-bold mt-4">NMCMUN</h2>
                <p className="text-sm italic text-gray-400 mt-2">
                 #voiceyouropinion
                </p>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Kicked off in 2019 by a group of out-of-the-box thinkers who
                were passionate about the subtleties of statistics, NMCMUN is
                now at its 5<sup>th</sup> edition, emerging in all its grace and
                grandeur. We go beyond books and above the ordinary, with
                spontaneous and hands-on application of quantitative aptitude,
                management skills, financial capabilities, strategic thinking
                and data analysis. Thus, giving our 125+ student team the
                competitive edge is our priority at NMCMUN 2024!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
