import { useMemo, useState } from 'react'
import apraajeetamishra from '../assets/imgs/achivements/apraajeeta_mishra.png'
import apraajeetamishra2025 from '../assets/imgs/achivements/aprajeeta_mishra_2025.jpg'
import ishaamishra2025 from '../assets/imgs/achivements/isha_misra_2025.jpg'
import dikshakumari from '../assets/imgs/achivements/diksha_kumari.png'
import rahulkumar from '../assets/imgs/achivements/rahul_kumar.png'
import ishamishra from '../assets/imgs/achivements/isha_mishra.png'
import aashihskumars from '../assets/imgs/achivements/aashihs_kumars.png'
import subhamkumar from '../assets/imgs/achivements/subham_kumar.png'
import juniorNational24Img1 from '../assets/imgs/achivements/24th Junior National Wushu Championship1.webp'
import juniorNational24Img2 from '../assets/imgs/achivements/24th Junior National Wushu Championship2.webp'
import nationalSchoolGames69 from '../assets/imgs/achivements/69th National School Games 2025.webp'
import federationCup9 from '../assets/imgs/achivements/9th Federation Cup Wushu Championship 2025.webp'

/**
 * One row per game / competition. Use `groupImage` when you have a single team photo;
 * use `groupImages` for multiple event photos; otherwise member thumbnails are shown in the Photo column.
 */
const gameAchievements = [
  {
    id: '24th-junior-national-wushu',
    year: 2025,
    event:
      '24th Junior National Wushu Championship\nGachibowli Stadium, Hyderabad, Telangana',
    category: 'Junior',
    groupImage: null,
    groupImages: [juniorNational24Img1, juniorNational24Img2],
    members: [
      { name: 'Arpita Dash', medal: 'Gold (3)', image: null },
      { name: 'Aditya Kumar', medal: 'Gold (2)', image: null },
      { name: 'Jiya Kumari', medal: 'Silver', image: null },
      { name: 'Krishna Kumari', medal: 'Bronze', image: null },
      { name: 'Pranshu Raj', medal: 'Bronze', image: null },
      { name: 'Raj Kumar', medal: 'Bronze', image: null },
      { name: 'Pankaj Nayan', medal: 'Bronze', image: null }
    ]
  },
  {
    id: '2025-34th-senior-national-wushu',
    year: 2025,
    event:
      '34th Senior National Wushu Championship 2025\nJaipur, Rajasthan',
    category: 'Senior',
    groupImage: null,
    members: [
      { name: 'Shagun Singh', medal: 'Gold', image: null },
      { name: 'Sapna Kumari', medal: 'Silver, Bronze', image: null },
      { name: 'Kritika Anand', medal: 'Silver', image: null },
      { name: 'Isha Mishra', medal: 'Bronze (2)', image: null },
      { name: 'Aprajeeta Mishra', medal: 'Bronze (2)', image: null },
      { name: 'Pooja Kumari', medal: 'Bronze', image: null },
      { name: 'Geshu Kumari', medal: 'Bronze (2)', image: null },
      { name: 'Kumar Anand', medal: 'Bronze', image: null },
      { name: 'Rubab Rabbani', medal: 'Bronze', image: null },
      { name: 'Raja Kumar', medal: 'Bronze', image: null }
    ]
  },
  {
    id: '2025-69th-national-school-games',
    year: 2025,
    event:
      '69th National School Games 2025\nSrinagar\nBihar Wushu Association — 4 medals (Silver ×2, Bronze ×2)',
    category: 'School',
    groupImage: nationalSchoolGames69,
    members: [
      { name: 'Pankaj Nayan', medal: 'Silver Medal', image: null },
      { name: 'Raj Kumar', medal: 'Silver Medal', image: null },
      { name: 'Anandi Raj', medal: 'Bronze Medal', image: null },
      { name: 'Rustom Singh', medal: 'Bronze Medal', image: null }
    ]
  },
  {
    id: '2025-9th-federation-cup-wushu',
    year: 2025,
    event:
      '9th Federation Cup Wushu Championship 2025\nRajnandgaon, Chhattisgarh (24–30 December 2025)\nBihar Wushu Association — 12 medals (Gold 5, Silver 3, Bronze 4)',
    category: 'Senior',
    groupImage: federationCup9,
    members: [
      { name: 'Arpita Dash', medal: 'Gold (2)', image: null },
      { name: 'Aaditay Kumar Sharma', medal: 'Gold (2)', image: null },
      { name: 'Pallavi Kumari', medal: 'Gold (1)', image: null },
      { name: 'Preet Raj', medal: 'Silver', image: null },
      { name: 'Anandi Rai', medal: 'Silver', image: null },
      { name: 'Kritika Anand', medal: 'Silver', image: null },
      { name: 'Pranshu Raj', medal: 'Bronze', image: null },
      { name: 'Pankaj Nayan', medal: 'Bronze', image: null },
      { name: 'Krishna Kumari', medal: 'Bronze', image: null },
      { name: 'Prabhu Raj Singh', medal: 'Bronze', image: null }
    ]
  },
  {
    id: '2025-national-games',
    year: 2025,
    event: '38th national games, Uttrakhand 2025',
    category: 'Senior',
    groupImage: null,
    members: [
      { name: 'Shubham Kumar', medal: 'Silver medalist', image: subhamkumar },
      { name: 'Aprajeeta Mishra', medal: 'Silver medalist', image: apraajeetamishra2025 }
    ]
  },
  {
    id: '2025-world-kungfu',
    year: 2025,
    event: '10th World Kungfu Championship, China 2025',
    category: 'International',
    groupImage: null,
    members: [
      { name: 'Isha Mishra', medal: 'Bronze medalist', image: ishaamishra2025 }
    ]
  },
  {
    id: '2024-batumi',
    year: 2024,
    event: 'Batumi International Wushu Championship, Georgia',
    category: 'International',
    groupImage: null,
    members: [
      { name: 'Aprajeeta Mishra', medal: 'Gold & Bronze medalist', image: apraajeetamishra },
      { name: 'Diksha Kumari', medal: 'Gold medalist', image: dikshakumari },
      { name: 'Rahul Kumar', medal: 'Silver medalist', image: rahulkumar }
    ]
  },
  {
    id: '2023-national-games-goa',
    year: 2023,
    event: '37th National Games, Goa 2023',
    category: 'Senior',
    groupImage: null,
    members: [
      { name: 'Isha Mishra', medal: 'Bronze medalist', image: ishamishra },
      { name: 'Aashish Kumar', medal: 'Bronze medalist', image: aashihskumars }
    ]
  }
]

function countMedalsFromDescription(medalDescription) {
  const raw = String(medalDescription)
  const paren = raw.match(/\((\d+)\)\s*$/)
  if (paren) return parseInt(paren[1], 10)
  const s = raw.toLowerCase()
  const n =
    (s.includes('gold') ? 1 : 0) +
    (s.includes('silver') ? 1 : 0) +
    (s.includes('bronze') ? 1 : 0)
  return n > 0 ? n : 1
}

function isInternationalRow(row) {
  return row.category === 'International'
}

const cellBorder = 'border border-gray-400 px-3 sm:px-4 py-3 align-top'

/** Fixed square frames so all achievement photos read at the same size */
const achievementPhotoClass =
  'block h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 shrink-0 object-cover rounded-md border border-gray-300 bg-gray-100'

function Achievement() {
  const [filter, setFilter] = useState('All')

  const rows = useMemo(() => {
    return gameAchievements
      .map((game) => ({
        ...game,
        totalMedals: game.members.reduce(
          (sum, m) => sum + countMedalsFromDescription(m.medal),
          0
        )
      }))
      .sort((a, b) => b.year - a.year || a.id.localeCompare(b.id))
  }, [])

  const filteredRows = useMemo(() => {
    if (filter === 'All') return rows
    if (filter === 'International') return rows.filter((r) => isInternationalRow(r))
    return rows.filter((r) => !isInternationalRow(r))
  }, [rows, filter])

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Achievements</h1>

        <div className="flex justify-center mb-8 gap-4 flex-wrap">
          {['All', 'International', 'National'].map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                filter === key
                  ? 'text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
              style={filter === key ? { backgroundColor: '#017cc2' } : {}}
            >
              {key}
            </button>
          ))}
        </div>

        {filteredRows.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No achievements found for the selected filter.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md bg-white border-2 border-gray-500">
            <table className="w-full min-w-[880px] text-left text-sm sm:text-base border-collapse">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#017cc2' }}>
                  <th className={`${cellBorder} font-semibold whitespace-nowrap`}>Year</th>
                  <th className={`${cellBorder} font-semibold min-w-[220px]`}>Photo</th>
                  <th className={`${cellBorder} font-semibold min-w-[220px]`}>
                    Game / competition
                  </th>
                  <th className={`${cellBorder} font-semibold min-w-[200px]`}>Achievers</th>
                  <th className={`${cellBorder} font-semibold text-right whitespace-nowrap`}>
                    Medals (total)
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, idx) => (
                  <tr key={row.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className={`${cellBorder} text-gray-900 font-medium whitespace-nowrap`}>
                      {row.year}
                    </td>
                    <td className={cellBorder}>
                      {row.groupImage ? (
                        <img
                          src={row.groupImage}
                          alt={`${row.event} — group`}
                          className={achievementPhotoClass}
                        />
                      ) : row.groupImages?.length ? (
                        <div className="flex flex-col gap-2 items-start">
                          {row.groupImages.map((src, i) => (
                            <img
                              key={i}
                              src={src}
                              alt={`${row.event.split('\n')[0]} — ${i + 1}`}
                              className={achievementPhotoClass}
                            />
                          ))}
                        </div>
                      ) : row.members.some((m) => m.image) ? (
                        <div className="flex flex-col gap-2 items-start">
                          {row.members
                            .filter((m) => m.image)
                            .map((m) => (
                              <img
                                key={m.name}
                                src={m.image}
                                alt={m.name}
                                title={m.name}
                                className={achievementPhotoClass}
                              />
                            ))}
                        </div>
                      ) : (
                        <span className="text-gray-400 text-sm">—</span>
                      )}
                    </td>
                    <td className={`${cellBorder} text-gray-800 whitespace-pre-line`}>
                      {row.event}
                    </td>
                    <td className={cellBorder}>
                      <ul className="space-y-2.5 list-none m-0 p-0">
                        {row.members.map((m) => (
                          <li key={m.name}>
                            <span className="font-semibold text-gray-900">{m.name}</span>
                            <span className="block text-xs sm:text-sm text-gray-600 mt-0.5">
                              {m.medal}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className={`${cellBorder} text-right`}>
                      <span className="font-bold text-gray-900 tabular-nums text-lg">
                        {row.totalMedals}
                      </span>
                      <span className="block text-xs text-gray-500 mt-1">
                        {row.members.length} athlete{row.members.length !== 1 ? 's' : ''}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default Achievement
