import React from 'react';
import { FaEnvelope, FaUsers } from 'react-icons/fa';
import handshake from "../img/handshake.jpg"
const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-black py-16   text-white">
    <div className="flex bg-black text-white p-14 md:px-20 md:m-14">
      {/* Left Content */}
      <div className="flex-1 ml-10">
        <h2 className="text-4xl font-bold italic mb-10">Get in touch today</h2>
        <p className="mb-6 text-slate-500 w-3/4 text-lg">
          We value your feedback and inquiries. Whether you have a question
          about our Festival, need assistance, or just want to say hello, we're
          here to help. Feel free to reach out to us, and we'll get back to you
          as soon as possible.
        </p>

        {/* Contact Information Sections */}
        <h2 className="text-3xl font-bold italic mb-6">Contact Information </h2>

        <div className="space-y-8">
          <div className="border border-slate-700 w-4/5 h-auto p-4 rounded-md hover:border-purple-500 hover:scale-95 transition-all">
            <div className="flex items-center space-x-4 mb-2">
              <FaEnvelope className="text-purple-500" size={50} />
              <h3 className="text-xl">For Partnerships:</h3>
            </div>
            <p className="text-purple-700 text-lg">marketing.arithmos@gmail.com</p>
          </div>

          <div className="border border-slate-700 w-4/5 h-auto p-4 rounded-md hover:border-purple-500 hover:scale-95 transition-all">
            <div className="flex items-center space-x-4 mb-2">
              <FaUsers className="text-purple-500" size={50} />
              <h3 className="font-medium">For Participation:</h3>
            </div>
            <p className="text-gray-400">hospi.arithmos@gmail.com</p>
          </div>

          <div className="border border-slate-700 w-4/5 h-auto p-4 rounded-md hover:border-purple-500 hover:scale-95 transition-all">
            <div className="flex items-center space-x-4 mb-2">
              <FaEnvelope className="text-purple-500" size={50} />
              <h3 className="font-medium">For Any Other Queries:</h3>
            </div>
            <p className="text-gray-400">info@nmarithmos.org</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
     <div className="flex-1 relative">
     <img
       src={handshake}
       alt="Handshake"
       className="absolute top-0 right-[20%] w-3/5 h-full object-cover rounded-lg"
     />
     </div>
    </div>
    </div>
   );
};

export default Contact;