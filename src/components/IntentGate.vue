<script setup>
const props = defineProps({
  open: Boolean,
  current: String,
  whatsappUrl: String,
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
            <span class="intent-plan__checkpoint"></span>
            <span class="intent-plan__guard"></span>
            <span class="intent-plan__camera intent-plan__camera--a"></span>
            <span class="intent-plan__camera intent-plan__camera--b"></span>
            <span class="intent-plan__gate"></span>
            <span class="intent-plan__access"></span>
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
              <img src="/brand/yavuz-logo.webp" alt="Yavuz Özel Güvenlik logosu" width="128" height="128">
            </div>
            <p>Yavuz Özel Güvenlik</p>
            <span>Eğitim · Hizmet · Bilgi</span>
          </div>

          <div class="intent-identity__contact">
            <p>İletişim</p>
            <a class="intent-whatsapp" :href="whatsappUrl" target="_blank" rel="noreferrer">
              <span>WhatsApp · Cep</span>
              <strong>0545 425 31 80</strong>
            </a>
            <a href="tel:+903328136900">
              <span>Sabit telefon</span>
              <strong>0 332 813 69 00</strong>
            </a>
            <a href="mailto:iletisim@yavuzozelguvenlik.com.tr">
              <span>E-posta</span>
              <strong>iletisim@yavuzozelguvenlik.com.tr</strong>
            </a>
            <div>
              <span>Adres</span>
              <strong>Yeni Mahalle Cumhuriyet Caddesi<br>Kürşat 6 Sitesi A Blok 49/B<br>Akşehir / Konya</strong>
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
  grid-template-columns: 0.48fr 1.18fr 0.64fr;
  width: min(1040px, 100%);
  max-height: min(744px, calc(100vh - 48px));
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 28px;
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
  background: linear-gradient(180deg, transparent 44%, rgba(5, 25, 34, 0.82));
}

.intent-plan {
  position: absolute;
  inset: 12% 9% 31%;
  transform: rotate(-6deg);
}

.intent-plan::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px dashed rgba(168, 221, 210, 0.34);
  border-radius: 20px;
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
  top: 60%;
  left: 12%;
  width: 68%;
  height: 1px;
  border-top: 1px dashed rgba(239, 178, 87, 0.48);
  transform: rotate(-18deg);
  transform-origin: left center;
}

.intent-plan__route::after {
  content: '';
  position: absolute;
  top: -3px;
  left: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #efb257;
  opacity: 0;
  box-shadow: 0 0 0 7px rgba(239, 178, 87, 0.06);
  animation: intent-route-progress 12s linear infinite;
}

.intent-plan__checkpoint {
  position: absolute;
  top: 38%;
  right: 22%;
  width: 10px;
  height: 10px;
  border: 2px solid #a8ddd2;
  border-radius: 50%;
  opacity: 0.56;
  animation: intent-checkpoint 12s ease-in-out infinite;
}

.intent-plan__guard {
  position: absolute;
  top: 56%;
  left: 17%;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #efb257;
  box-shadow: 0 0 0 13px rgba(239, 178, 87, 0.06);
  animation: intent-guard 12s ease-in-out infinite;
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
  width: 66px;
  height: 48px;
  background: linear-gradient(90deg, rgba(168, 221, 210, 0.17), transparent);
  clip-path: polygon(0 44%, 100% 0, 100% 100%);
  transform: translateY(-50%);
  transform-origin: left center;
  animation: intent-camera 12s ease-in-out infinite;
}

.intent-plan__camera--a { top: 14%; left: 13%; }
.intent-plan__camera--b { right: 13%; bottom: 18%; transform: rotate(180deg); }
.intent-plan__camera--b::after { animation-delay: -6s; }

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
  animation: intent-gate 12s ease-in-out infinite;
}

.intent-plan__access {
  position: absolute;
  bottom: 1px;
  left: calc(18% + 12px);
  width: 14px;
  height: 14px;
  border: 1px solid #efb257;
  border-radius: 50%;
  opacity: 0;
  animation: intent-access 12s ease-out infinite;
}

.intent-panel__visual-copy {
  position: absolute;
  right: 24px;
  bottom: 25px;
  left: 24px;
  z-index: 2;
  color: #fff;
}

.intent-panel__visual-copy span {
  display: block;
  margin-bottom: 9px;
  color: #9bd8cd;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.intent-panel__visual-copy strong {
  font-family: 'Source Serif 4', serif;
  font-size: 29px;
  font-weight: 500;
  line-height: 1.04;
}

.intent-panel__content {
  position: relative;
  overflow-y: auto;
  padding: 36px 34px 30px;
}

.intent-close {
  position: absolute;
  top: 17px;
  right: 18px;
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
  margin: 0 0 9px;
  color: #2e716f;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.intent-panel h2 {
  max-width: 480px;
  margin: 0;
  color: #0d2635;
  font-size: clamp(32px, 3.7vw, 42px);
  line-height: 1.02;
  letter-spacing: -0.035em;
}

.intent-lead {
  max-width: 530px;
  margin: 14px 0 21px;
  color: #62757a;
  font-size: 14px;
  line-height: 1.55;
}

.intent-options {
  display: grid;
  gap: 8px;
}

.intent-option {
  display: grid;
  grid-template-columns: 44px 1fr 22px;
  align-items: center;
  gap: 13px;
  width: 100%;
  padding: 12px 13px;
  border: 1px solid rgba(13, 38, 53, 0.11);
  border-radius: 14px;
  background: #fff;
  text-align: left;
  cursor: pointer;
  transition: 0.18s ease;
}

.intent-option:hover,
.intent-option.is-current {
  border-color: rgba(46, 113, 111, 0.38);
  background: #f2f8f5;
  transform: translateX(3px);
}

.intent-option__icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #eaf2ee;
  color: #22615f;
}

.intent-option__icon svg {
  width: 23px;
  height: 23px;
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
  font-size: 15px;
}

.intent-option__copy small {
  color: #748489;
  font-size: 12px;
  line-height: 1.35;
}

.intent-option__arrow {
  color: #2e716f;
  font-size: 18px;
}

.intent-browse {
  display: block;
  margin: 16px auto 0;
  padding: 8px;
  border: 0;
  background: transparent;
  color: #5f7277;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.intent-identity {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 24px 23px 19px;
  border-left: 1px solid rgba(13, 38, 53, 0.1);
  background: linear-gradient(180deg, #f1eee5 0%, #e9efe9 100%);
}

.intent-identity__brand {
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(13, 38, 53, 0.12);
}

.intent-identity__logo-wrap {
  display: flex;
  align-items: center;
  min-height: 78px;
  margin-bottom: 11px;
}

.intent-identity__logo-wrap img {
  display: block;
  width: 74px;
  height: 74px;
  object-fit: contain;
  object-position: left center;
  filter: drop-shadow(0 7px 14px rgba(13, 38, 53, 0.12));
}

.intent-identity__brand p {
  margin: 0;
  color: #102b38;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.intent-identity__brand > span {
  display: block;
  margin-top: 5px;
  color: #667b7e;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.intent-identity__contact {
  display: grid;
  gap: 0;
  margin-top: 15px;
}

.intent-identity__contact > p {
  margin: 0 0 4px;
  color: #2e716f;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.intent-identity__contact > a,
.intent-identity__contact > div {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 7px 0;
  border-bottom: 1px solid rgba(13, 38, 53, 0.1);
}

.intent-identity__contact span {
  color: #768487;
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.intent-identity__contact strong {
  overflow-wrap: anywhere;
  color: #17303d;
  font-size: 12.2px;
  line-height: 1.34;
}

.intent-whatsapp strong {
  color: #216c55;
}

.intent-identity__credit {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 7px;
  margin-top: auto;
  padding-top: 14px;
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
  line-height: 1.25;
}

.intent-identity__credit b {
  color: #2e716f;
  font-size: 13px;
}

@keyframes intent-camera {
  0%, 12%, 100% { transform: translateY(-50%) rotate(-12deg); opacity: 0.62; }
  24% { transform: translateY(-50%) rotate(18deg); opacity: 1; }
  38% { transform: translateY(-50%) rotate(4deg); opacity: 0.72; }
  62% { transform: translateY(-50%) rotate(24deg); opacity: 0.88; }
  80% { transform: translateY(-50%) rotate(-8deg); opacity: 0.68; }
}

@keyframes intent-route-progress {
  0%, 22% { left: 0; opacity: 0; }
  27% { opacity: 1; }
  48% { left: 100%; opacity: 1; }
  53%, 100% { left: 100%; opacity: 0; }
}

@keyframes intent-checkpoint {
  0%, 38%, 100% { opacity: 0.42; box-shadow: 0 0 0 0 rgba(168, 221, 210, 0); }
  45% { opacity: 1; box-shadow: 0 0 0 9px rgba(168, 221, 210, 0.08); }
  54% { opacity: 0.58; box-shadow: 0 0 0 15px rgba(168, 221, 210, 0); }
}

@keyframes intent-guard {
  0%, 22% { transform: translate(0, 0); }
  46%, 55% { transform: translate(72px, -25px); }
  70%, 82% { transform: translate(-3px, 56px); }
  100% { transform: translate(0, 0); }
}

@keyframes intent-gate {
  0%, 65%, 88%, 100% { transform: rotate(0); }
  72%, 82% { transform: rotate(-72deg); }
}

@keyframes intent-access {
  0%, 67%, 100% { opacity: 0; transform: scale(0.6); }
  73% { opacity: 0.9; }
  84% { opacity: 0; transform: scale(2.1); }
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
    grid-template-columns: 0.46fr 1.14fr 0.62fr;
  }

  .intent-panel__content {
    padding: 34px 28px 28px;
  }

  .intent-identity {
    padding: 23px 20px 18px;
  }

  .intent-identity__logo-wrap img {
    width: 70px;
    height: 70px;
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
    padding: 32px 20px 22px;
  }

  .intent-panel h2 {
    max-width: calc(100% - 32px);
    font-size: 34px;
  }

  .intent-lead {
    font-size: 14px;
  }

  .intent-option {
    grid-template-columns: 40px 1fr 18px;
    gap: 10px;
    padding: 11px;
  }

  .intent-option__icon {
    width: 40px;
    height: 40px;
  }

  .intent-option__copy strong {
    font-size: 14px;
  }

  .intent-option__copy small {
    font-size: 11px;
  }

  .intent-identity {
    padding: 22px 20px 19px;
    border-top: 1px solid rgba(13, 38, 53, 0.1);
    border-left: 0;
  }

  .intent-identity__brand {
    display: grid;
    grid-template-columns: 70px 1fr;
    column-gap: 14px;
    align-items: center;
  }

  .intent-identity__logo-wrap {
    grid-row: span 2;
    min-height: 60px;
    margin: 0;
  }

  .intent-identity__logo-wrap img {
    width: 60px;
    height: 60px;
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
    margin-top: 17px;
  }

  .intent-identity__contact > p {
    grid-column: 1 / -1;
  }

  .intent-identity__contact > a,
  .intent-identity__contact > div {
    padding: 9px 0;
  }

  .intent-identity__credit {
    margin-top: 15px;
    padding-top: 13px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .intent-plan__route::after,
  .intent-plan__checkpoint,
  .intent-plan__guard,
  .intent-plan__camera::after,
  .intent-plan__gate::after,
  .intent-plan__access {
    animation: none;
  }
}
</style>