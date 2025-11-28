import { useState } from 'react'
import seniorTeamPhoto from '../assets/imgs/team/senior.jpg'
import juniorTeamPhoto from '../assets/imgs/team/junior.jpg'
import subJuniorTeamPhoto from '../assets/imgs/team/sub-junior.jpg'

function WushuTeam() {
  const [activeTab, setActiveTab] = useState('sub-junior')

  // Team photos mapping
  const teamPhotos = {
    'sub-junior': subJuniorTeamPhoto,
    'junior': juniorTeamPhoto,
    'senior': seniorTeamPhoto
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">WUSHU TEAM</h2>
        
        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('sub-junior')}
            className={`px-6 py-2 font-semibold ${
              activeTab === 'sub-junior'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Sub-Junior
          </button>
          <button
            onClick={() => setActiveTab('junior')}
            className={`px-6 py-2 font-semibold ${
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
            className={`px-6 py-2 font-semibold ${
              activeTab === 'senior'
                ? 'text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            style={activeTab === 'senior' ? { backgroundColor: '#017cc2' } : {}}
          >
            Senior
          </button>
        </div>

        {/* Team Image */}
        <div className="bg-gray-200 border-2 border-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
          {teamPhotos[activeTab] ? (
            <img
              src={teamPhotos[activeTab]}
              alt={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Team Photo`}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500 text-lg">Team Photo Coming Soon</span>
          )}
        </div>
      </div>
    </section>
  )
}

export default WushuTeam
