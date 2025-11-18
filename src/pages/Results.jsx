function Results() {
  const results = [
    {
      event: 'Bihar State Wushu Championship 2024',
      date: 'July 15-17, 2024',
      category: 'Senior',
      winners: [
        { name: 'Gold Medal', athlete: 'Athlete Name 1' },
        { name: 'Silver Medal', athlete: 'Athlete Name 2' },
        { name: 'Bronze Medal', athlete: 'Athlete Name 3' }
      ]
    },
    {
      event: 'Sub-Junior National Championship',
      date: 'June 10-12, 2024',
      category: 'Sub-Junior',
      winners: [
        { name: 'Gold Medal', athlete: 'Athlete Name 4' },
        { name: 'Silver Medal', athlete: 'Athlete Name 5' },
        { name: 'Bronze Medal', athlete: 'Athlete Name 6' }
      ]
    },
    {
      event: '16th World Wushu Championship',
      date: 'November 2023',
      category: 'International',
      winners: [
        { name: 'Silver Medal', athlete: 'Bihar Athlete 1' },
        { name: 'Bronze Medal', athlete: 'Bihar Athlete 2' },
        { name: 'Bronze Medal', athlete: 'Bihar Athlete 3' }
      ]
    }
  ]

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Results</h1>
        
        <div className="space-y-6">
          {results.map((result, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{result.event}</h2>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                  <span>📅 {result.date}</span>
                  <span className="px-3 py-1 text-white rounded-full font-semibold" style={{ backgroundColor: '#017cc2' }}>
                    {result.category}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {result.winners.map((winner, winnerIndex) => (
                  <div key={winnerIndex} className="border-l-4 border-yellow-500 pl-4">
                    <p className="font-semibold text-gray-900">{winner.name}</p>
                    <p className="text-gray-600">{winner.athlete}</p>
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

export default Results

