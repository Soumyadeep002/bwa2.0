import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import {
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  getSiteUrl,
  getRouteMeta,
} from '../seo/routeMeta'

function buildJsonLd(siteUrl) {
  if (!siteUrl) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsOrganization',
    name: SITE_NAME,
    url: `${siteUrl}/`,
    email: 'biharwushuassociation@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Martial Art Office Harisabha Chowk',
      addressLocality: 'Muzaffarpur',
      addressRegion: 'Bihar',
      postalCode: '842001',
      addressCountry: 'IN',
    },
    sameAs: ['https://www.instagram.com/bihar_wushu'],
  }
}

function RouteSeo() {
  const { pathname: rawPath } = useLocation()
  const pathname = rawPath.split('?')[0].split('#')[0] || '/'
  const siteUrl = getSiteUrl()
  const { title, description, noindex } = getRouteMeta(pathname)
  const pageTitle = title === 'Home' ? SITE_NAME : `${title} | ${SITE_NAME}`
  const desc = description || DEFAULT_DESCRIPTION
  const canonical = (() => {
    if (!siteUrl) return ''
    const base = siteUrl.replace(/\/$/, '')
    if (pathname === '/' || pathname === '') return `${base}/`
    const seg =
      pathname.length > 1 && pathname.endsWith('/')
        ? pathname.slice(0, -1)
        : pathname
    return `${base}${seg.startsWith('/') ? seg : `/${seg}`}`
  })()
  const jsonLd = pathname === '/' ? buildJsonLd(siteUrl) : null

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  )
}

export default RouteSeo
