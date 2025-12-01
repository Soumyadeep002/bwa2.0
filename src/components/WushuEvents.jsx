import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import nationalEvent1 from '../assets/imgs/events/national/d8ixeuopdjlhkilridw1.webp'
import nationalEvent2 from '../assets/imgs/events/national/tkdtmmqfemvqmwlgztnx.webp'
import stateEvent1 from '../assets/imgs/events/state/state1.jpg'
import stateEvent2 from '../assets/imgs/events/state/state2.jpg'
import stateEvent3 from '../assets/imgs/events/state/state3.jpg'

function WushuEvents() {
  const [activeTab, setActiveTab] = useState('national')

  // National event images
  const nationalEvents = [
    { id: 1, image: nationalEvent1 },
    { id: 2, image: nationalEvent2 }
  ]

  // State event images
  const stateEvents = [
    { id: 1, image: stateEvent1 },
    { id: 2, image: stateEvent2 },
    { id: 3, image: stateEvent3 }
  ]

  const currentEvents = activeTab === 'national' ? nationalEvents : stateEvents

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">WUSHU EVENTS</h2>
        
        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('national')}
            className={`px-8 py-2 font-semibold ${
              activeTab === 'national'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            National
          </button>
          <button
            onClick={() => setActiveTab('state')}
            className={`px-8 py-2 font-semibold ${
              activeTab === 'state'
                ? 'text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            style={activeTab === 'state' ? { backgroundColor: '#017cc2' } : {}}
          >
            State
          </button>
        </div>

        {/* Event Images Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="wushu-events-swiper"
          >
            {currentEvents.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={event.image}
                    alt={`${activeTab === 'national' ? 'National' : 'State'} Event ${event.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Swiper Navigation Styles */}
        <style>{`
          .wushu-events-swiper .swiper-button-next,
          .wushu-events-swiper .swiper-button-prev {
            color: #017cc2;
            background-color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }
          .wushu-events-swiper .swiper-button-next:after,
          .wushu-events-swiper .swiper-button-prev:after {
            font-size: 18px;
            font-weight: bold;
          }
          .wushu-events-swiper .swiper-button-next:hover,
          .wushu-events-swiper .swiper-button-prev:hover {
            background-color: #017cc2;
            color: white;
          }
          @media (max-width: 640px) {
            .wushu-events-swiper .swiper-button-next,
            .wushu-events-swiper .swiper-button-prev {
              width: 30px;
              height: 30px;
            }
            .wushu-events-swiper .swiper-button-next:after,
            .wushu-events-swiper .swiper-button-prev:after {
              font-size: 14px;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

export default WushuEvents
