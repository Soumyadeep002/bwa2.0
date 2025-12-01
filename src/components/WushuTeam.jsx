import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// Sub-junior team photos
import subJunior1 from '../assets/imgs/team/sub-junior.jpg'
import subJunior2 from '../assets/imgs/team/sub-junior2.jpg'
import subJunior3 from '../assets/imgs/team/sub-junior3.jpg'
// Junior team photos
import junior1 from '../assets/imgs/team/junior.jpg'
import junior2 from '../assets/imgs/team/junior2.jpg'
// Senior team photos
import senior1 from '../assets/imgs/team/senior.jpg'
import senior2 from '../assets/imgs/team/senior2.jpg'
import senior3 from '../assets/imgs/team/senior3.jpg'

function WushuTeam() {
  const [activeTab, setActiveTab] = useState('sub-junior')

  // Team photos mapping with arrays for each category
  const teamPhotos = {
    'sub-junior': [subJunior1, subJunior2, subJunior3],
    'junior': [junior1, junior2],
    'senior': [senior1, senior2, senior3]
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">WUSHU TEAM</h2>
        
        {/* Tab Buttons */}
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('sub-junior')}
            className={`px-3 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base font-semibold ${
              activeTab === 'sub-junior'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Sub-Junior
          </button>
          <button
            onClick={() => setActiveTab('junior')}
            className={`px-3 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base font-semibold ${
              activeTab === 'junior'
                ? 'text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            style={activeTab === 'junior' ? { backgroundColor: '#017cc2' } : {}}
          >
            Junior
          </button>
          <button
            onClick={() => setActiveTab('senior')}
            className={`px-3 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base font-semibold ${
              activeTab === 'senior'
                ? 'text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            style={activeTab === 'senior' ? { backgroundColor: '#017cc2' } : {}}
          >
            Senior
          </button>
        </div>

        {/* Team Images Slider */}
        <div className="bg-gray-200 border-2 border-gray-300 rounded-lg overflow-hidden">
          {teamPhotos[activeTab] && teamPhotos[activeTab].length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              className="w-full team-swiper"
            >
              {teamPhotos[activeTab].map((photo, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full flex items-center justify-center bg-gray-200 p-4">
                    <img
                      src={photo}
                      alt={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Team Photo ${index + 1}`}
                      className="max-w-full max-h-[600px] w-auto h-auto object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex items-center justify-center py-20">
              <span className="text-gray-500 text-lg">Team Photo Coming Soon</span>
            </div>
          )}
        </div>

        {/* Custom Swiper Navigation Styles */}
        <style>{`
          .team-swiper {
            min-height: 400px;
          }
          .team-swiper .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .team-swiper .swiper-button-next,
          .team-swiper .swiper-button-prev {
            color: #017cc2;
            background: rgba(255, 255, 255, 0.8);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }
          .team-swiper .swiper-button-next:after,
          .team-swiper .swiper-button-prev:after {
            font-size: 18px;
            font-weight: bold;
          }
          .team-swiper .swiper-button-next:hover,
          .team-swiper .swiper-button-prev:hover {
            background: rgba(255, 255, 255, 1);
          }
          .team-swiper .swiper-pagination-bullet {
            background: #017cc2;
            opacity: 0.5;
            width: 12px;
            height: 12px;
          }
          .team-swiper .swiper-pagination-bullet-active {
            opacity: 1;
            background: #017cc2;
          }
          @media (max-width: 640px) {
            .team-swiper {
              min-height: 300px;
            }
            .team-swiper .swiper-button-next,
            .team-swiper .swiper-button-prev {
              width: 30px;
              height: 30px;
            }
            .team-swiper .swiper-button-next:after,
            .team-swiper .swiper-button-prev:after {
              font-size: 14px;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

export default WushuTeam
