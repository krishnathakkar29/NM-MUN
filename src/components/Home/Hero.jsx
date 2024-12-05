import React from "react";
import bgHome from "/bghome.jpg";
function Hero() {
  return (
    <main
      className="pt-32 md:pt-24 flex flex-col items-center justify-center h-screen text-center text-white px-4 font-serif"
      style={{
        backgroundImage: `url(${bgHome})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        zIndex: 100,
      }}
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          NMC MUN
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-center">
          The place where <em className="font-serif italic">ideation</em> meets{" "}
          <em className="font-serif italic">execution</em>
        </p>
        {/* <button className="mt-8 px-8 py-3 border-2 border-white rounded-full text-lg uppercase"> */}
        <button className="shadow-[inset_0_0_0_2px_#616467] text-center text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-white/90 hover:text-black dark:text-neutral-200 transition duration-200 mt-8 mb-6">
          Events
        </button>
      </div>

      <p className="text-3xl m-6">
        Supported and <span className="text-blue-400">trusted</span> by
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6 mt-4 mb-20 md:mb-0">
        <div className="flex justify-center items-center w-36">
          <img
            src="/sponsors/media.png"
            className="max-w-full max-h-16 object-contain"
            alt="Logo 1"
          />
        </div>
        <div className="flex justify-center items-center w-36">
          <img
            src="/sponsors/redbull.jpg"
            className="max-w-full max-h-16 object-contain"
            alt="Logo 2"
          />
        </div>
        <div className="flex justify-center items-center w-36">
          <img
            src="/sponsors/unstop.jpg"
            className="max-w-full max-h-16 object-contain"
            alt="Logo 3"
          />
        </div>
        <div className="flex justify-center items-center w-36">
          <img
            src="/sponsors/bakery.png"
            className="max-w-full max-h-16 object-contain"
            alt="Logo 4"
          />
        </div>
        <div className="flex justify-center items-center w-22">
          <img
            src="/sponsors/masala.jpg"
            className="min-w-full max-h-16 object-contain"
            alt="Logo 4"
          />
        </div>
      </div>
    </main>
  );
}

export default Hero;
