import { useState, useEffect } from 'react'

function OfficialNews() {
  const [newsItems, setNewsItems] = useState([])

  useEffect(() => {
    // Load news from localStorage (posted by admin)
    const savedNews = localStorage.getItem('newsItems')
    if (savedNews) {
      setNewsItems(JSON.parse(savedNews))
    } else {
      // Default news items if no admin news exists
      const defaultNews = [
        { id: 1, text: "Selection Trials for BRICS Games & 19th Asian Games", link: "#" },
        { id: 2, text: "16th World Wushu Championship - Bihar Team won 1 Silver & 2 Bronze", link: "#" },
        { id: 3, text: "PM congratulates Bihar athletes on winning medals at Wushu Stars Championship held in Moscow, Russia", link: "#" },
        { id: 4, text: "Sub-Junior National might happen in July Patna", link: "#" },
        { id: 5, text: "Bihar Team moved to Moscow", link: "#" },
        { id: 6, text: "Senior National Postpone for 29th June to 1st July.", link: "#" },
        { id: 7, text: "Election result 2024 - Click Here", link: "#" }
      ]
      setNewsItems(defaultNews)
    }
  }, [])

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">OFFICIAL NEWS</h2>
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-3">
            {newsItems.map((news) => (
              <li key={news.id} className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#017cc2' }}></span>
                <a 
                  href={news.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 text-base" 
                  style={{ '--hover-color': '#017cc2' }} 
                  onMouseEnter={(e) => e.target.style.color = '#017cc2'} 
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  {news.text}
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
