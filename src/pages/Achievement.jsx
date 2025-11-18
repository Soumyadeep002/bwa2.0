function Achievement() {
  // Sample data organized by year - replace with actual data
  const achievementsByYear = [
    {
      year: 2024,
      achievements: [
        {
          id: 1,
          name: 'Bihar State Wushu Championship 2024',
          medal: '3 Gold, 2 Silver, 1 Bronze',
          event: 'Patna, Bihar - July 2024',
          category: 'Senior',
          image: 'https://via.placeholder.com/200x250?text=Event+1'
        },
        {
          id: 2,
          name: 'Sub-Junior National Championship',
          medal: '2 Gold, 3 Silver, 2 Bronze',
          event: 'Chandigarh - June 2024',
          category: 'Sub-Junior',
          image: 'https://via.placeholder.com/200x250?text=Event+2'
        }
      ]
    },
    {
      year: 2023,
      achievements: [
        {
          id: 3,
          name: '16th World Wushu Championship',
          medal: '1 Silver, 2 Bronze',
          event: 'International - November 2023',
          category: 'International',
          image: 'https://via.placeholder.com/200x250?text=Event+3'
        },
        {
          id: 4,
          name: 'Wushu Stars Championship',
          medal: '17 Medals',
          event: 'Moscow, Russia - September 2023',
          category: 'International',
          image: 'https://via.placeholder.com/200x250?text=Event+4'
        },
        {
          id: 5,
          name: 'National Championships',
          medal: '5 Gold, 4 Silver, 3 Bronze',
          event: 'Delhi - August 2023',
          category: 'Senior',
          image: 'https://via.placeholder.com/200x250?text=Event+5'
        }
      ]
    },
    {
      year: 2022,
      achievements: [
        {
          id: 6,
          name: 'Asian Games Qualifiers',
          medal: '2 Gold, 1 Silver',
          event: 'Bangkok, Thailand - May 2022',
          category: 'Senior',
          image: 'https://via.placeholder.com/200x250?text=Event+6'
        },
        {
          id: 7,
          name: 'Junior National Championship',
          medal: '3 Gold, 2 Silver, 4 Bronze',
          event: 'Mumbai - March 2022',
          category: 'Junior',
          image: 'https://via.placeholder.com/200x250?text=Event+7'
        }
      ]
    },
    {
      year: 2021,
      achievements: [
        {
          id: 8,
          name: 'National Wushu Championship',
          medal: '4 Gold, 3 Silver, 2 Bronze',
          event: 'Kolkata - December 2021',
          category: 'Senior',
          image: 'https://via.placeholder.com/200x250?text=Event+8'
        }
      ]
    },
    {
      year: 2018,
      achievements: [
        {
          id: 9,
          name: 'Asian Games 2018',
          medal: 'Multiple Medals',
          event: 'Jakarta Palembang - August 2018',
          category: 'International',
          image: 'https://via.placeholder.com/200x250?text=Event+9'
        }
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
                        <div className="mb-1">
                          <IndianFlagIcon />
                        </div>
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
