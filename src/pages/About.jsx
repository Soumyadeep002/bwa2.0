function About() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Bihar Wushu Association</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4 text-lg">
              The Bihar Wushu Association (BWA) is the official governing body for Wushu sports in the state of Bihar, India. 
              We are dedicated to promoting, developing, and organizing Wushu activities across the state.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              To promote excellence in Wushu sports, develop talented athletes, and represent Bihar at national and international levels 
              with integrity, discipline, and sportsmanship.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              To establish Bihar as a leading state in Wushu sports in India and produce world-class athletes who bring glory to the nation.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Do</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Organize state-level Wushu championships and competitions</li>
              <li>Select and train athletes for national and international events</li>
              <li>Conduct training camps and workshops for athletes and coaches</li>
              <li>Promote Wushu at the grassroots level</li>
              <li>Maintain compliance with government regulations and anti-doping policies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
