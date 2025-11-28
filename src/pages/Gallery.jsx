import { useState } from 'react'
// Achievement images
import apraajeetamishra from '../assets/imgs/achivements/apraajeeta_mishra.png'
import dikshakumari from '../assets/imgs/achivements/diksha_kumari.png'
import rahulkumar from '../assets/imgs/achivements/rahul_kumar.png'
import ishamishra from '../assets/imgs/achivements/isha_mishra.png'
import aashihskumars from '../assets/imgs/achivements/aashihs_kumars.png'
import subhamkumar from '../assets/imgs/achivements/subham_kumar.png'
// Event images
import nationalEvent1 from '../assets/imgs/events/national/d8ixeuopdjlhkilridw1.webp'
import nationalEvent2 from '../assets/imgs/events/national/tkdtmmqfemvqmwlgztnx.webp'
// Team images
import seniorTeamPhoto from '../assets/imgs/team/senior.jpg'
import juniorTeamPhoto from '../assets/imgs/team/junior.jpg'
import subJuniorTeamPhoto from '../assets/imgs/team/sub-junior.jpg'

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
      title: 'Diksha Kumari - Gold Medalist',
      category: 'Achievements',
      image: dikshakumari
    },
    {
      id: 3,
      title: 'Rahul Kumar - Silver Medalist',
      category: 'Achievements',
      image: rahulkumar
    },
    {
      id: 4,
      title: 'Isha Mishra - Bronze Medalist',
      category: 'Achievements',
      image: ishamishra
    },
    {
      id: 5,
      title: 'Aashish Kumar - Bronze Medalist',
      category: 'Achievements',
      image: aashihskumars
    },
    {
      id: 6,
      title: 'Shubham Kumar - Silver Medalist',
      category: 'Achievements',
      image: subhamkumar
    },
    // Events
    {
      id: 7,
      title: 'National Event 1',
      category: 'Events',
      image: nationalEvent1
    },
    {
      id: 8,
      title: 'National Event 2',
      category: 'Events',
      image: nationalEvent2
    },
    // Team Photos
    {
      id: 9,
      title: 'Senior Team',
      category: 'Team',
      image: seniorTeamPhoto
    },
    {
      id: 10,
      title: 'Junior Team',
      category: 'Team',
      image: juniorTeamPhoto
    },
    {
      id: 11,
      title: 'Sub-Junior Team',
      category: 'Team',
      image: subJuniorTeamPhoto
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
