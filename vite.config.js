import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import url from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

/** Must match public routes in `src/seo/routeMeta.js` */
const SITEMAP_PATHS = [
  '/',
  '/about',
  '/district-units',
  '/members',
  '/achievement',
  '/anti-doping',
  '/events',
  '/gallery',
  '/rules-regulations',
  '/contact',
]

function envFilePathsForMode(mode) {
  return [
    path.join(__dirname, '.env'),
    path.join(__dirname, '.env.local'),
    path.join(__dirname, `.env.${mode}`),
    path.join(__dirname, `.env.${mode}.local`),
  ]
}

function parseEnvLine(line) {
  const trimmed = line.trim()
  if (!trimmed || trimmed.startsWith('#')) return null
  const eq = trimmed.indexOf('=')
  if (eq === -1) return null
  const key = trimmed.slice(0, eq).trim()
  let val = trimmed.slice(eq + 1).trim()
  if (
    (val.startsWith('"') && val.endsWith('"')) ||
    (val.startsWith("'") && val.endsWith("'"))
  ) {
    val = val.slice(1, -1)
  }
  return [key, val]
}

/**
 * `VITE_SITE_URL` from env files wins over the shell so project `.env` is not overridden by a stale
 * machine-wide variable. If unset in files, use `process.env.VITE_SITE_URL` (CI).
 */
function mergeEnvFromFiles(mode) {
  const merged = {}
  for (const fp of envFilePathsForMode(mode)) {
    if (!fs.existsSync(fp)) continue
    const content = fs.readFileSync(fp, 'utf8')
    for (const line of content.split(/\r?\n/)) {
      const parsed = parseEnvLine(line)
      if (parsed) merged[parsed[0]] = parsed[1]
    }
  }
  return merged
}

function resolveViteSiteUrl(mode) {
  const fromFiles = mergeEnvFromFiles(mode).VITE_SITE_URL?.trim()
  if (fromFiles) return fromFiles.replace(/\/$/, '')
  return (process.env.VITE_SITE_URL?.trim() || '').replace(/\/$/, '')
}

function seoBuildPlugin(siteUrlFromEnv) {
  return {
    name: 'seo-build',
    closeBundle() {
      const base =
        typeof siteUrlFromEnv === 'string'
          ? siteUrlFromEnv.trim().replace(/\/$/, '')
          : ''
      if (!base) return

      const distDir = path.resolve(__dirname, 'dist')
      if (!fs.existsSync(distDir)) return

      const urlEntries = SITEMAP_PATHS.map((route) => {
        const loc = route === '/' ? `${base}/` : `${base}${route}`
        const priority = route === '/' ? '1.0' : '0.8'
        return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
      }).join('\n')

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`
      fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8')

      const robots = `User-agent: *\nAllow: /\n\nDisallow: /admin\nDisallow: /admin/\n\nSitemap: ${base}/sitemap.xml\n`
      fs.writeFileSync(path.join(distDir, 'robots.txt'), robots, 'utf8')
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const siteUrl = resolveViteSiteUrl(mode)

  return {
    define: {
      'import.meta.env.VITE_SITE_URL': JSON.stringify(siteUrl),
    },
    plugins: [react(), tailwindcss(), seoBuildPlugin(siteUrl)],
  }
})
