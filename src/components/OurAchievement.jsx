import apraajeetamishra from '../assets/imgs/achivements/apraajeeta_mishra.png'
import dikshakumari from '../assets/imgs/achivements/diksha_kumari.png'
import rahulkumar from '../assets/imgs/achivements/rahul_kumar.png'
import ishaamishra2025 from '../assets/imgs/achivements/isha_misra_2025.jpg'
import aashihskumars from '../assets/imgs/achivements/aashihs_kumars.png'
import subhamkumar from '../assets/imgs/achivements/subham_kumar.png'


function OurAchievement() {
  // Placeholder data - images will be provided later
  const achievements = [
    {
      id: 1,
      name: "Aprajeeta Mishra",
      medal: "Gold medalist",
      additionalMedal: "Bronze medalist",
      event: "Batumi international Wushu Championship Georgia",
      image: apraajeetamishra,
      isInternational: true
    },
    {
      id: 2,
      name: "Rahul Kumar",
      medal: "Silver medalist",
      event: "Batumi international Wushu Championship Georgia",
      image: rahulkumar,
      isInternational: true
    },
    {
      id: 3,
      name: "Diksha kumari",
      medal: "Gold medalist",
      event: "Batumi international Wushu Championship Georgia",
      image: dikshakumari,
      isInternational: true
    },
    {
      id: 4,
      name: 'Isha Mishra',
      medal: 'Bronze medalist',
      event: '10th World Kungfu Championship, China 2025',
      isInternational: true, 
      image: ishaamishra2025
    },
    {
      id: 5,
      name: "Aashish Kumar",
      medal: "Bronze medalist",
      event: "37th national games, Goa 2023",
      image: aashihskumars,
      isInternational: false
    },
    {
      id: 6,
      name: "Shubham Kumar",
      medal: "Silver medalist",
      event: "38th national games, uttrakhand 2025",
      image: subhamkumar,
      isInternational: false
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

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">OUR ACHIEVEMENT</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((achievement) => (
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
                  {achievement.isInternational && (
                    <div className="mb-1">
                      <IndianFlagIcon />
                    </div>
                  )}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{achievement.name}</h3>
                </div>
                
                <div className="space-y-1 text-gray-700">
                  <p className="font-semibold text-sm sm:text-base" style={{ color: achievement.medal.includes('Gold') ? '#FFD700' : achievement.medal.includes('Silver') ? '#C0C0C0' : '#CD7F32' }}>
                    {achievement.medal}
                  </p>
                  {achievement.additionalMedal && (
                    <p className="font-semibold text-sm sm:text-base" style={{ color: '#CD7F32' }}>
                      {achievement.additionalMedal}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">{achievement.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurAchievement

