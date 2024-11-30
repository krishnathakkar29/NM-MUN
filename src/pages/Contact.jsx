import { FaEnvelope, FaUsers } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white py-24">
      <div className=" flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full h-full flex flex-col lg:flex-row lg:h-screen ">
          {/* Left Content */}
          <div className="flex-1 lg:overflow-y-auto lg:pr-8 order-2 md:order-1 md:px-12">
            <h2 className="text-3xl sm:text-4xl font-bold italic mb-6 sm:mb-2">
              Get in touch today
            </h2>
            <p className="mb-6 text-slate-500 text-base sm:text-lg max-w-2xl">
              We value your feedback and inquiries. Whether you have a question
              about our Festival, need assistance, or just want to say hello,
              we're here to help. Feel free to reach out to us, and we'll get
              back to you as soon as possible.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold italic mb-6">
              Contact Information
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {[
                // {
                //   icon: FaEnvelope,
                //   title: "For Partnerships:",
                //   email: "marketing.arithmos@gmail.com",
                //   highlight: true,
                // },
                // {
                //   icon: FaUsers,
                //   title: "For Participation:",
                //   email: "hospi.arithmos@gmail.com",
                // },
                {
                  icon: FaEnvelope,
                  title: "For Queries:",
                  email: "info@nmarithmos.org",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-slate-700 w-full sm:w-4/5 p-4 rounded-md hover:border-purple-500 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center space-x-4 mb-2">
                    <item.icon className="text-purple-500" size={40} />
                    <h3 className="text-lg sm:text-xl font-medium">
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className={`text-base sm:text-lg ${
                      item.highlight ? "text-purple-700" : "text-gray-400"
                    }`}
                  >
                    {item.email}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 mt-8 lg:mt-0 relative order-1 md:order-2 mb-12 md:mb-0">
            <div className="w-full h-64 sm:h-96 lg:h-full relative rounded-lg overflow-hidden">
              <img
                src="/about/handshake.jpg"
                alt="Handshake"
                layout="fill"
                // objectFit="cover"
                className="object-cover w-full h-full md:h-[80vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
