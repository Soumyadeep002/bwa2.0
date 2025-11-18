function RulesRegulations() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Rules & Regulations</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Competition Rules</h2>
            <p className="text-gray-700 mb-4">
              All competitions organized by Bihar Wushu Association follow the official rules and regulations 
              set by the Wushu Federation of India and International Wushu Federation.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Athlete Eligibility</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Age categories: Sub-Junior, Junior, and Senior</li>
              <li>Valid registration with Bihar Wushu Association</li>
              <li>Medical fitness certificate</li>
              <li>Compliance with anti-doping regulations</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Competition Categories</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Taolu (Forms/Patterns)</li>
              <li>Sanda (Combat/Sparring)</li>
              <li>Individual and Team events</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Code of Conduct</h2>
            <p className="text-gray-700 mb-4">
              All athletes, coaches, and officials are expected to maintain the highest standards of sportsmanship, 
              respect, and integrity during competitions and training.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RulesRegulations

