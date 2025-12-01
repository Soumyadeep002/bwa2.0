import founderImage from '../assets/imgs/founder.png'

function BWAFounder() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
          {/* Left Section - Portrait */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
            <img
              src={founderImage}
              alt="Guru Dinesh Mishra"
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-xs lg:max-w-sm h-auto object-contain"
            />
          </div>

          {/* Right Section - Text */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#017cc2' }}>
              Bihar Wushu Association
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#FF8C00' }}>
              Guru Dinesh Mishra
            </h3>
            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              The Pillar of Bihar Wushu
            </p>

            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                Guru Dinesh Mishra is the soul and strength behind Wushu in Bihar. He is the man who brought Wushu from the ground to glory. When Wushu was unknown in Bihar, he gave it identity, respect, and direction.
              </p>
              <p>
                His journey began as Bihar Team Coach in 1993, and he became the first South Asian Wushu Coach and Judge Diploma holder. Under his leadership, Bihar achieved success at national and international levels, with his students winning gold, silver, and bronze medals.
              </p>
              <p>
                His international recognition is highlighted by his role as a judge and coach in countries like China, Iran, Sri Lanka, and Bangladesh. His presence has consistently led to medals in various championships including South Asian Games, World Cups, Asian Games, and National Games.
              </p>
              <p>
                Beyond medals, he has built a generation of disciplined, strong, and focused Wushu warriors. He is not just a coach, but a Guru in the truest sense.
              </p>
              <p className="font-semibold text-gray-900">
                Bihar bows in respect to the man who gave Wushu a future. His contribution is divine, and his legacy is immortal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BWAFounder

