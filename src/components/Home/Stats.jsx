// import React from "react";
// import { Users, Eye, Building, Calendar } from "lucide-react";

// function Stats() {
//     // <div className="bg-gradient-to-b from-purple-800 to-purple-900 p-6 rounded-2xl shadow-lg text-center aspect-square flex flex-col justify-center items-center">
//   return (
//     <div className="bg-[#0d0d0d] text-white py-16 px-4">
//      {/* <div className="bg-[#C1AA90]  text-white py-16 px-4"> */}
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
//         <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 md:pt-32">
//           <h2 className="text-4xl font-serif font-bold mb-4">
//             Let Our Numbers
//             <br />
//             Do The Bidding
//           </h2>
//           <p className="text-lg text-gray-300">
//             Arithmós, from its inception, has experienced remarkable growth.
//             What began as a fledgling concept has flourished into a thriving
//             Intercollegiate Management and Strategy Festival at NM College.
//           </p>
//         </div>
//         <div className="lg:w-1/2 flex flex-wrap justify-center items-center">
//           <div className="w-full sm:w-1/2 p-2">
//             <Card
//               icon={<Users size={55} />}
//               number="20,000+"
//               label="Footfall"
//             />
//           </div>
//           <div className="w-full sm:w-1/2 p-2 sm:mt-16">
//             <Card
//               icon={<Eye size={55} />}
//               number="15,00,000+"
//               label="Event Page Views"
//             />
//           </div>
//           <div className="w-full sm:w-1/2 p-2 sm:-mt-16">
//             <Card
//               icon={<Building size={55} />}
//               number="200+"
//               label="Colleges"
//             />
//           </div>
//           <div className="w-full sm:w-1/2 p-2">
//             <Card icon={<Calendar size={55} />} number="17+" label="Events" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Card({ icon, number, label }) {
//   return (
//     //  <div className="bg-gradient-to-b from-purple-800 to-purple-900 p-6 rounded-2xl shadow-lg text-center aspect-square flex flex-col justify-center items-center">
//      <div className="bg-gradient-to-b from-[#40372F] via-[#3A3126] to-[#1D1915] p-6 rounded-2xl shadow-sm text-center aspect-square flex flex-col justify-center items-center shadow-white">
//       {/* <div className="text-white mb-4 bg-purple-700 p-3 rounded-full h-20 w-20 flex items-center justify-center"> */}
//       <div className="text-white mb-4   p-3 rounded-full h-28 w-28 flex items-center justify-center">
//         {icon}
//       </div>
//       <h3 className="text-3xl font-bold mb-1">{number}</h3>
//       <p className="text-sm text-white">{label}</p>
//     </div>
//   );
// }

// export default Stats;

// function Stats() {
//   return (
//     <div className="bg-[#0d0d0d] text-white py-16 px-4">
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
//         <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 md:pt-32">
//           <h2 className="text-4xl font-serif font-bold mb-4">
//             Let Our Numbers
//             <br />
//             Do The Bidding
//           </h2>
//           <p className="text-lg text-gray-300">
//             Arithmós, from its inception, has experienced remarkable growth.
//             What began as a fledgling concept has flourished into a thriving
//             Intercollegiate Management and Strategy Festival at NM College.
//           </p>
//         </div>
//         <div className="lg:w-1/2 flex flex-wrap justify-center items-center">
//           <div className="w-full sm:w-1/2 p-2">
//             <StatImage
//               src="/placeholder.svg?height=300&width=300"
//               alt="Footfall"
//               number="20,000+"
//               label="Footfall"
//             />
//           </div>
//           <div className="w-full sm:w-1/2 p-2 sm:mt-16">
//             <StatImage
//               src="/placeholder.svg?height=300&width=300"
//               alt="Event Page Views"
//               number="15,00,000+"
//               label="Event Page Views"
//             />
//           </div>
//           <div className="w-full sm:w-1/2 p-2 sm:-mt-16">
//             <StatImage
//               src="/placeholder.svg?height=300&width=300"
//               alt="Colleges"
//               number="200+"
//               label="Colleges"
//             />
//           </div>
//           <div className="w-full sm:w-1/2 p-2">
//             <StatImage
//               src="/placeholder.svg?height=300&width=300"
//               alt="Events"
//               number="17+"
//               label="Events"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function StatImage({ src, alt, number, label }) {
//   return (
//     <div className="bg-gradient-to-r from-black via-[#0d1b2a] to-[#275a7a] p-6 rounded-2xl shadow-sm text-center aspect-square flex flex-col justify-center items-center shadow-white">
//       <div className="mb-4 h-28 w-28 relative">
//         <img
//           src={src}
//           alt={alt}
//           // layout="fill"
//           // objectFit="cover"
//           className="rounded-full object-cover"
//         />
//       </div>
//       <h3 className="text-3xl font-bold mb-1">{number}</h3>
//       <p className="text-sm text-gray-200">{label}</p>
//     </div>
//   );
// }

// export default Stats;


function Stats() {
  return (
    <div className="bg-[#0d0d0d] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 md:pt-32">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Let Our Numbers
            <br />
            Do The Bidding
          </h2>
          <p className="text-lg text-gray-300">
            Arithmós, from its inception, has experienced remarkable growth.
            What began as a fledgling concept has flourished into a thriving
            Intercollegiate Management and Strategy Festival at NM College.
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-wrap justify-center items-center">
          <div className="w-full sm:w-1/2 p-2">
            <StatImage src="/stats/footfall.png" alt="Footfall Statistic" />
          </div>
          <div className="w-full sm:w-1/2 p-2 sm:mt-16">
            <StatImage src="/stats/views.png" alt="Event Page Views Statistic" />
          </div>
          <div className="w-full sm:w-1/2 p-2 sm:-mt-16">
            <StatImage src="/stats/colleges.png" alt="Colleges Statistic" />
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <StatImage src="/stats/colleges.png" alt="Events Statistic" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatImage({ src, alt }) {
  return (
    <div className="w-full aspect-square relative">
      <img
        src={src}
        alt={alt}
        layout="fill"
        // objectFit="contain"
        className="rounded-lg object-contain"
      />
    </div>
  );
}

export default Stats;
