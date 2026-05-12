import { useState } from 'react'
// Achievement images
import apraajeetamishra from '../assets/imgs/achivements/apraajeeta_mishra.png'
import apraajeetamishra2025 from '../assets/imgs/achivements/aprajeeta_mishra_2025.jpg'
import dikshakumari from '../assets/imgs/achivements/diksha_kumari.png'
import rahulkumar from '../assets/imgs/achivements/rahul_kumar.png'
import ishamishra from '../assets/imgs/achivements/isha_mishra.png'
import ishamishra2025 from '../assets/imgs/achivements/isha_misra_2025.jpg'
import aashihskumars from '../assets/imgs/achivements/aashihs_kumars.png'
import subhamkumar from '../assets/imgs/achivements/subham_kumar.png'
import juniorNational24Img1 from '../assets/imgs/achivements/24th Junior National Wushu Championship1.webp'
import juniorNational24Img2 from '../assets/imgs/achivements/24th Junior National Wushu Championship2.webp'
import nationalSchoolGames69 from '../assets/imgs/achivements/69th National School Games 2025.webp'
import federationCup9 from '../assets/imgs/achivements/9th Federation Cup Wushu Championship 2025.webp'
import banner1 from '../assets/imgs/banner/1.webp'
import banner2 from '../assets/imgs/banner/2.webp'
import banner3 from '../assets/imgs/banner/3.webp'
import banner4 from '../assets/imgs/banner/4.webp'
import banner5 from '../assets/imgs/banner/5.webp'
import banner6 from '../assets/imgs/banner/6.webp'
import newBanner1 from '../assets/imgs/NewBanner/IMGGG1.jpeg'
import newBanner2 from '../assets/imgs/NewBanner/IMGGG2.jpeg'
import newBanner3 from '../assets/imgs/NewBanner/IMGGG3.jpeg'
import newBanner4 from '../assets/imgs/NewBanner/IMGGG4.jpeg'
import newBanner5 from '../assets/imgs/NewBanner/IMGGG5.jpeg'
import newBanner6 from '../assets/imgs/NewBanner/IMGGG6.jpg'
// Event images - National
import nationalEvent1 from '../assets/imgs/events/national/d8ixeuopdjlhkilridw1.webp'
import nationalEvent2 from '../assets/imgs/events/national/tkdtmmqfemvqmwlgztnx.webp'
// Event images - State
import stateEvent1 from '../assets/imgs/events/state/state1.jpg'
import stateEvent2 from '../assets/imgs/events/state/state2.jpg'
import stateEvent3 from '../assets/imgs/events/state/state3.jpg'
// Team images - Senior
import seniorTeamPhoto1 from '../assets/imgs/team/senior.jpg'
import seniorTeamPhoto2 from '../assets/imgs/team/senior2.jpg'
import seniorTeamPhoto3 from '../assets/imgs/team/senior3.jpg'
// Team images - Junior
import juniorTeamPhoto1 from '../assets/imgs/team/junior.jpg'
import juniorTeamPhoto2 from '../assets/imgs/team/junior2.jpg'
// Team images - Sub-Junior
import subJuniorTeamPhoto1 from '../assets/imgs/team/sub-junior.jpg'
import subJuniorTeamPhoto2 from '../assets/imgs/team/sub-junior2.jpg'
import subJuniorTeamPhoto3 from '../assets/imgs/team/sub-junior3.jpg'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Gallery images
  const galleryItems = [
    // Achievements
    {
      id: 1,
      title: 'Aprajeeta Mishra - Gold & Bronze Medalist',
      category: 'Achievements',
      image: apraajeetamishra
    },
    {
      id: 2,
      title: 'Aprajeeta Mishra - 2025',
      category: 'Achievements',
      image: apraajeetamishra2025
    },
    {
      id: 3,
      title: 'Diksha Kumari - Gold Medalist',
      category: 'Achievements',
      image: dikshakumari
    },
    {
      id: 4,
      title: 'Rahul Kumar - Silver Medalist',
      category: 'Achievements',
      image: rahulkumar
    },
    {
      id: 5,
      title: 'Isha Mishra - Bronze Medalist',
      category: 'Achievements',
      image: ishamishra
    },
    {
      id: 6,
      title: 'Isha Mishra - 2025',
      category: 'Achievements',
      image: ishamishra2025
    },
    {
      id: 7,
      title: 'Aashish Kumar - Bronze Medalist',
      category: 'Achievements',
      image: aashihskumars
    },
    {
      id: 8,
      title: 'Shubham Kumar - Silver Medalist',
      category: 'Achievements',
      image: subhamkumar
    },
    {
      id: 22,
      title: '24th Junior National Wushu Championship — Hyderabad (1)',
      category: 'Achievements',
      image: juniorNational24Img1
    },
    {
      id: 23,
      title: '24th Junior National Wushu Championship — Hyderabad (2)',
      category: 'Achievements',
      image: juniorNational24Img2
    },
    {
      id: 24,
      title: '69th National School Games 2025 — Srinagar',
      category: 'Achievements',
      image: nationalSchoolGames69
    },
    {
      id: 25,
      title: '9th Federation Cup Wushu Championship 2025 — Rajnandgaon',
      category: 'Achievements',
      image: federationCup9
    },
    // Events - National
    {
      id: 9,
      title: 'National Event 1',
      category: 'Events',
      image: nationalEvent1
    },
    {
      id: 10,
      title: 'National Event 2',
      category: 'Events',
      image: nationalEvent2
    },
    // Events - State
    {
      id: 11,
      title: 'State Event 1',
      category: 'Events',
      image: stateEvent1
    },
    {
      id: 12,
      title: 'State Event 2',
      category: 'Events',
      image: stateEvent2
    },
    {
      id: 13,
      title: 'State Event 3',
      category: 'Events',
      image: stateEvent3
    },
    // Team Photos - Senior
    {
      id: 14,
      title: 'Senior Team 1',
      category: 'Team',
      image: seniorTeamPhoto1
    },
    {
      id: 15,
      title: 'Senior Team 2',
      category: 'Team',
      image: seniorTeamPhoto2
    },
    {
      id: 16,
      title: 'Senior Team 3',
      category: 'Team',
      image: seniorTeamPhoto3
    },
    // Team Photos - Junior
    {
      id: 17,
      title: 'Junior Team 1',
      category: 'Team',
      image: juniorTeamPhoto1
    },
    {
      id: 18,
      title: 'Junior Team 2',
      category: 'Team',
      image: juniorTeamPhoto2
    },
    // Team Photos - Sub-Junior
    {
      id: 19,
      title: 'Sub-Junior Team 1',
      category: 'Team',
      image: subJuniorTeamPhoto1
    },
    {
      id: 20,
      title: 'Sub-Junior Team 2',
      category: 'Team',
      image: subJuniorTeamPhoto2
    },
    {
      id: 21,
      title: 'Sub-Junior Team 3',
      category: 'Team',
      image: subJuniorTeamPhoto3
    },
    // Home banner slides
    {
      id: 26,
      title: 'Home banner 1',
      category: 'Banners',
      image: banner1
    },
    {
      id: 27,
      title: 'Home banner 2',
      category: 'Banners',
      image: banner2
    },
    {
      id: 28,
      title: 'Home banner 3',
      category: 'Banners',
      image: banner3
    },
    {
      id: 29,
      title: 'Home banner 4',
      category: 'Banners',
      image: banner4
    },
    {
      id: 30,
      title: 'Home banner 5',
      category: 'Banners',
      image: banner5
    },
    {
      id: 31,
      title: 'Home banner 6',
      category: 'Banners',
      image: banner6
    },
    {
      id: 32,
      title: 'Banner — IMGGG1',
      category: 'Banners',
      image: newBanner1
    },
    {
      id: 33,
      title: 'Banner — IMGGG2',
      category: 'Banners',
      image: newBanner2
    },
    {
      id: 34,
      title: 'Banner — IMGGG3',
      category: 'Banners',
      image: newBanner3
    },
    {
      id: 35,
      title: 'Banner — IMGGG4',
      category: 'Banners',
      image: newBanner4
    },
    {
      id: 36,
      title: 'Banner — IMGGG5',
      category: 'Banners',
      image: newBanner5
    },
    {
      id: 37,
      title: 'Banner — IMGGG6',
      category: 'Banners',
      image: newBanner6
    }
  ]

  const openImage = (index) => {
    setCurrentIndex(index)
    setSelectedImage(galleryItems[index])
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length
    setCurrentIndex(nextIndex)
    setSelectedImage(galleryItems[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    setCurrentIndex(prevIndex)
    setSelectedImage(galleryItems[prevIndex])
  }

  const handleKeyDown = (e) => {
    if (selectedImage) {
      if (e.key === 'Escape') {
        closeImage()
      } else if (e.key === 'ArrowRight') {
        nextImage()
      } else if (e.key === 'ArrowLeft') {
        prevImage()
      }
    }
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Gallery</h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ gap: '5px' }}>
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden rounded-lg cursor-pointer group bg-gray-200"
              style={{ aspectRatio: '16/9' }}
              onClick={() => openImage(index)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                style={{ display: 'block' }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x450?text=Image+Not+Found'
                }}
              />
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zoomed Gallery Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          {/* Close Button */}
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-60 bg-black bg-opacity-50 rounded-full p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-60 bg-black bg-opacity-50 rounded-full p-3"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-60 bg-black bg-opacity-50 rounded-full p-3"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div 
            className="max-w-7xl max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            {currentIndex + 1} / {galleryItems.length}
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
