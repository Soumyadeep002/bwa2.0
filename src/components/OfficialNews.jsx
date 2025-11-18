function OfficialNews() {
  const newsItems = [
    "Selection Trials for BRICS Games & 19th Asian Games",
    "16th World Wushu Championship - Bihar Team won 1 Silver & 2 Bronze",
    "PM congratulates Bihar athletes on winning medals at Wushu Stars Championship held in Moscow, Russia",
    "Sub-Junior National might happen in July Patna",
    "Bihar Team moved to Moscow",
    "Senior National Postpone for 29th June to 1st July.",
    "Election result 2024 - Click Here"
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">OFFICIAL NEWS</h2>
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-3">
            {newsItems.map((news, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#017cc2' }}></span>
                <a href="#" className="text-gray-700 text-base" style={{ '--hover-color': '#017cc2' }} onMouseEnter={(e) => e.target.style.color = '#017cc2'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
                  {news}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default OfficialNews
