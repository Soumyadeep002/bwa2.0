import apraajeetamishra from '../assets/imgs/achivements/apraajeeta_mishra.png'
import apraajeetamishra2025 from '../assets/imgs/achivements/aprajeeta_mishra_2025.jpg'
import dikshakumari from '../assets/imgs/achivements/diksha_kumari.png'
import rahulkumar from '../assets/imgs/achivements/rahul_kumar.png'
import ishamishra from '../assets/imgs/achivements/isha_mishra.png'
import aashihskumars from '../assets/imgs/achivements/aashihs_kumars.png'
import subhamkumar from '../assets/imgs/achivements/subham_kumar.png'

function Achievement() {
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

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Achievements</h1>
        
        <div className="space-y-12">
          {achievementsByYear.map((yearData) => (
            <div key={yearData.year}>
              {/* Year Header */}
              <div className="text-white px-6 py-4 mb-6 rounded-t-lg" style={{ backgroundColor: '#017cc2' }}>
                <h2 className="text-2xl font-bold">{yearData.year}</h2>
              </div>
              
              {/* Achievements Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {yearData.achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row border border-gray-200"
                  >
                    {/* Image Section */}
                    <div className="flex-shrink-0 w-full sm:w-40 h-56 sm:h-auto">
                      <div className="w-full h-full p-2">
                        <img
                          src={achievement.image}
                          alt={achievement.name}
                          className="w-full h-full object-cover rounded-lg"
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default Achievement
