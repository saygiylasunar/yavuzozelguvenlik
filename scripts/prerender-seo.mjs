import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { sitePages } from '../src/content/pages.js'
import { getSeo, getStructuredData, SITE_URL } from '../src/content/seo.js'

const distDir = new URL('../dist/', import.meta.url)
const templatePath = new URL('../dist/index.html', import.meta.url)
const template = await readFile(templatePath, 'utf8')
const routes = ['/', ...Object.keys(sitePages)]

const escapeHtml = value => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')

const seoBlock = route => {
  const seo = getSeo(route)
  const schema = JSON.stringify(getStructuredData(route)).replaceAll('<', '\\u003c')
  return [
    `<title data-seo>${escapeHtml(seo.title)}</title>`,
    `<meta data-seo name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta data-seo name="robots" content="${escapeHtml(seo.robots)}" />`,
    `<link data-seo rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
    `<meta data-seo property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta data-seo property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta data-seo property="og:type" content="website" />`,
    `<meta data-seo property="og:url" content="${escapeHtml(seo.canonical)}" />`,
    `<meta data-seo property="og:image" content="${escapeHtml(seo.image)}" />`,
    `<meta data-seo property="og:image:width" content="1200" />`,
    `<meta data-seo property="og:image:height" content="630" />`,
    `<meta data-seo property="og:site_name" content="Yavuz Özel Güvenlik" />`,
    `<meta data-seo property="og:locale" content="tr_TR" />`,
    `<meta data-seo name="twitter:card" content="summary_large_image" />`,
    `<meta data-seo name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta data-seo name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta data-seo name="twitter:image" content="${escapeHtml(seo.image)}" />`,
    `<script data-seo type="application/ld+json">${schema}</script>`,
  ].join('\n  ')
}

const render = route => {
  const clean = template
    .replace(/\s*<title\s+data-seo[^>]*>.*?<\/title>/gis, '')
    .replace(/\s*<meta\s+data-seo[^>]*>/gis, '')
    .replace(/\s*<link\s+data-seo[^>]*>/gis, '')
    .replace(/\s*<script\s+data-seo[^>]*>.*?<\/script>/gis, '')
  return clean.replace('</head>', `  ${seoBlock(route)}\n</head>`)
}

for (const route of routes) {
  const target = route === '/'
    ? new URL('../dist/index.html', import.meta.url)
    : new URL(`../dist${route}/index.html`, import.meta.url)
  await mkdir(dirname(target.pathname), { recursive: true })
  await writeFile(target, render(route), 'utf8')
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map(route => `  <url><loc>${SITE_URL}${route === '/' ? '/' : route}</loc></url>`),
  '</urlset>',
].join('\n')

await writeFile(join(distDir.pathname, 'sitemap.xml'), sitemap, 'utf8')
await writeFile(
  join(distDir.pathname, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`,
  'utf8',
)
