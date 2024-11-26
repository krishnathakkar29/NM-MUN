import React from "react";
import { Tabs } from "../tabs";

const DummyContent = () => {
  return (
    <img
      src="/highlight.webp"
      alt="dummy image"
      className="object-cover w-full h-full absolute inset-0 rounded-xl"
      //   className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const tabs = [
  {
    title: "MUN Conference",
    value: "MUN Conference",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>MUN Conference</p>
        <img
          src="/unplugged/conference.png"
          alt="dummy image"
          className="object-cover w-full h-full absolute inset-0 rounded-xl"
        />
      </div>
    ),
  },
  {
    title: "General Meeting",
    value: "General Meeting",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>General Meeting</p>
        <img
          src="/unplugged/one.png"
          alt="dummy image"
          className="object-cover w-full h-full absolute inset-0 rounded-xl"
        />
      </div>
    ),
  },
  {
    title: "IPL Auction",
    value: "IPL Auction",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>IPL Auction</p>
        <img
          src="/unplugged/iplauction.png"
          alt="dummy image"
          className="object-cover w-full h-full absolute inset-0 rounded-xl"
        />
      </div>
    ),
  },
];
function Unplugged() {
  return (
    <div className=" bg-[#0d0d0d] pt-16 pb-24">
      <div className="text-center">
        <h1 className="text-5xl text-white mb-4">Arithmos Unplugged</h1>
        <p className="text-xl text-slate-400 max-w-4xl mx-auto">
          Arithmós organizes and partakes in a multitude of ingenious and
          exciting activities. From informal and innovative events to stalls and
          carnival, Arithmós presents a diverse array of engaging experiences.
        </p>
      </div>

      <div className="h-[20rem] md:h-[37rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-16">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

export default Unplugged;
