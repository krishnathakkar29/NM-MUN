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
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">NMC MUN</h1>
        <p className="mt-4 text-xl md:text-2xl">
          The place where <em className="font-serif italic">ideation</em> meets{" "}
          <em className="font-serif italic">execution</em>
        </p>
        {/* <button className="mt-8 px-8 py-3 border-2 border-white rounded-full text-lg uppercase"> */}
        <button className="shadow-[inset_0_0_0_2px_#616467] text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-white/90 hover:text-black dark:text-neutral-200 transition duration-200 mt-8">
          Events
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
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
      </div>
    </main>
  );
}

export default Hero;
