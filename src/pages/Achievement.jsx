function Achievement() {
  // Sample data organized by year - replace with actual data
  const achievementsByYear = [
    {
      year: 2024,
      achievements: [
        {
          id: 1,
          event: 'Bihar State Wushu Championship 2024',
          category: 'Senior',
          medals: '3 Gold, 2 Silver, 1 Bronze',
          location: 'Patna, Bihar',
          date: 'July 2024'
        },
        {
          id: 2,
          event: 'Sub-Junior National Championship',
          category: 'Sub-Junior',
          medals: '2 Gold, 3 Silver, 2 Bronze',
          location: 'Chandigarh',
          date: 'June 2024'
        }
      ]
    },
    {
      year: 2023,
      achievements: [
        {
          id: 3,
          event: '16th World Wushu Championship',
          category: 'International',
          medals: '1 Silver, 2 Bronze',
          location: 'International',
          date: 'November 2023'
        },
        {
          id: 4,
          event: 'Wushu Stars Championship',
          category: 'International',
          medals: '17 Medals',
          location: 'Moscow, Russia',
          date: 'September 2023'
        },
        {
          id: 5,
          event: 'National Championships',
          category: 'Senior',
          medals: '5 Gold, 4 Silver, 3 Bronze',
          location: 'Delhi',
          date: 'August 2023'
        }
      ]
    },
    {
      year: 2022,
      achievements: [
        {
          id: 6,
          event: 'Asian Games Qualifiers',
          category: 'Senior',
          medals: '2 Gold, 1 Silver',
          location: 'Bangkok, Thailand',
          date: 'May 2022'
        },
        {
          id: 7,
          event: 'Junior National Championship',
          category: 'Junior',
          medals: '3 Gold, 2 Silver, 4 Bronze',
          location: 'Mumbai',
          date: 'March 2022'
        }
      ]
    },
    {
      year: 2021,
      achievements: [
        {
          id: 8,
          event: 'National Wushu Championship',
          category: 'Senior',
          medals: '4 Gold, 3 Silver, 2 Bronze',
          location: 'Kolkata',
          date: 'December 2021'
        }
      ]
    },
    {
      year: 2018,
      achievements: [
        {
          id: 9,
          event: 'Asian Games 2018',
          category: 'International',
          medals: 'Multiple Medals',
          location: 'Jakarta Palembang',
          date: 'August 2018'
        }
      ]
    }
  ]

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Achievements</h1>
        
        <div className="space-y-8">
          {achievementsByYear.map((yearData) => (
            <div key={yearData.year} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Year Header */}
              <div className="text-white px-6 py-4" style={{ backgroundColor: '#017cc2' }}>
                <h2 className="text-2xl font-bold">{yearData.year}</h2>
              </div>
              
              {/* Achievements Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">S.No</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Event</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Medals</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {yearData.achievements.map((achievement, index) => (
                      <tr key={achievement.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{achievement.event}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            achievement.category === 'International' 
                              ? 'bg-purple-100 text-purple-800'
                              : achievement.category === 'Senior'
                              ? 'text-white'
                              : achievement.category === 'Junior'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                          style={achievement.category === 'Senior' ? { backgroundColor: '#017cc2' } : {}}>
                            {achievement.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 font-semibold">{achievement.medals}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{achievement.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{achievement.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Achievement
