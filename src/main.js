import { createApp } from 'vue'
import App from './App.vue'
import InnerSite from './pages/InnerSite.vue'
import { normalizePath, resolvePage } from './content/pages.js'
import { applyRuntimeSeo } from './content/seo.js'
import './styles.css'
import './experience.css'
import './polish.css'
import './theme.css'
import './layout.css'
import './inner.css'

const currentPath = normalizePath(window.location.pathname)
applyRuntimeSeo(currentPath)

if (currentPath === '/') {
  const intentStorageKey = 'yavuz-visitor-intent'
  const intentSessionKey = 'yavuz-intent-session-v2'

  if (!sessionStorage.getItem(intentSessionKey)) {
    localStorage.removeItem(intentStorageKey)
  }

  document.addEventListener('click', event => {
    if (event.target.closest('.intent-option, .intent-browse')) {
      sessionStorage.setItem(intentSessionKey, '1')
    }
  }, true)

  createApp(App).mount('#app')

  requestAnimationFrame(() => {
    const navRoutes = {
      '#egitimler': '/egitimler',
      '#sinav': '/sinav',
      '#rehber': '/ogg-rehberi',
      '#kurumsal': '/kurumsal',
      '#hizmetler': '/guvenlik-hizmetleri',
    }

    document.querySelectorAll('.navigation > a:not(.nav-cta)').forEach(link => {
      const route = navRoutes[link.getAttribute('href')]
      if (route) link.setAttribute('href', route)
    })

    const trustCopy = [
      ['Temel + Yenileme', 'ÖGG Eğitimleri'],
      ['Saha Deneyimi', 'Gerçek Hizmet Geçmişi'],
      ['Bilgi Merkezi', 'Soru · Not · Mevzuat'],
    ]

    document.querySelectorAll('.hero-trust > div').forEach((item, index) => {
      const copy = trustCopy[index]
      if (!copy) return
      const strong = item.querySelector('strong')
      const span = item.querySelector('span')
      if (strong) strong.textContent = copy[0]
      if (span) span.textContent = copy[1]
    })

    const quickRoutes = [
      '/ogg-rehberi/nasil-ogg-olunur',
      '/sinav',
      '/egitimler/yenileme-egitimi',
      '/ogg-rehberi/gerekli-belgeler',
    ]

    document.querySelectorAll('.bento-card').forEach((link, index) => {
      if (quickRoutes[index]) link.setAttribute('href', quickRoutes[index])
    })

    const makeLinkedCard = (card, route) => {
      card.classList.add('is-linked')
      card.setAttribute('role', 'link')
      card.setAttribute('tabindex', '0')
      const open = () => { window.location.href = route }
      card.addEventListener('click', open)
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          open()
        }
      })
    }

    const learningRoutes = [
      '/sinav/cikmis-sorular',
      '/sinav/ders-notlari',
      '/sinav/online-deneme',
      '/ogg-rehberi',
    ]

    document.querySelectorAll('.learning-stack article').forEach((card, index) => {
      if (learningRoutes[index]) makeLinkedCard(card, learningRoutes[index])
    })

    const guideRoutes = [
      '/ogg-rehberi/nasil-ogg-olunur',
      '/egitimler',
      '/ogg-rehberi/saglik-raporu',
      '/ogg-rehberi/kimlik-yenileme',
    ]

    document.querySelectorAll('.guide-item').forEach((card, index) => {
      const route = guideRoutes[index]
      if (!route) return
      const label = card.querySelector('span')
      if (label) label.textContent = 'Rehberi Aç →'
      makeLinkedCard(card, route)
    })
  })
} else {
  createApp(InnerSite, {
    page: resolvePage(currentPath),
    currentPath,
  }).mount('#app')
}
