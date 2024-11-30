import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Separator } from "../ui/separator";
import image1 from "/highlights/1.jpg";
import image2 from "/highlights/2.jpg";
import image3 from "/highlights/3.jpg";
import image4 from "/highlights/4.jpg";
import image5 from "/highlights/5.jpg";
import image6 from "/highlights/6.jpg";
import image7 from "/highlights/7.jpg";
import image8 from "/highlights/8.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

function Highlights() {
  return (
    <div className=" bg-[#0d0d0d] py-16">
      {/* <div className="w-[90%] mx-auto py-4 flex items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900  border-[1px] border-white rounded-lg"> */}
      <div className="w-[90%] mx-auto py-4 flex items-center justify-center element border-[1px] border-white rounded-lg">
        <h1 className="text-4xl font-serif text-white text-center tracking-wider">
          NMC MUN HIGHLIGHTS
        </h1>
      </div>

      {/* Main Content */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         
          <Card className="bg-white/5 border-0 overflow-hidden">
            <CardContent className="p-0">
              <img
                src="/highlight.webp"
                alt="Arithmós Event"
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>

        
          <div className="space-y-8 py-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Arithmós exploring precision & form
              </h2>
              <p className="text-gray-300 text-lg">
                We embody a convergence of academic brilliance with strategic
                insight by fostering dynamic experiences through our events and
                summits with esteemed speakers.
              </p>
            </div>

            <div className="space-y-4">
              <NavigationLink
                icon={<Calendar className="w-6 h-6" />}
                text="Events"
              />
              <NavigationLink
                icon={<Trophy className="w-6 h-6" />}
                text="Arithmós Summit"
              />
              <NavigationLink
                icon={<Users className="w-6 h-6" />}
                text="Invitation Process"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div id="gallery" className="relative flex items-center justify-center">
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: ".button-prev",
            nextEl: ".button-next",
          }}
          pagination={{ clickable: true }}
          spaceBetween={2}
          speed={1000}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          centeredSlides
          effect={"coverflow"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 750,
            disableOnInteraction: false,
          }}
          className="h-[500px] w-[99%] mt-20 rounded-xl"
        >
          {images.map((slide, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <img
                src={slide}
                alt="Event Image"
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-ESummitBlue-900 rounded-full flex justify-center items-center cursor-pointer z-10 button-prev text-white">
            <IoIosArrowBack />
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-ESummitBlue-900 rounded-full flex justify-center items-center cursor-pointer z-10 button-next text-white">
            <IoIosArrowForward />
          </div>
        </Swiper>
      </div>
    </div>
  );
}

const NavigationLink = ({ icon, text }) => {
  return (
    <div className="group cursor-pointer">
      <div className="flex items-center justify-between p-4 rounded-lg">
        <div className="flex items-center space-x-4 text-gray-200">
          {icon}
          <span className="text-white text-lg">{text}</span>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Highlights;
