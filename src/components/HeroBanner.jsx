import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function HeroBanner() {
  const slides = [
    {
      id: 1,
      title: "World Cup Qualifying Event 2024",
      subtitle: "Bihar Wushu Association",
      gradient: "from-blue-200 via-blue-100 to-purple-100"
    },
    {
      id: 2,
      title: "National Championship 2024",
      subtitle: "Join us for the annual championship",
      gradient: "from-blue-200 via-blue-100 to-purple-100"
    },
    {
      id: 3,
      title: "International Competition",
      subtitle: "Represent Bihar on the world stage",
      gradient: "from-blue-200 via-blue-100 to-purple-100"
    }
  ]

  return (
    <div className="relative w-full aspect-video">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`relative w-full h-full bg-gradient-to-r ${slide.gradient} flex items-center justify-center`}>
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gray-400"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white drop-shadow-2xl mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-3xl lg:text-4xl text-white drop-shadow-lg">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Wavy Separator */}
      <div className="absolute bottom-[-30px] md:bottom-[-35px] lg:bottom-[-45px] xl:bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24 md:h-32">
          <path d="M0,60 Q360,20 720,60 T1440,60 L1440,120 L0,120 Z" fill="#017cc2" />
        </svg>
      </div>
      
      {/* Custom Swiper Navigation Styles */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(255, 255, 255, 0.3);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 24px;
          font-weight: bold;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: white;
        }
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 40px;
            height: 40px;
          }
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default HeroBanner
