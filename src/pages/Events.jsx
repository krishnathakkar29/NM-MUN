// import { ImagesSlider } from "@/compo nents/images-slider";
// import { motion } from "framer-motion";
// import React from "react";

// const images = [
//   "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// function Events() {
//   return (
//     <div className="max-h-screen w-full bg-[#0d0d0d] py-16 md:py-16 text-white">
//       <ImagesSlider className="h-[40rem]" images={images}>
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: -80,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.6,
//           }}
//           className="z-50 flex flex-col justify-center items-center"
//         >
//           <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
//             The hero section slideshow <br /> nobody asked for
//           </motion.p>
//           <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
//             <span>Join now →</span>
//             <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
//           </button>
//         </motion.div>
//       </ImagesSlider>
//     </div>
//   );
// }

// export default Events;

// import { ImagesSlider } from "@/components/images-slider";
// import { motion } from "framer-motion";
// import React from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const images = [
//   "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// function Events() {
//   return (
//     <div className="h-screen w-full bg-[#0d0d0d] pt-16 md:pt-16 text-white relative">
//       <ImagesSlider className="h-full" images={images}>
//         {({ handlePrevious, handleNext }) => (
//           <>
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: -80,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.6,
//               }}
//               className="z-50 flex flex-col justify-center items-center"
//             >
//               <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
//                 The hero section slideshow <br /> nobody asked for
//               </motion.p>
//               <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
//                 <span>Join now →</span>
//                 <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
//               </button>
//             </motion.div>
//             <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4 z-50">
//               <button
//                 onClick={handlePrevious}
//                 className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
//                 aria-label="Previous image"
//               >
//                 <FaChevronLeft size={24} />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
//                 aria-label="Next image"
//               >
//                 <FaChevronRight size={24} />
//               </button>
//             </div>
//           </>
//         )}
//       </ImagesSlider>
//     </div>
//   );
// }

// export default Events;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { ImagesSlider } from "@/components/images-slider";

// const images = [
//   "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// function Events() {
//   return (
//     <div className="h-screen w-full bg-[#0d0d0d] text-white relative overflow-hidden">
//       <ImagesSlider className="h-full" images={images}>
//         {({ handlePrevious, handleNext }) => (
//           <>
//             <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
//               <motion.div
//                 initial={{ opacity: 0, y: -80 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-center"
//               >
//                 <motion.p className="font-bold text-xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
//                   The hero section slideshow <br /> nobody asked for
//                 </motion.p>
//                 <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
//                   <span>Join now →</span>
//                   <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
//                 </button>
//               </motion.div>
//             </div>
//             <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4 z-30">
//               <button
//                 onClick={handlePrevious}
//                 className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
//                 aria-label="Previous image"
//               >
//                 <FaChevronLeft size={24} />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
//                 aria-label="Next image"
//               >
//                 <FaChevronRight size={24} />
//               </button>
//             </div>
//           </>
//         )}
//       </ImagesSlider>
//     </div>
//   );
// }

// export default Events;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, EffectFade } from "swiper/modules";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";

// const images = [
//   "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// export default function Events() {
//   return (
//     <div className="h-screen w-full">
//       <Swiper
//         modules={[Navigation, Autoplay, EffectFade]}
//         effect="fade"
//         navigation={{
//           prevEl: ".swiper-button-prev",
//           nextEl: ".swiper-button-next",
//         }}
//         autoplay={{
//           delay: 1500,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         speed={1000}
//         className="h-full w-full"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index} className="relative">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: `url(${image})` }}
//             />
//           </SwiperSlide>
//         ))}

//         {/* Custom Navigation Buttons */}
//         <button className="swiper-button-prev absolute bottom-8 left-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200">
//           <IoIosArrowBack size={24} className="text-white" />
//         </button>
//         <button className="swiper-button-next absolute bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200">
//           <IoIosArrowForward size={24} className="text-white" />
//         </button>
//       </Swiper>
//     </div>
//   );
// }

import { useRef } from "react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import AnimationWrapper from "@/components/AnimationWrapper";

const images = [
  "/events/unga.png",
  "/events/unhrc.png",
  "/events/uncsw.png",
  "/events/ipl.png",
];

export default function Events() {
  const swiperRef = useRef(null);

  return (
    <AnimationWrapper title="Events">
      <div className="min-h-screen py-20 bg-black">
        <h1 className="text-white text-4xl text-center mb-4 capitalize">
          NMCMUN Events
        </h1>
        <div className="h-screen w-full relative">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            navigation={{
              enabled: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            className="h-full w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </AnimationWrapper>
  );
}
