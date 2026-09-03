import { createApp } from 'vue'
import App from './App.vue'
import InnerSite from './pages/InnerSite.vue'
import { normalizePath, resolvePage } from './content/pages.js'
import './styles.css'
import './experience.css'
import './polish.css'
import './theme.css'
import './layout.css'
import './inner.css'

const currentPath = normalizePath(window.location.pathname)

if (currentPath === '/') {
  createApp(App).mount('#app')

  requestAnimationFrame(() => {
    const navRoutes = {
      Eğitimler: '/egitimler',
      'Sınav merkezi': '/sinav',
      'ÖGG rehberi': '/ogg-rehberi',
      Kurumsal: '/kurumsal',
      Hizmetler: '/guvenlik-hizmetleri',
    }

    document.querySelectorAll('.navigation > a:not(.nav-cta)').forEach(link => {
      const route = navRoutes[link.textContent.trim()]
      if (route) link.setAttribute('href', route)
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

    const learningRoutes = [
      '/sinav/cikmis-sorular',
      '/sinav/ders-notlari',
      '/sinav/online-deneme',
      '/ogg-rehberi',
    ]

    document.querySelectorAll('.learning-stack article').forEach((card, index) => {
      const route = learningRoutes[index]
      if (!route) return
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
      card.classList.add('is-linked')
      card.setAttribute('role', 'link')
      card.setAttribute('tabindex', '0')
      const label = card.querySelector('span')
      if (label) label.textContent = 'Rehberi aç →'
      const open = () => { window.location.href = route }
      card.addEventListener('click', open)
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          open()
        }
      })
    })
  })
} else {
  createApp(InnerSite, {
    page: resolvePage(currentPath),
    currentPath,
  }).mount('#app')
}
