function Events() {
  const events = [
    {
      title: 'Bihar State Wushu Championship 2024',
      date: 'July 15-17, 2024',
      location: 'Patna, Bihar',
      type: 'National',
      status: 'Upcoming'
    },
    {
      title: 'Sub-Junior National Championship',
      date: 'August 10-12, 2024',
      location: 'Chandigarh',
      type: 'National',
      status: 'Upcoming'
    },
    {
      title: 'Asian Global Wushu Championship 2024',
      date: 'September 20-25, 2024',
      location: 'International',
      type: 'International',
      status: 'Upcoming'
    },
    {
      title: '16th World Wushu Championship',
      date: 'November 2023',
      location: 'International',
      type: 'International',
      status: 'Completed'
    }
  ]

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className={`h-2 ${event.status === 'Upcoming' ? '' : 'bg-gray-400'}`} style={event.status === 'Upcoming' ? { backgroundColor: '#017cc2' } : {}}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.type === 'National' ? 'bg-red-100 text-red-800' : 'text-white'
                  }`}
                  style={event.type === 'International' ? { backgroundColor: '#017cc2' } : {}}>
                    {event.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.status === 'Upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {event.status}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h2>
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="flex items-center">
                    <span className="mr-2">📅</span>
                    {event.date}
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📍</span>
                    {event.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events

