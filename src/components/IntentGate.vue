<script setup>
const props = defineProps({
  open: Boolean,
  current: String,
})

const emit = defineEmits(['select', 'close'])

const intents = [
  { id: 'basic', title: 'İlk kez ÖGG olacağım', text: 'Temel eğitim, şartlar ve kayıt süreci', icon: 'badge' },
  { id: 'renewal', title: 'Kimliğimi yenileyeceğim', text: 'Yenileme eğitimi ve kimlik süreci', icon: 'refresh' },
  { id: 'exam', title: 'Sınava hazırlanıyorum', text: 'Sorular, ders notları ve sınav takvimi', icon: 'exam' },
  { id: 'documents', title: 'Gerekli belgeleri arıyorum', text: 'Başvuru belgeleri ve sağlık raporu', icon: 'file' },
  { id: 'service', title: 'Güvenlik hizmeti almak istiyorum', text: 'Saha hizmetleri, referanslar ve iletişim', icon: 'site' },
]
</script>

<template>
  <Transition name="intent-fade">
    <div v-if="open" class="intent-overlay" @click.self="emit('close')">
      <section class="intent-panel" role="dialog" aria-modal="true" aria-labelledby="intent-title">
        <div class="intent-panel__visual" aria-hidden="true">
          <div class="intent-plan">
            <span class="intent-plan__zone intent-plan__zone--a"></span>
            <span class="intent-plan__zone intent-plan__zone--b"></span>
            <span class="intent-plan__zone intent-plan__zone--c"></span>
            <span class="intent-plan__route"></span>
            <span class="intent-plan__guard"></span>
            <span class="intent-plan__camera intent-plan__camera--a"></span>
            <span class="intent-plan__camera intent-plan__camera--b"></span>
            <span class="intent-plan__gate"></span>
          </div>
          <div class="intent-panel__visual-copy">
            <span>YAVUZ</span>
            <strong>Doğru yolu<br>birlikte bulalım.</strong>
          </div>
        </div>

        <div class="intent-panel__content">
          <button class="intent-close" type="button" aria-label="Pencereyi kapat" @click="emit('close')">×</button>
          <p class="intent-eyebrow">Hızlı yönlendirme</p>
          <h2 id="intent-title">Bugün ne için buradasınız?</h2>
          <p class="intent-lead">Seçiminize göre ilgili bilgileri ve işlemleri öne çıkaralım. İsterseniz siteyi normal şekilde de gezebilirsiniz.</p>

          <div class="intent-options">
            <button
              v-for="intent in intents"
              :key="intent.id"
              type="button"
              class="intent-option"
              :class="{ 'is-current': current === intent.id }"
              @click="emit('select', intent.id)"
            >
              <span class="intent-option__icon" aria-hidden="true">
                <svg v-if="intent.icon === 'badge'" viewBox="0 0 24 24"><path d="M12 3L18 6V11C18 15 15.5 18.3 12 20C8.5 18.3 6 15 6 11V6L12 3Z"/><path d="M9.5 11.5L11.2 13.2L14.8 9.5"/></svg>
                <svg v-else-if="intent.icon === 'refresh'" viewBox="0 0 24 24"><path d="M19 8V4M19 4H15M19 4L16.2 6.8A7 7 0 1 0 18.5 14"/></svg>
                <svg v-else-if="intent.icon === 'exam'" viewBox="0 0 24 24"><path d="M7 4H17V20H7Z"/><path d="M9.5 8H14.5M9.5 12H14.5M9.5 16H12"/></svg>
                <svg v-else-if="intent.icon === 'file'" viewBox="0 0 24 24"><path d="M7 3H14L18 7V21H7Z"/><path d="M14 3V8H18M9.5 12H15.5M9.5 16H14"/></svg>
                <svg v-else viewBox="0 0 24 24"><path d="M4 19V8L12 4L20 8V19"/><path d="M8 19V13H16V19M4 19H20"/></svg>
              </span>
              <span class="intent-option__copy"><strong>{{ intent.title }}</strong><small>{{ intent.text }}</small></span>
              <span class="intent-option__arrow" aria-hidden="true">→</span>
            </button>
          </div>

          <button class="intent-browse" type="button" @click="emit('select', 'browse')">Sadece geziniyorum</button>
        </div>

        <aside class="intent-identity">
          <div class="intent-identity__brand">
            <div class="intent-identity__logo-wrap">
              <img src="https://www.yavuzozelguvenlik.com.tr/img/altlogo.png" alt="Yavuz Özel Güvenlik logosu">
            </div>
            <p>Yavuz Özel Güvenlik</p>
            <span>Eğitim · Hizmet · Bilgi</span>
          </div>

          <div class="intent-identity__contact">
            <p>İletişim</p>
            <a href="tel:+903328136900">
              <span>Telefon</span>
              <strong>0 332 813 69 00</strong>
            </a>
            <a href="mailto:iletisim@yavuzozelguvenlik.com.tr">
              <span>E-posta</span>
              <strong>iletisim@yavuzozelguvenlik.com.tr</strong>
            </a>
            <div>
              <span>Konum</span>
              <strong>Akşehir · Konya</strong>
            </div>
          </div>

          <a class="intent-identity__credit" href="https://saygiylasunar.com" target="_blank" rel="noreferrer">
            <span>Site</span>
            <strong>Ersen Filiz Saygıyla Sunar</strong>
            <b>↗</b>
          </a>
        </aside>
      </section>
    </div>
  </Transition>
</template>

<style scoped>
.intent-overlay {
  position: fixed;
  inset: 0;
  z-index: 500;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(5, 19, 27, 0.66);
  backdrop-filter: blur(16px);
}

.intent-panel {
  display: grid;
  grid-template-columns: 0.58fr 1.28fr 0.72fr;
  width: min(1180px, 100%);
  max-height: min(780px, calc(100vh - 48px));
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 30px;
  background: #fbfaf6;
  box-shadow: 0 36px 120px rgba(0, 0, 0, 0.36);
}

.intent-panel__visual {
  position: relative;
  min-height: 100%;
  overflow: hidden;
  background: linear-gradient(150deg, #0a2432, #15494c);
}

.intent-panel__visual::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 45%, rgba(5, 25, 34, 0.8));
}

.intent-plan {
  position: absolute;
  inset: 12% 10% 30%;
  transform: rotate(-7deg);
}

.intent-plan::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px dashed rgba(168, 221, 210, 0.34);
  border-radius: 22px;
}

.intent-plan__zone {
  position: absolute;
  border: 1px solid rgba(168, 221, 210, 0.26);
  background: rgba(168, 221, 210, 0.035);
}

.intent-plan__zone--a { inset: 10% 52% 52% 8%; }
.intent-plan__zone--b { inset: 18% 8% 45% 57%; }
.intent-plan__zone--c { inset: 58% 16% 8% 35%; }

.intent-plan__route {
  position: absolute;
  top: 59%;
  left: 10%;
  width: 72%;
  height: 1px;
  border-top: 1px dashed rgba(239, 178, 87, 0.54);
  transform: rotate(-18deg);
}

.intent-plan__guard {
  position: absolute;
  top: 52%;
  left: 38%;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #efb257;
  box-shadow: 0 0 0 14px rgba(239, 178, 87, 0.06);
  animation: intent-guard 7s ease-in-out infinite;
}

.intent-plan__camera {
  position: absolute;
  width: 13px;
  height: 8px;
  border: 1px solid #a8ddd2;
  border-radius: 3px;
}

.intent-plan__camera::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 100%;
  width: 72px;
  height: 54px;
  background: linear-gradient(90deg, rgba(168, 221, 210, 0.16), transparent);
  clip-path: polygon(0 44%, 100% 0, 100% 100%);
  transform: translateY(-50%);
  transform-origin: left center;
  animation: intent-camera 6s ease-in-out infinite;
}

.intent-plan__camera--a { top: 14%; left: 13%; }
.intent-plan__camera--b { right: 13%; bottom: 18%; transform: rotate(180deg); }
.intent-plan__camera--b::after { animation-delay: -3s; }

.intent-plan__gate {
  position: absolute;
  bottom: -5px;
  left: 18%;
  width: 38px;
  height: 18px;
  border-right: 2px solid #a8ddd2;
  border-left: 2px solid #a8ddd2;
}

.intent-plan__gate::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 4px;
  width: 28px;
  height: 1px;
  background: #efb257;
  transform-origin: left center;
  animation: intent-gate 7s ease-in-out infinite;
}

.intent-panel__visual-copy {
  position: absolute;
  right: 28px;
  bottom: 28px;
  left: 28px;
  z-index: 2;
  color: #fff;
}

.intent-panel__visual-copy span {
  display: block;
  margin-bottom: 10px;
  color: #9bd8cd;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.intent-panel__visual-copy strong {
  font-family: 'Source Serif 4', serif;
  font-size: 31px;
  font-weight: 500;
  line-height: 1.04;
}

.intent-panel__content {
  position: relative;
  overflow-y: auto;
  padding: 42px;
}

.intent-close {
  position: absolute;
  top: 20px;
  right: 22px;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: #eee9df;
  color: #233942;
  font-size: 23px;
  cursor: pointer;
}

.intent-eyebrow {
  margin: 0 0 10px;
  color: #2e716f;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.intent-panel h2 {
  max-width: 520px;
  margin: 0;
  color: #0d2635;
  font-size: clamp(32px, 4vw, 46px);
  line-height: 1;
  letter-spacing: -0.035em;
}

.intent-lead {
  max-width: 590px;
  margin: 16px 0 26px;
  color: #6a797f;
  font-size: 14px;
  line-height: 1.6;
}

.intent-options {
  display: grid;
  gap: 9px;
}

.intent-option {
  display: grid;
  grid-template-columns: 42px 1fr 24px;
  align-items: center;
  gap: 13px;
  width: 100%;
  padding: 13px 14px;
  border: 1px solid rgba(13, 38, 53, 0.11);
  border-radius: 15px;
  background: #fff;
  text-align: left;
  cursor: pointer;
  transition: 0.18s ease;
}

.intent-option:hover,
.intent-option.is-current {
  border-color: rgba(46, 113, 111, 0.38);
  background: #f2f8f5;
  transform: translateX(4px);
}

.intent-option__icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #eaf2ee;
  color: #22615f;
}

.intent-option__icon svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.intent-option__copy {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.intent-option__copy strong {
  color: #17303d;
  font-size: 14px;
}

.intent-option__copy small {
  color: #7a888d;
  font-size: 11px;
}

.intent-option__arrow {
  color: #2e716f;
  font-size: 18px;
}

.intent-browse {
  display: block;
  margin: 20px auto 0;
  padding: 8px;
  border: 0;
  background: transparent;
  color: #66777d;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

.intent-identity {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 34px 28px 24px;
  border-left: 1px solid rgba(13, 38, 53, 0.1);
  background: linear-gradient(180deg, #f1eee5 0%, #e9efe9 100%);
}

.intent-identity__brand {
  padding-bottom: 27px;
  border-bottom: 1px solid rgba(13, 38, 53, 0.12);
}

.intent-identity__logo-wrap {
  display: flex;
  align-items: center;
  min-height: 90px;
  margin-bottom: 18px;
}

.intent-identity__logo-wrap img {
  display: block;
  width: min(100%, 210px);
  max-height: 86px;
  object-fit: contain;
  object-position: left center;
}

.intent-identity__brand p {
  margin: 0;
  color: #102b38;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.intent-identity__brand > span {
  display: block;
  margin-top: 7px;
  color: #667b7e;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.intent-identity__contact {
  display: grid;
  gap: 0;
  margin-top: 26px;
}

.intent-identity__contact > p {
  margin: 0 0 8px;
  color: #2e716f;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.intent-identity__contact > a,
.intent-identity__contact > div {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 13px 0;
  border-bottom: 1px solid rgba(13, 38, 53, 0.1);
}

.intent-identity__contact span {
  color: #768487;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.intent-identity__contact strong {
  overflow-wrap: anywhere;
  color: #17303d;
  font-size: 12px;
  line-height: 1.45;
}

.intent-identity__credit {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 7px;
  margin-top: auto;
  padding-top: 24px;
  color: #617377;
  font-size: 10px;
}

.intent-identity__credit span {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.intent-identity__credit strong {
  color: #233f48;
  font-size: 11px;
}

.intent-identity__credit b {
  color: #2e716f;
  font-size: 13px;
}

@keyframes intent-camera {
  0%, 100% { transform: translateY(-50%) rotate(-10deg); }
  50% { transform: translateY(-50%) rotate(24deg); }
}

@keyframes intent-guard {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(68px, -22px); }
}

@keyframes intent-gate {
  0%, 28%, 78%, 100% { transform: rotate(0); }
  40%, 65% { transform: rotate(-72deg); }
}

.intent-fade-enter-active,
.intent-fade-leave-active {
  transition: opacity 0.24s ease;
}

.intent-fade-enter-active .intent-panel,
.intent-fade-leave-active .intent-panel {
  transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.24s ease;
}

.intent-fade-enter-from,
.intent-fade-leave-to {
  opacity: 0;
}

.intent-fade-enter-from .intent-panel,
.intent-fade-leave-to .intent-panel {
  opacity: 0;
  transform: translateY(18px) scale(0.985);
}

@media (max-width: 1020px) {
  .intent-panel {
    grid-template-columns: 0.55fr 1.2fr 0.62fr;
  }

  .intent-panel__content {
    padding: 36px 30px;
  }

  .intent-identity {
    padding: 30px 22px 22px;
  }

  .intent-identity__logo-wrap img {
    max-width: 170px;
  }
}

@media (max-width: 820px) {
  .intent-panel {
    grid-template-columns: minmax(0, 1fr) 250px;
  }

  .intent-panel__visual {
    display: none;
  }
}

@media (max-width: 650px) {
  .intent-overlay {
    align-items: end;
    padding: 0;
  }

  .intent-panel {
    display: block;
    width: 100%;
    max-height: 94vh;
    overflow-y: auto;
    border-radius: 26px 26px 0 0;
  }

  .intent-panel__content {
    overflow: visible;
    padding: 34px 20px 24px;
  }

  .intent-panel h2 {
    max-width: calc(100% - 32px);
    font-size: 34px;
  }

  .intent-lead {
    font-size: 13px;
  }

  .intent-option {
    grid-template-columns: 38px 1fr 18px;
    gap: 10px;
    padding: 11px;
  }

  .intent-option__icon {
    width: 38px;
    height: 38px;
  }

  .intent-option__copy strong {
    font-size: 13px;
  }

  .intent-option__copy small {
    font-size: 10px;
  }

  .intent-identity {
    padding: 24px 20px 20px;
    border-top: 1px solid rgba(13, 38, 53, 0.1);
    border-left: 0;
  }

  .intent-identity__brand {
    display: grid;
    grid-template-columns: 84px 1fr;
    column-gap: 14px;
    align-items: center;
  }

  .intent-identity__logo-wrap {
    grid-row: span 2;
    min-height: 62px;
    margin: 0;
  }

  .intent-identity__logo-wrap img {
    width: 80px;
    max-height: 58px;
  }

  .intent-identity__brand p {
    font-size: 17px;
  }

  .intent-identity__brand > span {
    margin-top: 2px;
  }

  .intent-identity__contact {
    grid-template-columns: 1fr 1fr;
    column-gap: 18px;
    margin-top: 18px;
  }

  .intent-identity__contact > p {
    grid-column: 1 / -1;
  }

  .intent-identity__contact > a,
  .intent-identity__contact > div {
    padding: 10px 0;
  }

  .intent-identity__credit {
    margin-top: 16px;
    padding-top: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .intent-plan__guard,
  .intent-plan__camera::after,
  .intent-plan__gate::after {
    animation: none;
  }
}
</style>