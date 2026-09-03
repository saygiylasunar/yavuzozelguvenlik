import { normalizePath, sitePages } from './pages.js'

export const SITE_URL = 'https://yavuzozelguvenlik.com.tr'
export const SITE_NAME = 'Yavuz Özel Güvenlik'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/yavuz-guvenlik.svg`

const homeSeo = {
  title: 'Yavuz Özel Güvenlik | Akşehir ÖGG Eğitimi ve Güvenlik Hizmetleri',
  description: 'Akşehir’de 2006’dan beri özel güvenlik eğitimi, ÖGG sınav hazırlığı, rehber içerikleri ve işletmelere özel güvenlik hizmetleri.',
}

const compact = (value, max) => {
  const text = String(value || '').replace(/\s+/g, ' ').trim()
  if (text.length <= max) return text
  return `${text.slice(0, max - 1).trimEnd()}…`
}

const parentPaths = path => {
  const parts = path.split('/').filter(Boolean)
  const result = ['/']
  for (let i = 1; i <= parts.length; i += 1) result.push(`/${parts.slice(0, i).join('/')}`)
  return result
}

const breadcrumbLabel = path => {
  if (path === '/') return 'Ana Sayfa'
  return sitePages[path]?.title || path.split('/').filter(Boolean).at(-1)?.replaceAll('-', ' ') || SITE_NAME
}

export const getSeo = value => {
  const path = normalizePath(value)
  const page = sitePages[path]
  const exists = path === '/' || Boolean(page)
  const title = path === '/'
    ? homeSeo.title
    : compact(page?.seoTitle || `${page?.title || 'Sayfa'} | ${SITE_NAME}`, 64)
  const description = path === '/'
    ? homeSeo.description
    : compact(page?.seoDescription || page?.lead || homeSeo.description, 158)
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`

  return {
    path,
    exists,
    title,
    description,
    canonical,
    image: page?.seoImage || DEFAULT_OG_IMAGE,
    robots: exists ? 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' : 'noindex,follow',
  }
}

export const getStructuredData = value => {
  const seo = getSeo(value)
  const crumbs = parentPaths(seo.path).filter(path => path === '/' || sitePages[path])

  const organization = {
    '@type': ['Organization', 'EducationalOrganization', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    telephone: '+90 545 425 31 80',
    email: 'iletisim@yavuzozelguvenlik.com.tr',
    foundingDate: '2006',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Yeni Mahalle Cumhuriyet Caddesi Kürşat 6 Sitesi A Blok 49/B',
      addressLocality: 'Akşehir',
      addressRegion: 'Konya',
      addressCountry: 'TR',
    },
    areaServed: ['Akşehir', 'Konya'],
    image: DEFAULT_OG_IMAGE,
  }

  const webPage = {
    '@type': 'WebPage',
    '@id': `${seo.canonical}#webpage`,
    url: seo.canonical,
    name: seo.title,
    description: seo.description,
    inLanguage: 'tr-TR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    primaryImageOfPage: { '@type': 'ImageObject', url: seo.image },
  }

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((path, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumbLabel(path),
      item: `${SITE_URL}${path === '/' ? '/' : path}`,
    })),
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        inLanguage: 'tr-TR',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      webPage,
      breadcrumb,
    ],
  }
}

const ensureMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
  return element
}

export const applyRuntimeSeo = value => {
  if (typeof document === 'undefined') return
  const seo = getSeo(value)
  document.title = seo.title
  ensureMeta('meta[name="description"]', { name: 'description', content: seo.description })
  ensureMeta('meta[name="robots"]', { name: 'robots', content: seo.robots })
  ensureMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title })
  ensureMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description })
  ensureMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
  ensureMeta('meta[property="og:url"]', { property: 'og:url', content: seo.canonical })
  ensureMeta('meta[property="og:image"]', { property: 'og:image', content: seo.image })
  ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME })
  ensureMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'tr_TR' })
  ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
  ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title })
  ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description })
  ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: seo.image })

  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = seo.canonical

  let schema = document.head.querySelector('script[data-yavuz-schema]')
  if (!schema) {
    schema = document.createElement('script')
    schema.type = 'application/ld+json'
    schema.dataset.yavuzSchema = ''
    document.head.appendChild(schema)
  }
  schema.textContent = JSON.stringify(getStructuredData(value))
}
