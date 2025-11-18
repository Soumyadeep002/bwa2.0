function Sponsors() {
  const sponsors = [
    { name: 'INDIA', logo: 'INDIA' },
    { name: 'SAI', logo: 'SAI' },
    { name: 'Training Sponsor', logo: 'TS' },
    { name: 'Ministry of Youth Affairs', logo: 'MYAS' }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">OUR SPONSORS</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="bg-gray-100 h-32 flex flex-col items-center justify-center p-4"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-xs font-bold">{sponsor.logo}</span>
              </div>
              <p className="text-xs text-gray-700 text-center">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
