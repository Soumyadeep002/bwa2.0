import sonshou1 from '../assets/imgs/about/sonshou1.png'
import sonshou2 from '../assets/imgs/about/sonshou2.png'
import taolu1 from '../assets/imgs/about/taolu1.png'
import taolu2 from '../assets/imgs/about/taolu2.png'

function WushuSports() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">WUSHU SPORTS</h2>
        
        <section id="about" className=" overflow-hidden">
          <div className="text-justify text-xs md:text-base lg:text-lg flex flex-col gap-8">
            <p data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in-out">
              <span className="font-semibold">Wushu</span>, originating in ancient
              China, began as a system of combat techniques for self-defense and
              survival. Over centuries, it evolved from a military art into a
              holistic discipline emphasizing both physical strength and mental
              cultivation. Influenced by Buddhism and Taoism between the 3rd and
              6th centuries A.D., it gained spiritual depth and became a symbol of
              inner balance and wellness. In 1928, the Central Wushu Institute was
              founded in Nanjing, integrating Wushu into modern sports culture.
              Its global recognition began with a demonstration at the 1936 Berlin
              Olympics, leading to its worldwide popularity.
            </p>
          <p data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out">
            <span className="font-semibold">Wushu in India</span><br />
            Wushu first came to India in 1989 with the efforts made by Late Sri
            Anand Kacker by formation of Wushu Association of India and gaining
            its popularity day by day with its thirty five units in all over
            India.
          </p>
          <p data-aos="fade-left" data-aos-delay="300" data-aos-easing="ease-in-out">
            <span className="font-semibold">Classification of Wushu</span><br />
            Wushu is classified into two major Categories Sanshou and Taolu.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-4 lg:gap-5 my-20">
          <div className="w-full md:w-1/2 flex flex-col justify-between ">
            <div className="rounded-lg mb-4 overflow-hidden" data-aos="fade-up" data-aos-easing="ease-in-out">
              <img
                src={sonshou1}
                alt="Sanshou"
                className="w-full h-auto object-cover"
              />
            </div>
            <div
              className="bg-blue-500 px-8 py-3 w-fit text-xl mx-auto text-white rounded-xl font-semibold my-8"
              data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out">
              Sanshou
            </div>
            <div className="text-justify flex flex-col gap-5 text-xs md:text-base lg:text-lg">
              <p data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out">
                <span className="font-semibold">Free Combat</span><br />
                Sanshou combines kicks, punches, holds, pushes, and throws under
                fixed rules, making it an intense and strategic combat sport.
              </p>
              <div data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out">
                <span className="font-semibold">Key Characteristics of Wushu</span>
                <ul className="ml-2 mt-2 list-disc list-inside" data-aos="fade-right" data-aos-delay="400" data-aos-easing="ease-in-out">
                  <li>Blend of toughness and softness for mental balance</li>
                  <li>Harmony between mind and body</li>
                  <li>Generation and flow of internal energy (Chi)</li>
                  <li>Emphasis on inner strength</li>
                  <li>Continuous movement of Chi</li>
                  <li>Precision in combat techniques</li>
                </ul>
              </div>
              <p data-aos="fade-right" data-aos-delay="300" data-aos-easing="ease-in-out">
                <span className="font-semibold">Health & Artistic Benefits</span><br />
                The regular practice of Wushu produces beneficial effects not only on the muscles and bodies but also on the nervous, respiratory and cardiovascular systems. That is why Wushu is widely recommended as an effective means of keeping fit. The practical attacking and defending techniques of Wushu can be employed effectively for self-defense. Wushu is also a performing art and many Wushu movements are incorporated into Modern Dance, Dramas, the Ballet and Gymnastics.
              </p>
              <div data-aos="fade-right" data-aos-delay="400" data-aos-easing="ease-in-out">
                <span className="font-semibold">Competition Categories: Sanshou (Free Combat)</span>
                <ul className="ml-2 mt-2 list-disc list-inside" data-aos="fade-right" data-aos-delay="400" data-aos-easing="ease-in-out">
                  <li>Senior (Men): 48–90+ Kg</li>
                  <li>Senior (Women): 45–70+ Kg</li>
                  <li>Junior Boys: 45–75 Kg</li>
                  <li>Junior Girls: 45–70 Kg</li>
                  <li>Sub-Junior Boys & Girls: 20–52 Kg</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg mt-8 overflow-hidden" data-aos="fade-up" data-aos-easing="ease-in-out">
              <img
                src={sonshou2}
                alt="Sanshou"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div className="rounded-lg mb-4 overflow-hidden" data-aos="fade-up" data-aos-easing="ease-in-out">
              <img
                src={taolu1}
                alt="Taolu"
                className="w-full h-auto object-cover"
              />
            </div>
            <div
              className="bg-blue-500 px-8 py-3 w-fit text-xl mx-auto text-white rounded-xl font-semibold my-8"
              data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in-out">
              Taolu
            </div>
            <div className="text-justify flex flex-col gap-5 text-xs md:text-base lg:text-lg">
              <p data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in-out">
                <span className="font-semibold">Wushu routines</span><br />
                Wushu routines are performed barehanded or with weapons, combining attack and defense, fast and slow movements, strength and softness, offering both physical and mental benefits.
                <br /><br />
                <span className="font-semibold">Barehanded Forms:</span> Include Taichi, effective in improving health and managing chronic conditions like high blood pressure, heart disease, and obesity.
                <br /><br />
                <span className="font-semibold">Weapons Forms:</span> Use broad sword, short sword, spear, cudgel, etc.
              </p>
              <div data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out">
                <span className="font-semibold">Key Characteristics of Wushu</span>
                <ul className="ml-2 mt-2 list-disc list-inside" data-aos="fade-left" data-aos-delay="400" data-aos-easing="ease-in-out">
                  <li>Balance of strength and softness</li>
                  <li>Harmony of mind and body</li>
                  <li>Generation and control of internal energy (Chi)</li>
                  <li>Emphasis on inner power</li>
                  <li>Smooth, flowing movements</li>
                  <li>Precision in techniques</li>
                </ul>
              </div>
              <p data-aos="fade-left" data-aos-delay="300" data-aos-easing="ease-in-out">
                <span className="font-semibold">Health & Artistic Impact</span><br />
                Wushu strengthens the nervous, respiratory, and cardiovascular systems. It's also a performing art, often seen in modern dance, ballet, and drama.
              </p>
              <p data-aos="fade-left" data-aos-delay="400" data-aos-easing="ease-in-out">
                <span className="font-semibold">Taolu Competition Events</span><br />
                Taolu competitions, open to all age groups, feature events for both males and females. Male events include Nanquan, Nandao/Nangun, Changquan, Daoshu/Gunshu, Taijiquan, Taijijian, Jianshu/Qiangshu, and Dual Events. Female events include similar categories with slight variations. Equipment used includes display cards, spring board, arena, broad and straight swords, heavy swords, spears (Qiangshu), and sticks (Gunshu).
              </p>
            </div>
            <div className="rounded-lg mt-8 overflow-hidden" data-aos="fade-up" data-aos-easing="ease-in-out">
              <img
                src={taolu2}
                alt="Taolu"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      </div>
    </section>
  )
}

export default WushuSports
