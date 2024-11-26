import React, { useState } from "react";
import logo from "../img/LogoBord.png";
import build from "../img/building.jpeg";
import group from "../img/group.webp"

const About = () => {
  const [mainImage, setMainImage] = useState(logo);

  const images = [logo, build, logo];
  const [isShowingVision, setIsShowingVision] = useState(false);

  const handleToggleContent = () => {
    setIsShowingVision((prevState) => !prevState);
  }
  return (
    <div className="min-h-screen w-full bg-black py-16   text-white">
      <div className="flex flex-wrap w-full bg-black text-white p-16">
        {/* Left Section */}
        <div className="w-full md:w-[45%] py-10 px-6">
          {/* About Header */}
          <div className="bg-purple-700 inline-block px-4 py-1  text-center mb-4">
            <h1 className="text-5xl italic text-white">About</h1>
          </div>
          {/* College Title */}
          <h1 className="text-5xl font-serif  mb-5">NM College</h1>
          {/* Description */}
          <p className="text-base text-gray-500 leading-7 mb-8">
            SVKM's Narsee Monjee College of Commerce and Economics (Autonomous)
            is one of India's premier commerce institutions. It is affiliated to
            the University of Mumbai. Since 1964, NM has offered a wide range of
            courses, fostering the youth's academic and co-curricular growth
            through delightful experiences. In essence, NM is not just a place
            of learning; it is a vibrant community that nurtures creativity and
            continues to shape the future leaders of the business world.
          </p>
          {/* Know More Button */}
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-md text-base cursor-pointer">
            KNOW MORE
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[55%] flex flex-col items-center justify-center py-10 px-6 h-[600px]">
          {/* Main Image */}
          <div className="w-50 h-50 overflow-hidden flex justify-center items-center ">
            <img
              src={mainImage}
              alt="Main Logo"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Image Grid */}
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
      <div className="flex justify-center items-center bg-black  gap-20">
        <div className="flex items-center bg-gradient-to-r from-purple-700 to-black text-white rounded-lg p-6 shadow-md m-4 border-2 border-slate-700">
          <span className="text-6xl ">3.42</span>
          <div className="w-px h-14 bg-purple-500 mx-4"></div>
          <span className="text-2xl">CGPA</span>
        </div>
        <div className="flex items-center bg-gradient-to-r from-purple-700 to-black text-white rounded-lg p-6 shadow-md m-4 border-2 border-slate-700">
          <span className="text-6xl ">"A"</span>
          <div className="w-px h-14 bg-purple-500 mx-4"></div>
          <span className="text-2xl">NAAC Accredited</span>
        </div>
        <div className="flex items-center bg-gradient-to-r from-purple-700 to-black text-white rounded-lg p-6 shadow-md m-4 border-2 border-slate-700">
          <span className="text-6xl ">4th</span>
          <div className="w-px h-14 bg-purple-500 mx-4"></div>
          <span className="text-2xl">AIR EWP Autonomous Colleges 2023-24</span>
        </div>
      </div>
    
  <div className="bg-black text-white my-8">
  <div className="flex flex-col md:flex-row items-center justify-center py-8">
    <div className="w-full md:w-1/2 px-4">
      <img
        src={group}
        alt="Arthmos Group Photo"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
    <div className="w-full md:w-1/3 px-6 mt-8 md:mt-0">
      <div className="text-center mb-8">
      <div className="bg-purple-700 inline-block px-4 py-1  text-center ">
            <h1 className="text-5xl italic text-white">About</h1>
          </div>
        <h1 className="text-5xl font-extrabold mt-4 mb-2">ARTHMÓS</h1>
        <p className="text-sm italic text-gray-400">~ A Cognitive Expedition ~</p>
      </div>
      <p className="text-base text-gray-500 leading-7 mb-8">
        Kicked off in 2019 by a group of out-of-the-box thinkers who were
        passionate about the subtleties of statistics, Arthmos is now at its
        5th edition, emerging in all its grace and grandeur. We go beyond
        books and above the ordinary, with spontaneous and hands-on
        application of quantitative aptitude, management skills, financial
        capabilities, strategic thinking and data analysis. Thus, giving our
        125+ student team the competitive edge is our priority at Arthmos
        2024!
      </p>
      <div className="flex items-center justify-evenly ">
        <div
          className={`flex items-center bg-gradient-to-r from-purple-700 to-black text-white rounded-lg p-2 shadow-md m-4 border-2 border-slate-700 cursor-pointer ${
            !isShowingVision ? 'bg-opacity-100' : 'bg-opacity-50'
          }`}
          onClick={handleToggleContent}
        >
          <span className="text-2xl font-bold">Mission</span>
        </div>
        <div
          className={`flex items-center bg-gradient-to-r from-purple-700 to-black text-white rounded-lg p-2 shadow-md m-4 border-2 border-slate-700 cursor-pointer  ${
            isShowingVision ? 'bg-opacity-100' : 'bg-opacity-50'
          }`}
          onClick={handleToggleContent}
        >
          <span className="text-2xl font-bold">Vision</span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-700 to-black rounded-lg p-4 mt-4">
        {isShowingVision ? (
          <p className="text-sm leading-7">
            To offer every individual with the opportunity and ability to
            innovate in their educational journey, as well as to motivate
            them to grow, connect, and network themselves in the world of
            business and finance.
          </p>
        ) : (
          <p className="text-sm leading-7">
            Arthmos aims to provide a transformative educational experience
            that empowers individuals to excel in the realms of business and
            finance. By fostering a dynamic and inclusive community, we
            strive to nurture the next generation of leaders, innovators, and
            strategic thinkers.
          </p>
        )}
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default About;