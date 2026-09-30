import { useEffect, useMemo, useState } from 'react'
import { medalSessions } from '../data/medalList'
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

const eventPhotos = {
  '24th-junior-hyderabad': [juniorNational24Img1, juniorNational24Img2],
  '69th-nsg-srinagar': [nationalSchoolGames69],
  '9th-federation-cup': [federationCup9],
}

const athletePhotos = {
  'batumi-2024': {
    'Aprajeeta Mishra': apraajeetamishra,
    'Diksha Kumari': dikshakumari,
    'Rahul Kumar': rahulkumar,
  },
  '37th-national-games-goa': {
    'Isha Mishra': ishamishra,
    'Ashish Kumar': aashihskumars,
  },
  '32nd-senior-uttarakhand': {
    'Shubham Kumar': subhamkumar,
  },
  '38th-national-games': {
    'Aprajeeta Mishra': apraajeetamishra2025,
  },
  '10th-world-kungfu': {
    'Isha Mishra': ishaamishra2025,
  },
}

const cell = 'border border-gray-200 px-3 py-2 text-sm sm:text-base'

function Achievement() {
  const [filter, setFilter] = useState('All')
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    if (!preview) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setPreview(null)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [preview])

  const openPreview = (src, alt) => setPreview({ src, alt })

  const sessions = useMemo(() => {
    return medalSessions
      .map((session) => ({
        ...session,
        events: session.events.filter((event) => {
          if (filter === 'All') return true
          if (filter === 'International') return event.level === 'International'
          return event.level !== 'International'
        }),
      }))
      .filter((session) => session.events.length > 0)
  }, [filter])

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Achievements</h1>
        <p className="text-center text-gray-600 mb-8">National &amp; International Level Achievements</p>

        <div className="flex justify-center mb-10 gap-4 flex-wrap">
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

        {sessions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No achievements found for the selected filter.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {sessions.map((session) => (
              <section key={session.id}>
                <h2
                  className="text-white font-bold text-lg sm:text-xl px-4 py-3 rounded-md border-b-4 border-[#FF8C00]"
                  style={{ backgroundColor: '#017cc2' }}
                >
                  {session.label}
                </h2>

                <div className="mt-6 space-y-8">
                  {session.events.map((event) => {
                    const photos = eventPhotos[event.id] || []
                    const portraits = athletePhotos[event.id] || {}
                    return (
                      <div key={event.id}>
                        <h3 className="border-l-4 border-[#FF8C00] pl-3 text-[#017cc2] font-bold uppercase tracking-wide text-sm sm:text-base">
                          {event.title}
                        </h3>
                        {event.note ? (
                          <p className="mt-2 text-sm text-gray-500 pl-4">{event.note}</p>
                        ) : null}

                        {photos.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-3">
                            {photos.map((src, index) => {
                              const alt = `${event.title} — photo ${index + 1}`
                              return (
                                <button
                                  key={src}
                                  type="button"
                                  onClick={() => openPreview(src, alt)}
                                  className="group relative overflow-hidden rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#017cc2]"
                                  aria-label={`View larger photo of ${event.title}`}
                                >
                                  <img
                                    src={src}
                                    alt={alt}
                                    className="h-28 w-40 sm:h-36 sm:w-52 object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                </button>
                              )
                            })}
                          </div>
                        )}

                        <div className="mt-3 overflow-x-auto bg-white rounded-md shadow-sm">
                          <table className="w-full min-w-[640px] border-collapse">
                            <thead>
                              <tr className="text-white" style={{ backgroundColor: '#017cc2' }}>
                                <th className={`${cell} border-[#017cc2] text-left font-semibold w-[34%]`}>Name</th>
                                <th className={`${cell} border-[#017cc2] text-left font-semibold`}>Category</th>
                                <th className={`${cell} border-[#017cc2] text-left font-semibold w-[28%]`}>
                                  Position / Medal
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {event.athletes.map((row, index) => {
                                const photo = portraits[row.name]
                                return (
                                  <tr key={`${row.name}-${row.category}-${index}`} className="odd:bg-white even:bg-gray-50">
                                    <td className={`${cell} text-gray-900`}>
                                      <span className="inline-flex items-center gap-3">
                                        {photo ? (
                                          <button
                                            type="button"
                                            onClick={() => openPreview(photo, row.name)}
                                            className="shrink-0 rounded border border-gray-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#017cc2]"
                                            aria-label={`View larger photo of ${row.name}`}
                                          >
                                            <img
                                              src={photo}
                                              alt=""
                                              className="h-12 w-12 object-cover transition-transform duration-300 hover:scale-105"
                                            />
                                          </button>
                                        ) : null}
                                        {row.name}
                                      </span>
                                    </td>
                                    <td className={`${cell} text-gray-800`}>{row.category}</td>
                                    <td className={`${cell} text-gray-900 font-medium`}>{row.medal}</td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {filter === 'All' && session.summary ? (
                  <p className="mt-8 border-2 border-[#017cc2] px-4 py-3 font-semibold text-gray-900 bg-white">
                    Session {session.id} Summary: {session.summary}
                  </p>
                ) : null}
              </section>
            ))}
          </div>
        )}
      </div>

      {preview ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setPreview(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo preview"
        >
          <button
            type="button"
            onClick={() => setPreview(null)}
            className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white hover:text-gray-300"
            aria-label="Close preview"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={preview.src}
            alt={preview.alt}
            className="max-h-[90vh] max-w-full object-contain rounded-lg"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Achievement
