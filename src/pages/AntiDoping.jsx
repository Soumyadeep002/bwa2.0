function AntiDoping() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Anti-Doping</h1>
        
        <div className="space-y-8">
          {/* WADA Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">WADA</h2>
            <p className="text-gray-700 leading-relaxed">
              The World Anti-Doping Agency (WADA) was established on Nov. 10, 1999, in Lausanne. 
              Its mission is to combat and coordinate the fight against doping in sport internationally, 
              and it was set up after high-profile doping scandals.
            </p>
          </div>

          {/* NADA Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">NADA</h2>
            <p className="text-gray-700 leading-relaxed">
              The National Anti-Doping Agency (NADA) is the national organization responsible for 
              promoting, coordinating, and monitoring the doping control program in India, aiming for 
              "Dope Free" sport.
            </p>
          </div>

          {/* NADA'S PRIMARY FUNCTIONS Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">NADA'S PRIMARY FUNCTIONS</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Adopting and implementing anti-doping rules and policies conforming to the World Anti-Doping Code.</li>
              <li>Co-operating with other sports-related organizations and anti-doping organizations.</li>
              <li>Encouraging reciprocal testing between National Anti-Doping Organizations.</li>
              <li>Promoting anti-doping research and education.</li>
            </ul>
          </div>

          {/* CODE Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">CODE</h2>
            <p className="text-gray-700 leading-relaxed">
              The World Anti-Doping Code is a document that harmonizes anti-doping regulation across 
              all sports and countries, providing a framework for policies, rules, and regulations to 
              ensure a level playing field for athletes worldwide.
            </p>
          </div>

          {/* PROHIBITED SUBSTANCES AND METHODS Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">PROHIBITED SUBSTANCES AND METHODS</h2>
            <p className="text-gray-700 leading-relaxed">
              WADA annually updates a list of Prohibited Substances and Methods, which is an International 
              Standard defining what is prohibited both in-competition and out-of-competition, and indicates 
              substances banned in particular sports.
            </p>
          </div>

          {/* ATHLETES RESPONSIBILITY Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">ATHLETES RESPONSIBILITY</h2>
            <p className="text-gray-700 leading-relaxed">
              Athletes are responsible if a prohibited substance is found in their body specimen, regardless 
              of whether its use was intentional, unintentional, knowing, unknowing, negligent, or otherwise 
              at fault.
            </p>
          </div>

          {/* LATEST INFORMATION Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">LATEST INFORMATION</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Athletes should check with their National/International Federations for prohibited substances 
              and methods, inform their doctors about sport-specific rules, and avoid taking products unless 
              certain they are not prohibited.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              "Ignorance is never an excuse."
            </p>
          </div>

          {/* DOPING CONTROL Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">DOPING CONTROL</h2>
            <p className="text-gray-700 leading-relaxed">
              Doping controls and athlete testing are conducted according to the Code and International 
              Standard for testing. Athletes at international and national levels can be tested anytime, 
              anywhere by specially trained and accredited personnel.
            </p>
          </div>

          {/* IN-COMPETITION TESTING Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">IN-COMPETITION TESTING</h2>
            <p className="text-gray-700 leading-relaxed">
              NADA coordinates in-competition testing, ensuring only one organization tests at an event. 
              Athlete selection criteria are predetermined, based on federation/event rules. Athletes are 
              notified immediately after competition, and samples are collected and analyzed for "in-competition 
              substances" from the WADA Prohibited List.
            </p>
          </div>

          {/* OUT-OF-COMPETITION TESTING Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">OUT-OF-COMPETITION TESTING</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Out-of-competition testing allows athletes to be tested anytime, anywhere. Athletes in the 
              registered testing pool must provide accurate and current whereabouts information (usually 
              half-yearly, with updates for changes).
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              This information includes home address, work schedule, training venues, and competition schedules 
              to help Doping Control Officers (DOC) locate athletes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Failure to provide this information is an anti-doping rule violation and may lead to sanctions.
            </p>
          </div>

          {/* IOC SANCTIONS FOR DOPING OFFENCE Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">IOC SANCTIONS FOR DOPING OFFENCE</h2>
            
            <div className="space-y-6">
              {/* First Offence */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">A. Penalties for a first offence:</h3>
                
                <div className="ml-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      a. For ephedrine, phenylepropanolamine, pseudoephedrine, caffeine, strychnine or related substances:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>A warning</li>
                      <li>A fine of up to US $100,000</li>
                      <li>Suspension from any competition for one to six months.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      b. For anabolic steroids, beta blockers, diuretics, narcotics, peptide hormones, stimulants (other than those in a. above):
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>A fine of up to US $100,000</li>
                      <li>Suspension from any competition for a minimum of two years.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Second Offence */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">B. In case of second offence:</h3>
                
                <div className="ml-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      a. If the prohibited substance used is ephedrine, phenylepropanolamine, pseudoephedrine, caffeine, strychnine or related substances:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>A fine up to US $100,000</li>
                      <li>Suspension from any competition for two to eight years.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      b. If the prohibited substance used is one other than those referred to in paragraph a. above - or if it is a repeat offence (within ten years of the preceding sanction):
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>A fine up to US $100,000</li>
                      <li>Life ban on participation in any sports event in any capacity.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AntiDoping
