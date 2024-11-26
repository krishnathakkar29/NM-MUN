import React from "react";
import bgHome from "/bghome.jpg";
function Hero() {
  return (
    <main
      className="flex flex-col items-center justify-center h-screen text-center text-white px-4 font-serif"
      style={{
        backgroundImage: `url(${bgHome})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        zIndex: 100,
      }}
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">NM MUN</h1>
        <p className="mt-4 text-xl md:text-2xl">
          The place where <em className="font-serif italic">ideation</em> meets{" "}
          <em className="font-serif italic">execution</em>
        </p>
        <button className="mt-8 px-8 py-3 border-2 border-white rounded-full text-lg uppercase">
          Events
        </button>
      </div>

      <div className="mt-16">
        <p className="text-lg">
          Supported and <span className="text-blue-400">trusted</span> by
        </p>
        <div className="flex justify-center mt-4 space-x-6">
          <img src="/hero1.png" width={50} height={50} alt="Logo 1" />
          <img src="/hero1.png" width={50} height={50} alt="Logo 2" />
          <img src="/hero1.png" width={50} height={50} alt="Logo 3" />
          <img src="/hero1.png" width={50} height={50} alt="Logo 4" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
