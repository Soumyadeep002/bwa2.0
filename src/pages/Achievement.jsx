import { useState } from 'react'
import apraajeetamishra from '../assets/imgs/achivements/apraajeeta_mishra.png'
import apraajeetamishra2025 from '../assets/imgs/achivements/aprajeeta_mishra_2025.jpg'
import ishaamishra2025 from '../assets/imgs/achivements/isha_misra_2025.jpg'
import dikshakumari from '../assets/imgs/achivements/diksha_kumari.png'
import rahulkumar from '../assets/imgs/achivements/rahul_kumar.png'
import ishamishra from '../assets/imgs/achivements/isha_mishra.png'
import aashihskumars from '../assets/imgs/achivements/aashihs_kumars.png'
import subhamkumar from '../assets/imgs/achivements/subham_kumar.png'

function Achievement() {
  const [filter, setFilter] = useState('All') // 'All', 'International', 'National'
  // Achievements data organized by year
  const achievementsByYear = [
    {
      year: 2025,
      achievements: [
        {
          id: 1,
          name: 'Shubham Kumar',
          medal: 'Silver medalist',
          event: '38th national games, Uttrakhand 2025',
          category: 'Senior',
          image: subhamkumar
        },
        {
          id: 2,
          name: 'Aprajeeta Mishra',
          medal: 'Silver medalist',
          event: '38th national games, Uttrakhand 2025',
          category: 'Senior',
          image: apraajeetamishra2025
        },
        {
          id: 8,
          name: 'Isha Mishra',
          medal: 'Bronze medalist',
          event: '10th World Kungfu Championship, China 2025',
          category: 'International', 
          image: ishaamishra2025
        }
      ]
    },
    {
      year: 2024,
      achievements: [
        {
          id: 3,
          name: 'Aprajeeta Mishra',
          medal: 'Gold & Bronze medalist',
          event: 'Batumi International Wushu Championship, Georgia',
          category: 'International',
          image: apraajeetamishra
        },
        {
          id: 4,
          name: 'Diksha Kumari',
          medal: 'Gold medalist',
          event: 'Batumi International Wushu Championship, Georgia',
          category: 'International',
          image: dikshakumari
        },
        {
          id: 5,
          name: 'Rahul Kumar',
          medal: 'Silver medalist',
          event: 'Batumi International Wushu Championship, Georgia',
          category: 'International',
          image: rahulkumar
        }
      ]
    },
    {
      year: 2023,
      achievements: [
        {
          id: 6,
          name: 'Isha Mishra',
          medal: 'Bronze medalist',
          event: '37th National Games, Goa 2023',
          category: 'Senior',
          image: ishamishra
        },
        {
          id: 7,
          name: 'Aashish Kumar',
          medal: 'Bronze medalist',
          event: '37th National Games, Goa 2023',
          category: 'Senior',
          image: aashihskumars
        },
      ]
    }
  ]

  // Indian Flag SVG Icon
  const IndianFlagIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" className="mb-1">
      <rect width="24" height="8" fill="#FF9933" />
      <rect y="8" width="24" height="8" fill="#FFFFFF" />
      <rect y="16" width="24" height="8" fill="#138808" />
      <circle cx="12" cy="12" r="3" fill="#000080" />
      <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
    </svg>
  )

  // Helper function to determine medal color
  const getMedalColor = (medal) => {
    if (medal.toLowerCase().includes('gold')) return '#FFD700'
    if (medal.toLowerCase().includes('silver')) return '#C0C0C0'
    if (medal.toLowerCase().includes('bronze')) return '#CD7F32'
    return '#017cc2' // Default color for multiple medals
  }

  // Helper function to determine if achievement is International or National
  const isInternational = (achievement) => {
    return achievement.category === 'International'
  }

  // Filter achievements based on selected filter
  const filterAchievements = (achievements) => {
    if (filter === 'All') return achievements
    if (filter === 'International') {
      return achievements.filter(achievement => isInternational(achievement))
    }
    if (filter === 'National') {
      return achievements.filter(achievement => !isInternational(achievement))
    }
    return achievements
  }

  // Check if there are any achievements after filtering
  const hasAnyFilteredAchievements = achievementsByYear.some(yearData => 
    filterAchievements(yearData.achievements).length > 0
  )

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Achievements</h1>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 gap-4">
          <button
            onClick={() => setFilter('All')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
              filter === 'All'
                ? 'text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
            style={filter === 'All' ? { backgroundColor: '#017cc2' } : {}}
          >
            All
          </button>
          <button
            onClick={() => setFilter('International')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
              filter === 'International'
                ? 'text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
            style={filter === 'International' ? { backgroundColor: '#017cc2' } : {}}
          >
            International
          </button>
          <button
            onClick={() => setFilter('National')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
              filter === 'National'
                ? 'text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
            style={filter === 'National' ? { backgroundColor: '#017cc2' } : {}}
          >
            National
          </button>
        </div>
        
        {!hasAnyFilteredAchievements ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No achievements found for the selected filter.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {achievementsByYear.map((yearData) => {
              const filteredAchievements = filterAchievements(yearData.achievements)
              if (filteredAchievements.length === 0) return null
              
              return (
                <div key={yearData.year}>
                  {/* Year Header */}
                  <div className="text-white px-6 py-4 mb-6 rounded-t-lg" style={{ backgroundColor: '#017cc2' }}>
                    <h2 className="text-2xl font-bold">{yearData.year}</h2>
                  </div>
                  
                  {/* Achievements Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {filteredAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row border border-gray-200"
                  >
                    {/* Image Section */}
                    <div className="flex-shrink-0 w-full sm:w-48 flex items-center justify-center">
                      <div className="w-full p-2 flex items-center justify-center bg-gray-50">
                        <img
                          src={achievement.image}
                          alt={achievement.name}
                          className="max-w-full max-h-64 w-auto h-auto object-contain rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Text Section */}
                    <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center">
                      <div className="mb-3">
                        {achievement.category === 'International' && (
                          <div className="mb-1">
                            <IndianFlagIcon />
                          </div>
                        )}
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{achievement.name}</h3>
                      </div>
                      
                      <div className="space-y-1 text-gray-700">
                        <p 
                          className="font-semibold text-sm sm:text-base" 
                          style={{ color: getMedalColor(achievement.medal) }}
                        >
                          {achievement.medal}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">{achievement.event}</p>
                        <span 
                          className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded-full ${
                            achievement.category === 'International' 
                              ? 'bg-purple-100 text-purple-800'
                              : achievement.category === 'Senior'
                              ? 'text-white'
                              : achievement.category === 'Junior'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                          style={achievement.category === 'Senior' ? { backgroundColor: '#017cc2' } : {}}
                        >
                          {achievement.category}
                        </span>
                      </div>
                    </div>
                  </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Achievement
