<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { navigation } from '../content/pages.js'

const props = defineProps({
  page: { type: Object, required: true },
  currentPath: { type: String, required: true },
})

const menuOpen = ref(false)
const themePreference = ref('auto')
let themeMedia

const themeLabel = computed(() => ({ auto: 'Auto', light: 'Açık', dark: 'Koyu' })[themePreference.value])
const themeIcon = computed(() => ({ auto: 'brightness_auto', light: 'light_mode', dark: 'dark_mode' })[themePreference.value])

const whatsappGeneral = 'https://wa.me/905454253180?text=Merhaba%2C%20Yavuz%20%C3%96zel%20G%C3%BCvenlik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.'

const applyTheme = () => {
  if (!themeMedia) return
  const resolved = themePreference.value === 'auto'
    ? (themeMedia.matches ? 'dark' : 'light')
    : themePreference.value
  document.documentElement.dataset.theme = resolved
  document.documentElement.style.colorScheme = resolved
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolved === 'dark' ? '#07151d' : '#f4f0e8')
}

const cycleTheme = () => {
  const themes = ['auto', 'light', 'dark']
  themePreference.value = themes[(themes.indexOf(themePreference.value) + 1) % themes.length]
  localStorage.setItem('yavuz-theme', themePreference.value)
  applyTheme()
}

const onSystemThemeChange = () => {
  if (themePreference.value === 'auto') applyTheme()
}

const parentPath = computed(() => {
  const parts = props.currentPath.split('/').filter(Boolean)
  if (parts.length < 2) return '/'
  return `/${parts[0]}`
})

const parentLabel = computed(() => {
  const match = navigation.find(([, path]) => path === parentPath.value)
  return match?.[0] || 'Ana Sayfa'
})

onMounted(() => {
  themeMedia = window.matchMedia('(prefers-color-scheme: dark)')
  const stored = localStorage.getItem('yavuz-theme')
  if (['auto', 'light', 'dark'].includes(stored)) themePreference.value = stored
  applyTheme()
  themeMedia.addEventListener?.('change', onSystemThemeChange)
  window.scrollTo(0, 0)
})

onBeforeUnmount(() => themeMedia?.removeEventListener?.('change', onSystemThemeChange))
</script>

<template>
  <div class="inner-shell">
    <a class="skip-link" href="#content">İçeriğe geç</a>

    <div class="utility-bar">
      <div class="container utility-bar__inner">
        <span>Akşehir · Konya</span>
        <span>2006’dan beri eğitim ve güvenlik hizmetleri</span>
        <a :href="whatsappGeneral" target="_blank" rel="noreferrer">0545 425 31 80 · WhatsApp</a>
      </div>
    </div>

    <header class="site-header inner-header">
      <div class="container header-inner">
        <a class="brand" href="/">
          <span class="brand-symbol">Y</span>
          <span><strong>Yavuz Özel Güvenlik</strong><small>Eğitim · Hizmet · Bilgi</small></span>
        </a>

        <nav id="inner-navigation" class="navigation" :class="{ 'is-open': menuOpen }">
          <a v-for="item in navigation" :key="item[1]" :href="item[1]" :class="{ 'is-current': currentPath === item[1] || currentPath.startsWith(`${item[1]}/`) }">{{ item[0] }}</a>
          <a class="nav-cta" href="/iletisim">İletişim</a>
        </nav>

        <button class="theme-toggle" type="button" :aria-label="`Tema: ${themeLabel}. Değiştirmek için tıklayın.`" @click="cycleTheme">
          <span class="material-symbols-rounded" aria-hidden="true">{{ themeIcon }}</span>
          <small>{{ themeLabel }}</small>
        </button>

        <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-controls="inner-navigation" @click="menuOpen = !menuOpen">
          <span></span><span></span><span></span><b>Menü</b>
        </button>
      </div>
    </header>

    <main id="content" class="inner-main">
      <section class="inner-hero">
        <div class="container">
          <nav class="breadcrumbs" aria-label="Sayfa yolu">
            <a href="/">Ana Sayfa</a><span>›</span>
            <a v-if="parentPath !== '/' && parentPath !== currentPath" :href="parentPath">{{ parentLabel }}</a>
            <span v-if="parentPath !== '/' && parentPath !== currentPath">›</span>
            <strong>{{ page.title }}</strong>
          </nav>
          <p class="eyebrow">{{ page.eyebrow }}</p>
          <h1>{{ page.title }}</h1>
          <p class="inner-lead">{{ page.lead }}</p>

          <div v-if="page.facts?.length" class="inner-facts">
            <span v-for="fact in page.facts" :key="fact">{{ fact }}</span>
          </div>
        </div>
      </section>

      <section class="inner-content-section">
        <div class="container inner-content-grid">
          <article class="inner-article">
            <div v-if="page.notice" class="inner-notice">
              <span class="material-symbols-rounded" aria-hidden="true">info</span>
              <p>{{ page.notice }}</p>
            </div>

            <div v-if="page.steps?.length" class="inner-steps">
              <div v-for="step in page.steps" :key="step[0]" class="inner-step">
                <span>{{ step[0] }}</span>
                <div><h2>{{ step[1] }}</h2><p>{{ step[2] }}</p></div>
              </div>
            </div>

            <div v-if="page.timeline?.length" class="inner-timeline">
              <div v-for="item in page.timeline" :key="item[0]">
                <strong>{{ item[0] }}</strong><span>{{ item[1] }}</span>
              </div>
            </div>

            <section v-for="section in page.sections" :key="section.title" class="inner-copy-block">
              <h2>{{ section.title }}</h2>
              <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
              <ul v-if="section.bullets?.length">
                <li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
              <a v-if="section.action" class="button button--warm inner-action" :href="section.action.url" :target="section.action.url.startsWith('http') ? '_blank' : undefined" rel="noreferrer">{{ section.action.label }}</a>
            </section>

            <div v-if="page.source" class="official-source">
              <div>
                <span>✓ RESMÎ KAYNAK</span>
                <strong>Emniyet Genel Müdürlüğü</strong>
                <p>Mevzuata, başvuruya veya sınava bağlı bilgilerde güncel resmî metni esas alın.</p>
              </div>
              <a :href="page.source.url" target="_blank" rel="noreferrer">{{ page.source.label }} ↗</a>
            </div>
          </article>

          <aside class="inner-sidebar">
            <div class="inner-contact-card">
              <p class="eyebrow">Hızlı İletişim</p>
              <h2>Takıldığınız yerde doğrudan sorun.</h2>
              <a :href="whatsappGeneral" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.149-.67.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.447 4.434-9.878 9.883-9.878a9.81 9.81 0 0 1 6.986 2.893 9.825 9.825 0 0 1 2.89 6.988c-.003 5.448-4.435 9.878-9.875 9.878m8.413-18.297A11.815 11.815 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.056 24l6.305-1.654a11.88 11.88 0 0 0 5.688 1.448h.005c6.559 0 11.894-5.335 11.897-11.893a11.82 11.82 0 0 0-3.487-8.413Z"/></svg>
                0545 425 31 80
              </a>
              <span>Yeni Mahalle Cumhuriyet Caddesi<br>Kürşat 6 Sitesi A Blok 49/B<br>Akşehir / Konya</span>
            </div>
          </aside>
        </div>
      </section>

      <section v-if="page.related?.length" class="inner-related-section">
        <div class="container">
          <p class="eyebrow">Devam Edin</p>
          <h2>İlgili sayfalar</h2>
          <div class="inner-related-grid">
            <a v-for="item in page.related" :key="item.path" :href="item.path"><strong>{{ item.label }}</strong><span>→</span></a>
          </div>
        </div>
      </section>
    </main>

    <a class="whatsapp-float" :href="whatsappGeneral" target="_blank" rel="noreferrer" aria-label="WhatsApp'tan Yavuz Özel Güvenlik ile iletişime geç">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.149-.67.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.447 4.434-9.878 9.883-9.878a9.81 9.81 0 0 1 6.986 2.893 9.825 9.825 0 0 1 2.89 6.988c-.003 5.448-4.435 9.878-9.875 9.878m8.413-18.297A11.815 11.815 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.056 24l6.305-1.654a11.88 11.88 0 0 0 5.688 1.448h.005c6.559 0 11.894-5.335 11.897-11.893a11.82 11.82 0 0 0-3.487-8.413Z"/></svg>
      <span class="whatsapp-float__copy"><small>WhatsApp</small><strong>0545 425 31 80</strong></span>
    </a>

    <footer class="footer">
      <div class="container footer-grid">
        <div class="brand brand--footer"><span class="brand-symbol">Y</span><span><strong>Yavuz Özel Güvenlik</strong><small>Akşehir · Konya</small></span></div>
        <p>Özel güvenlik eğitimi · Güvenlik hizmetleri · ÖGG bilgi merkezi</p>
        <a class="footer-credit" href="https://saygiylasunar.com" target="_blank" rel="noreferrer"><span>Site</span><strong>Ersen Filiz · Saygıyla Sunar</strong><b>↗</b></a>
      </div>
    </footer>
  </div>
</template>
