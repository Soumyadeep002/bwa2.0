import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import saiLogo from '../assets/imgs/affilation/sai.png'
import myasLogo from '../assets/imgs/affilation/myas.png'
import indOlympicLogo from '../assets/imgs/affilation/ind-olympic.png'
import iwfLogo from '../assets/imgs/affilation/iwf.png'
import biharGovtLogo from '../assets/imgs/affilation/bihar-govt.png'
import boaLogo from '../assets/imgs/affilation/BOA.png'
import waiLogo from '../assets/imgs/affilation/wai.png'

function Affiliation() {
  const affiliations = [
    { name: 'Wushu Association of India', logo: waiLogo },
    { name: 'Bihar Government', logo: biharGovtLogo },
    { name: 'Bihar Olympic Association', logo: boaLogo },
    { name: 'SAI', logo: saiLogo },
    { name: 'International Wushu Federation', logo: iwfLogo },
    { name: 'Indian Olympic Association', logo: indOlympicLogo },
    { name: 'Ministry of Youth Affairs & Sports', logo: myasLogo }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">OUR AFFILIATION</h2>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          className="affiliation-swiper"
        >
          {affiliations.map((affiliation, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 h-32 flex flex-col items-center justify-center p-4 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-20 h-20 flex items-center justify-center mb-2">
                  <img
                    src={affiliation.logo}
                    alt={affiliation.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-700 text-center mt-2">{affiliation.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Affiliation

