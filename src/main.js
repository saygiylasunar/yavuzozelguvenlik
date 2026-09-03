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
  })
} else {
  createApp(InnerSite, {
    page: resolvePage(currentPath),
    currentPath,
  }).mount('#app')
}
