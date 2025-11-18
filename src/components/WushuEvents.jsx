import { useState } from 'react'

function WushuEvents() {
  const [activeTab, setActiveTab] = useState('national')

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
            onClick={() => setActiveTab('international')}
            className={`px-8 py-2 font-semibold ${
              activeTab === 'international'
                ? 'text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            style={activeTab === 'international' ? { backgroundColor: '#017cc2' } : {}}
          >
            International
          </button>
        </div>

        {/* Event Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <span className="text-gray-500">Event Image 1</span>
          </div>
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <span className="text-gray-500">Event Image 2</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WushuEvents
