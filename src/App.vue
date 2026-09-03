<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import IntentGate from './components/IntentGate.vue'
import SecurityMap from './components/SecurityMap.vue'

const menuOpen = ref(false)
const selectedService = ref(0)
const headerCompact = ref(false)
const intentOpen = ref(false)
const userIntent = ref('')
const themePreference = ref('auto')
const examDate = new Date('2026-10-24T10:00:00+03:00')

const whatsappNumber = '905454253180'
const whatsappUrl = message => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
const whatsappGeneral = whatsappUrl('Merhaba, Yavuz Özel Güvenlik hakkında bilgi almak istiyorum.')
const whatsappEducation = whatsappUrl('Merhaba, özel güvenlik eğitimi hakkında bilgi almak istiyorum.')
const whatsappService = whatsappUrl('Merhaba, işletmem veya tesisim için özel güvenlik hizmeti hakkında bilgi almak istiyorum.')

const daysUntilExam = computed(() => {
  const diff = examDate.getTime() - Date.now()
  return Math.max(0, Math.ceil(diff / 86400000))
})

const themeLabel = computed(() => ({ auto: 'Auto', light: 'Açık', dark: 'Koyu' })[themePreference.value])
const themeIcon = computed(() => ({ auto: 'brightness_auto', light: 'light_mode', dark: 'dark_mode' })[themePreference.value])

const intentProfiles = {
  browse: {
    label: 'Sadece geziniyorum',
    cta: 'Hızlı bilgi',
    href: '#iletisim',
    hero: 'Eğitimleri incele',
    heroHref: '#egitimler',
    popupHref: null,
  },
  basic: {
    label: 'İlk kez ÖGG olacağım',
    cta: 'Temel eğitim bilgisi',
    href: '#egitimler',
    hero: 'Temel eğitime başla',
    heroHref: '#egitimler',
    popupHref: '#egitimler',
  },
  renewal: {
    label: 'Kimliğimi yenileyeceğim',
    cta: 'Yenileme süreci',
    href: '#egitimler',
    hero: 'Yenileme eğitimini gör',
    heroHref: '#egitimler',
    popupHref: '#egitimler',
  },
  exam: {
    label: 'Sınava hazırlanıyorum',
    cta: 'Sınav merkezine geç',
    href: '#sinav',
    hero: 'Sınav merkezini aç',
    heroHref: '#sinav',
    popupHref: '#sinav',
  },
  documents: {
    label: 'Gerekli belgeleri arıyorum',
    cta: 'Belgeleri incele',
    href: '#rehber',
    hero: 'Başvuru rehberini aç',
    heroHref: '#rehber',
    popupHref: '#rehber',
  },
  service: {
    label: 'Güvenlik hizmeti almak istiyorum',
    cta: 'Hizmet teklifi',
    href: '#iletisim',
    hero: 'Hizmet alanlarını incele',
    heroHref: '#hizmetler',
    popupHref: '#hizmetler',
  },
}

const activeIntent = computed(() => intentProfiles[userIntent.value] || null)

const quickActions = [
  { index: '01', title: 'ÖGG olmak istiyorum', text: 'Temel eğitim, şartlar ve kayıt yolunu tek akışta görün.', href: '#egitimler', featured: true },
  { index: '02', title: 'Sınava hazırlanıyorum', text: 'Ders notları, çıkmış sorular ve hızlı tekrar.', href: '#sinav' },
  { index: '03', title: 'Kimliğimi yenileyeceğim', text: 'Yenileme eğitiminden kimlik sürecine kadar ilerleyin.', href: '#rehber' },
  { index: '04', title: 'Gerekli belgeler', text: 'Başvuru evrakları ve sağlık sürecini kontrol edin.', href: '#rehber' },
]

const services = [
  {
    title: 'Sanayi ve üretim',
    kicker: 'Fabrika güvenliği',
    text: 'Üretim sahaları, giriş-çıkış kontrolü ve tesis güvenliği için planlı koruma yaklaşımı.',
    refs: ['İzi Süt · Akşehir Organize Sanayi', 'Marmara Tohum Çeltik Tesisleri'],
  },
  {
    title: 'Şantiye ve saha',
    kicker: 'Saha güvenliği',
    text: 'Çalışma sahaları ve şantiyelerde erişim, çevre ve operasyon güvenliğine odaklanan hizmetler.',
    refs: ['Ilgın Kömür İşletmeleri · Düzgün İş Makineleri'],
  },
  {
    title: 'Eğitim kurumları',
    kicker: 'Okul güvenliği',
    text: 'Öğrenci, personel ve ziyaretçi hareketinin yoğun olduğu eğitim alanlarında kontrollü güvenlik.',
    refs: ['Akşehir Selçuklu Anadolu Lisesi', 'Akşehir Yıldırım İlkokulu'],
  },
  {
    title: 'Enerji tesisleri',
    kicker: 'Kritik alan güvenliği',
    text: 'Enerji üretim sahaları ve çevresinde kontrollü erişim ve saha güvenliği yaklaşımı.',
    refs: ['Makasçı Güneş Enerjisi Elektrik Üretim Tesisleri'],
  },
]

const trainings = [
  {
    type: 'Temel eğitim',
    title: 'Silahlı özel güvenlik',
    duration: '120 ders saati',
    text: '100 saat teorik ve pratik temel eğitime ek olarak 20 saat silah eğitimiyle yürütülen program.',
  },
  {
    type: 'Temel eğitim',
    title: 'Silahsız özel güvenlik',
    duration: '100 ders saati',
    text: 'Silahsız görev kapsamında mesleğe hazırlanacak adaylar için teorik ve pratik temel eğitim programı.',
  },
  {
    type: 'Yenileme eğitimi',
    title: 'ÖGG yenileme',
    duration: '60 / 50 ders saati',
    text: 'Silahlı görevliler için en az 60, silahsız görevliler için en az 50 ders saatlik yenileme eğitimi.',
  },
]

const fieldTrainings = [
  { title: 'Kadro atışları', icon: 'my_location' },
  { title: 'Özel güvenlik yöneticiliği', icon: 'manage_accounts' },
  { title: 'Kişi koruma', icon: 'verified_user' },
  { title: 'Kıymet nakli', icon: 'local_shipping' },
  { title: 'Alarm izleme', icon: 'notifications_active' },
  { title: 'Ulaşım güvenliği', icon: 'commute' },
  { title: 'Geçici toplu etkinlikler ve spor güvenliği', icon: 'stadium' },
]

const learningItems = [
  ['Çıkmış sorular', 'Sınav dönemlerine göre soru arşivi'],
  ['Ders notları', 'Hukuk, ilk yardım, yangın, iletişim ve diğer dersler'],
  ['Hızlı tekrar', 'Kısa oturumlarla konu ve soru tekrarı'],
  ['Mevzuat rehberi', 'Güncel resmî kaynaklarla sadeleştirilmiş bilgi'],
]

const guideItems = [
  'Nasıl özel güvenlik görevlisi olunur?',
  'Silahlı ve silahsız eğitim farkı nedir?',
  'Sağlık raporu nasıl alınır?',
  'ÖGG kimlik kartı nasıl yenilenir?',
]

const timeline = [
  ['2006', 'Akşehir’de özel güvenlik alanında faaliyet başlangıcı'],
  ['2018', 'Akşehir KOMEK Güvenlik Danışmanlığı Kursu arşiv kaydı'],
  ['Bugün', 'Eğitim, saha hizmeti ve ÖGG bilgi merkezini aynı kurum çatısı altında sürdüren yapı'],
]

let observer
let intentTimer
let themeMedia

const closeMenu = () => {
  menuOpen.value = false
}

const onScroll = () => {
  headerCompact.value = window.scrollY > 28
}

const navigateToSection = target => {
  if (!target) return

  const section = document.querySelector(target)
  if (!section) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const headerOffset = 112
  const top = section.getBoundingClientRect().top + window.scrollY - headerOffset

  history.replaceState(null, '', target)
  window.scrollTo({
    top: Math.max(0, top),
    behavior: reduceMotion ? 'auto' : 'smooth',
  })
}

const selectIntent = intent => {
  userIntent.value = intent
  localStorage.setItem('yavuz-visitor-intent', intent)
  intentOpen.value = false

  const target = intentProfiles[intent]?.popupHref
  if (target) {
    window.setTimeout(() => navigateToSection(target), 220)
  }
}

const resetIntent = () => {
  intentOpen.value = true
}

const applyTheme = () => {
  if (!themeMedia) return
  const resolvedTheme = themePreference.value === 'auto'
    ? (themeMedia.matches ? 'dark' : 'light')
    : themePreference.value

  document.documentElement.dataset.theme = resolvedTheme
  document.documentElement.style.colorScheme = resolvedTheme

  const themeMeta = document.querySelector('meta[name="theme-color"]')
  themeMeta?.setAttribute('content', resolvedTheme === 'dark' ? '#07151d' : '#f4f0e8')
}

const cycleTheme = () => {
  const themes = ['auto', 'light', 'dark']
  const nextIndex = (themes.indexOf(themePreference.value) + 1) % themes.length
  themePreference.value = themes[nextIndex]
  localStorage.setItem('yavuz-theme', themePreference.value)
  applyTheme()
}

const onSystemThemeChange = () => {
  if (themePreference.value === 'auto') applyTheme()
}

onMounted(() => {
  themeMedia = window.matchMedia('(prefers-color-scheme: dark)')
  const storedTheme = localStorage.getItem('yavuz-theme')
  if (['auto', 'light', 'dark'].includes(storedTheme)) themePreference.value = storedTheme
  applyTheme()
  themeMedia.addEventListener?.('change', onSystemThemeChange)

  const storedIntent = localStorage.getItem('yavuz-visitor-intent')
  if (storedIntent && intentProfiles[storedIntent]) {
    userIntent.value = storedIntent
  } else {
    intentTimer = window.setTimeout(() => {
      intentOpen.value = true
    }, 650)
  }

  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
  )

  document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element))
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.clearTimeout(intentTimer)
  window.removeEventListener('scroll', onScroll)
  themeMedia?.removeEventListener?.('change', onSystemThemeChange)
})
</script>

<template>
  <div class="page-shell">
    <IntentGate :open="intentOpen" :current="userIntent" :whatsapp-url="whatsappGeneral" @select="selectIntent" @close="intentOpen = false" />

    <a class="skip-link" href="#main">İçeriğe geç</a>

    <div class="utility-bar">
      <div class="container utility-bar__inner">
        <span>Akşehir · Konya</span>
        <span>Özel güvenlik eğitimi ve güvenlik hizmetleri</span>
        <button v-if="activeIntent" class="intent-status" type="button" @click="resetIntent">
          <i></i>{{ activeIntent.label }} <b>Değiştir</b>
        </button>
        <a v-else class="utility-phone" href="tel:+903328136900">
          <span class="material-symbols-rounded" aria-hidden="true">call</span>
          <strong>0 332 813 69 00</strong>
        </a>
      </div>
    </div>

    <header class="site-header" :class="{ 'is-compact': headerCompact }">
      <div class="container header-inner">
        <a class="brand" href="#top" @click="closeMenu">
          <span class="brand-symbol brand-symbol--logo"><img src="/brand/yavuz-logo.webp" alt="" width="128" height="128"></span>
          <span>
            <strong>Yavuz Özel Güvenlik</strong>
            <small>Eğitim · Hizmet · Bilgi</small>
          </span>
        </a>

        <nav id="navigation" class="navigation" :class="{ 'is-open': menuOpen }">
          <a href="#egitimler" @click="closeMenu">Eğitimler</a>
          <a href="#sinav" @click="closeMenu">Sınav merkezi</a>
          <a href="#rehber" @click="closeMenu">ÖGG rehberi</a>
          <a href="#kurumsal" @click="closeMenu">Kurumsal</a>
          <a href="#hizmetler" @click="closeMenu">Hizmetler</a>
          <a class="nav-cta" :href="activeIntent?.href || '#iletisim'" @click="closeMenu">{{ activeIntent?.cta || 'Hızlı bilgi' }}</a>
        </nav>

        <button class="theme-toggle" type="button" :aria-label="`Tema: ${themeLabel}. Değiştirmek için tıklayın.`" :title="`Tema: ${themeLabel}`" @click="cycleTheme">
          <span class="material-symbols-rounded" aria-hidden="true">{{ themeIcon }}</span>
          <small>{{ themeLabel }}</small>
        </button>

        <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-controls="navigation" @click="menuOpen = !menuOpen">
          <span></span>
          <span></span>
          <span></span>
          <b>Menü</b>
        </button>
      </div>
    </header>

    <main id="main">
      <section id="top" class="hero">
        <SecurityMap />
        <div class="hero-glow hero-glow--one"></div>
        <div class="hero-glow hero-glow--two"></div>
        <div class="container hero-grid">
          <div class="hero-copy" data-reveal>
            <p class="eyebrow eyebrow--light">Akşehir’de 2006’dan beri</p>
            <h1>GÜVENLİĞİ ÖĞRENİN.<br><em>SAHADA UYGULAYIN.</em></h1>
            <p class="hero-lead">Özel güvenlik eğitimi, saha hizmetleri, sınav hazırlığı ve mesleki bilgi aynı kurum çatısı altında.</p>
            <div class="hero-actions">
              <a class="button button--warm" :href="activeIntent?.heroHref || '#egitimler'">{{ activeIntent?.hero || 'Eğitimleri incele' }}</a>
              <button class="button button--glass button--route" type="button" @click="resetIntent">Bana uygun yolu bul</button>
              <a class="button button--glass button--quick" href="#hizli-islemler">Hızlı işlemler</a>
            </div>
            <div class="hero-trust">
              <div><strong>Temel + Yenileme</strong><span>ÖGG Eğitimleri</span></div>
              <div><strong>Saha Deneyimi</strong><span>Gerçek Hizmet Geçmişi</span></div>
              <div><strong>Bilgi Merkezi</strong><span>Soru · Not · Mevzuat</span></div>
            </div>
          </div>

          <aside class="command-card" data-reveal>
            <div class="command-card__head">
              <span class="live-signal"><i></i> Güncel sınav</span>
              <span>123 / 99</span>
            </div>
            <div class="exam-date">
              <strong>24</strong>
              <div><span>Ekim</span><b>2026</b></div>
            </div>
            <p>123. Temel Eğitim / 99. Yenileme Eğitimi sınavı</p>
            <div class="command-progress">
              <div class="command-progress__meta">
                <span>Sınava kalan</span>
                <strong>{{ daysUntilExam }} gün</strong>
              </div>
              <div class="progress-track"><span :style="{ width: `${Math.max(8, Math.min(100, 100 - daysUntilExam))}%` }"></span></div>
            </div>
            <dl class="command-details">
              <div><dt>Eğitim bitişi</dt><dd>18 Eylül 2026</dd></div>
              <div><dt>Kaynak</dt><dd>EGM sınav takvimi</dd></div>
            </dl>
            <a class="command-link" href="#sinav">Sınav merkezini aç <span>→</span></a>
          </aside>
        </div>

        <div class="service-ticker" aria-hidden="true">
          <div class="service-ticker__track">
            <span>ÖZEL GÜVENLİK EĞİTİMİ</span><i></i><span>FABRİKA GÜVENLİĞİ</span><i></i><span>ŞANTİYE GÜVENLİĞİ</span><i></i><span>OKUL GÜVENLİĞİ</span><i></i><span>SINAV HAZIRLIĞI</span><i></i><span>ÖGG REHBERİ</span><i></i><span>ÖZEL GÜVENLİK EĞİTİMİ</span><i></i><span>FABRİKA GÜVENLİĞİ</span><i></i><span>ŞANTİYE GÜVENLİĞİ</span><i></i><span>OKUL GÜVENLİĞİ</span>
          </div>
        </div>
      </section>

      <section id="hizli-islemler" class="quick-section">
        <div class="container">
          <div class="section-heading section-heading--split" data-reveal>
            <div>
              <p class="eyebrow">Hızlı işlemler</p>
              <h2>Aradığınız yolu uzatmayalım.</h2>
            </div>
            <p>İlk kez başvuran adaydan yenileme yapacak görevliye kadar herkes doğrudan ihtiyacı olan alana ulaşsın.</p>
          </div>

          <div class="bento-grid">
            <a v-for="item in quickActions" :key="item.index" :href="item.href" class="bento-card" :class="{ 'bento-card--featured': item.featured }" data-reveal>
              <span class="bento-index">{{ item.index }}</span>
              <strong>{{ item.title }}</strong>
              <p>{{ item.text }}</p>
              <span class="bento-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="egitimler" class="training-section">
        <div class="container">
          <div class="section-heading" data-reveal>
            <p class="eyebrow">Eğitim merkezi</p>
            <h2>Mesleğe hazırlanırken yalnız değilsiniz.</h2>
            <p>Temel eğitimden yenilemeye, kadro atışlarından alan eğitimlerine kadar mesleki gelişimi aynı merkezde sürdürüyoruz.</p>
          </div>

          <div class="training-grid">
            <article v-for="(training, index) in trainings" :key="training.title" class="training-card" data-reveal>
              <div class="training-card__number">0{{ index + 1 }}</div>
              <p>{{ training.type }}</p>
              <h3>{{ training.title }}</h3>
              <strong class="training-card__duration">{{ training.duration }}</strong>
              <span>{{ training.text }}</span>
              <a :href="whatsappEducation" target="_blank" rel="noreferrer">WhatsApp’tan bilgi al <b>→</b></a>
            </article>
          </div>

          <div class="field-training" data-reveal>
            <div class="field-training__intro">
              <p class="eyebrow">Alan eğitimleri</p>
              <h3>Göreve göre uzmanlaşma.</h3>
              <p>Temel ve yenileme eğitimlerinin yanında uygulamaya ve görev alanına odaklanan eğitim başlıkları.</p>
            </div>
            <div class="field-training__grid">
              <div v-for="item in fieldTrainings" :key="item.title" class="field-training__item">
                <span class="material-symbols-rounded" aria-hidden="true">{{ item.icon }}</span>
                <strong>{{ item.title }}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sinav" class="exam-section">
        <div class="container exam-grid">
          <div class="exam-copy" data-reveal>
            <p class="eyebrow eyebrow--light">Sınav ve öğrenme merkezi</p>
            <h2>Kurs bittikten sonra da yanınızdayız.</h2>
            <p>Yavuz’un soru ve ders notu arşivini modern bir çalışma düzeni içinde erişilebilir tutuyoruz. Sınava giren adayları resmî sonuç ekranına doğrudan yönlendiriyoruz.</p>
            <div class="exam-actions">
              <a class="button button--warm exam-result-button" href="https://egm.gov.tr/ozelguvenlik/sinav-sonuclari" target="_blank" rel="noreferrer">
                <span class="material-symbols-rounded" aria-hidden="true">fact_check</span>
                Sınav sonucunu sorgula
              </a>
              <a class="text-link" href="#rehber">ÖGG rehberine geç</a>
              <a class="text-link" href="https://egm.gov.tr/ozelguvenlik/2026-sinav-takvimi" target="_blank" rel="noreferrer">Resmî sınav takvimi ↗</a>
            </div>
          </div>

          <div class="learning-stack" data-reveal>
            <article v-for="(item, index) in learningItems" :key="item[0]">
              <span>0{{ index + 1 }}</span>
              <div><strong>{{ item[0] }}</strong><p>{{ item[1] }}</p></div>
              <b>→</b>
            </article>
          </div>
        </div>
      </section>

      <section id="rehber" class="guide-section">
        <div class="container guide-grid">
          <div class="guide-intro" data-reveal>
            <p class="eyebrow">ÖGG rehberi</p>
            <h2>Doğru bilgi, doğru zamanda.</h2>
            <p>Şartlar, belgeler, sağlık raporu, sınav, kimlik kartı ve yenileme süreçleri güncel resmî kaynaklarla sade bir dilde sunulacak.</p>
          </div>
          <div class="guide-panel" data-reveal>
            <div v-for="item in guideItems" :key="item" class="guide-item">
              <strong>{{ item }}</strong>
              <span>Bilgi başlığı</span>
            </div>
          </div>
        </div>
      </section>

      <section id="kurumsal" class="story-section">
        <div class="container story-grid">
          <div class="story-copy" data-reveal>
            <div class="story-brand-mark" aria-hidden="true">
              <img src="/brand/yavuz-logo.webp" alt="" width="128" height="128">
            </div>
            <p class="eyebrow">Kurumsal Hafıza</p>
            <h2>Bir kurs sayfasından daha fazlası.</h2>
            <p>Yıllara yayılan eğitim, saha ve içerik birikimi kurumun bugün sunduğu hizmetlerin temelini oluşturuyor.</p>
          </div>
          <div class="timeline" data-reveal>
            <article v-for="item in timeline" :key="item[0]">
              <strong>{{ item[0] }}</strong>
              <span>{{ item[1] }}</span>
            </article>
          </div>
        </div>
      </section>

      <section id="hizmetler" class="services-section">
        <div class="container">
          <div class="section-heading section-heading--split" data-reveal>
            <div>
              <p class="eyebrow">Saha hizmetleri</p>
              <h2>Nereleri koruyoruz?</h2>
            </div>
            <p>Yavuz, eğitim faaliyetlerinin yanında fabrika, şantiye, eğitim kurumu ve enerji tesisi gibi sahalar için özel güvenlik hizmeti sunan şirket yapısıyla da hizmet veriyor.</p>
          </div>

          <div class="service-console" data-reveal>
            <div class="service-tabs" role="tablist" aria-label="Güvenlik hizmet alanları">
              <button v-for="(service, index) in services" :key="service.title" type="button" :class="{ 'is-active': selectedService === index }" @click="selectedService = index">
                <span>0{{ index + 1 }}</span>
                {{ service.title }}
              </button>
            </div>

            <div class="service-detail">
              <div class="service-plan" aria-hidden="true">
                <span class="service-plan__perimeter"></span>
                <span class="service-plan__building service-plan__building--a"></span>
                <span class="service-plan__building service-plan__building--b"></span>
                <span class="service-plan__route"></span>
                <span class="service-plan__checkpoint service-plan__checkpoint--a"></span>
                <span class="service-plan__checkpoint service-plan__checkpoint--b"></span>
                <span class="service-plan__guard"></span>
                <span class="service-plan__camera"></span>
                <span class="service-plan__gate"></span>
              </div>
              <div class="service-detail__copy" :key="selectedService">
                <p class="eyebrow eyebrow--light">{{ services[selectedService].kicker }}</p>
                <h3>{{ services[selectedService].title }}</h3>
                <p>{{ services[selectedService].text }}</p>
                <div class="reference-list">
                  <span>Geçmiş referanslardan örnekler</span>
                  <strong v-for="reference in services[selectedService].refs" :key="reference">{{ reference }}</strong>
                </div>
                <a class="service-contact-cta" :href="whatsappService" target="_blank" rel="noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.149-.67.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.447 4.434-9.878 9.883-9.878a9.81 9.81 0 0 1 6.986 2.893 9.825 9.825 0 0 1 2.89 6.988c-.003 5.448-4.435 9.878-9.875 9.878m8.413-18.297A11.815 11.815 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.056 24l6.305-1.654a11.88 11.88 0 0 0 5.688 1.448h.005c6.559 0 11.894-5.335 11.897-11.893a11.82 11.82 0 0 0-3.487-8.413Z"/></svg>
                  Güvenlik hizmeti için WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" class="contact-section">
        <div class="container contact-grid" data-reveal>
          <div>
            <p class="eyebrow">İletişim</p>
            <h2>Aklınızdaki soruyu doğrudan sorun.</h2>
            <p>Eğitim türü, kayıt süreci, sınav veya eğitim dışındaki özel güvenlik hizmetleri hakkında kurumla iletişime geçebilirsiniz.</p>
          </div>
          <div class="contact-side">
            <div class="contact-actions">
              <a class="contact-whatsapp" :href="whatsappGeneral" target="_blank" rel="noreferrer"><span>WhatsApp · Cep Telefonu</span><strong>0545 425 31 80</strong></a>
              <a href="tel:+903328136900"><span>Sabit Telefon</span><strong>0 332 813 69 00</strong></a>
              <a href="mailto:iletisim@yavuzozelguvenlik.com.tr"><span>E-posta</span><strong>iletisim@yavuzozelguvenlik.com.tr</strong></a>
              <div><span>Adres</span><strong>Yeni Mahalle Cumhuriyet Caddesi Kürşat 6 Sitesi A Blok 49/B<br>Akşehir / Konya</strong></div>
            </div>
            <div class="contact-map">
              <iframe
                title="Yavuz Özel Güvenlik Google Maps konumu"
                src="https://www.google.com/maps?q=Yeni+Mahalle+Cumhuriyet+Caddesi+K%C3%BCr%C5%9Fat+6+Sitesi+A+Blok+49%2FB+Ak%C5%9Fehir+Konya&output=embed"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <a href="https://www.google.com/maps/search/?api=1&query=Yeni+Mahalle+Cumhuriyet+Caddesi+K%C3%BCr%C5%9Fat+6+Sitesi+A+Blok+49%2FB+Ak%C5%9Fehir+Konya" target="_blank" rel="noreferrer">
                <span class="material-symbols-rounded" aria-hidden="true">location_on</span>
                Google Maps’te Aç
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <a class="whatsapp-float" :href="whatsappGeneral" target="_blank" rel="noreferrer" aria-label="WhatsApp'tan Yavuz Özel Güvenlik ile iletişime geç">
      <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.149-.67.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.447 4.434-9.878 9.883-9.878a9.81 9.81 0 0 1 6.986 2.893 9.825 9.825 0 0 1 2.89 6.988c-.003 5.448-4.435 9.878-9.875 9.878m8.413-18.297A11.815 11.815 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.056 24l6.305-1.654a11.88 11.88 0 0 0 5.688 1.448h.005c6.559 0 11.894-5.335 11.897-11.893a11.82 11.82 0 0 0-3.487-8.413Z"/></svg>
      <span class="whatsapp-float__copy"><small>WhatsApp</small><strong>0545 425 31 80</strong></span>
    </a>

    <footer class="footer">
      <div class="container footer-grid">
        <div class="brand brand--footer">
          <span class="brand-symbol brand-symbol--logo"><img src="/brand/yavuz-logo.webp" alt="" width="128" height="128"></span>
          <span><strong>Yavuz Özel Güvenlik</strong><small>Akşehir · Konya</small></span>
        </div>
        <p>Özel güvenlik eğitimi · Güvenlik hizmetleri · ÖGG bilgi merkezi</p>
        <a class="footer-credit" href="https://saygiylasunar.com" target="_blank" rel="noreferrer">
          <span>Site</span>
          <strong>Ersen Filiz · Saygıyla Sunar</strong>
          <b>↗</b>
        </a>
      </div>
    </footer>
  </div>
</template>