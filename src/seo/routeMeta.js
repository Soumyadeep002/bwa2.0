/** Set `VITE_SITE_URL` in `.env` (e.g. `https://yoursite.com`) for canonical URLs, Open Graph, and sitemap generation on build. */
export const SITE_NAME = 'Bihar Wushu Association'

export const DEFAULT_DESCRIPTION =
  'Official state governing body for Wushu in Bihar, India. State championships, athlete development, district units, anti-doping awareness, and affiliation with Wushu Association of India.'

export function getSiteUrl() {
  const raw = import.meta.env.VITE_SITE_URL
  return typeof raw === 'string' && raw.trim() ? raw.trim().replace(/\/$/, '') : ''
}

const ROUTES = {
  '/': {
    title: 'Home',
    description:
      'Bihar Wushu Association promotes Wushu across Bihar—events, training, district units, and pathways to national and international competition.',
  },
  '/about': {
    title: 'About',
    description:
      'Learn about the Bihar Wushu Association: mission, vision, and how we develop Wushu athletes and organize competitions statewide.',
  },
  '/district-units': {
    title: 'District Units',
    description:
      'District Wushu units across Bihar—contact persons, phone numbers, and emails for local associations affiliated with BWA.',
  },
  '/members': {
    title: 'Committee Members',
    description:
      'Executive committee and office bearers of the Bihar Wushu Association, including roles and contact details.',
  },
  '/achievement': {
    title: 'Achievements',
    description:
      'Medals, championships, and highlights from Bihar Wushu athletes at junior national, school games, and federation events.',
  },
  '/anti-doping': {
    title: 'Anti-Doping',
    description:
      'WADA, NADA, and clean-sport information for athletes and coaches affiliated with the Bihar Wushu Association.',
  },
  '/events': {
    title: 'Events',
    description:
      'Upcoming and past Wushu events, championships, and applications hosted or supported by the Bihar Wushu Association.',
  },
  '/gallery': {
    title: 'Gallery',
    description:
      'Photo gallery from Bihar Wushu Association events, training camps, and competitions across the state.',
  },
  '/rules-regulations': {
    title: 'Rules & Regulations',
    description:
      'Competition rules, eligibility, categories (Taolu, Sanda), and regulations aligned with WAI and IWF for BWA events.',
  },
  '/contact': {
    title: 'Contact',
    description:
      'Contact the Bihar Wushu Association in Muzaffarpur—address, email, phone, social links, and inquiry form.',
  },
}

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1)
  return pathname || '/'
}

export function getRouteMeta(pathname) {
  const path = normalizePath(pathname)
  if (path === '/admin' || path.startsWith('/admin/')) {
    return {
      title: 'Admin',
      description: 'Bihar Wushu Association administration.',
      noindex: true,
    }
  }
  const entry = ROUTES[path]
  if (entry) {
    return { ...entry, noindex: false }
  }
  return {
    title: 'Page',
    description: DEFAULT_DESCRIPTION,
    noindex: false,
  }
}
