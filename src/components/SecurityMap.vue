<script setup>
import { onMounted, ref } from 'vue'

const active = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    active.value = true
  })
})
</script>

<template>
  <div class="security-map" :class="{ 'is-active': active }" aria-hidden="true">
    <svg class="security-map__svg" viewBox="0 0 1200 760" role="presentation">
      <defs>
        <linearGradient id="scanGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#a8ddd2" stop-opacity=".28" />
          <stop offset="1" stop-color="#a8ddd2" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="warmScan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#efb257" stop-opacity=".28" />
          <stop offset="1" stop-color="#efb257" stop-opacity="0" />
        </linearGradient>
        <filter id="softGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      <g class="map-grid" opacity=".18">
        <path d="M80 120H1120M80 240H1120M80 360H1120M80 480H1120M80 600H1120" />
        <path d="M180 70V690M360 70V690M540 70V690M720 70V690M900 70V690M1080 70V690" />
      </g>

      <g class="perimeter">
        <path d="M130 118H475V182H682V104H1035V320H1094V620H788V673H426V626H128Z" />
        <path d="M344 244H582V432H344Z" />
        <path d="M738 216H952V376H738Z" />
        <path d="M704 478H950V584H704Z" />
      </g>

      <g class="route route--primary">
        <path id="patrolRoute" d="M182 574C252 528 256 438 328 402C410 361 457 472 542 443C619 416 620 299 709 292C796 286 827 393 914 418C986 439 1026 390 1042 338" />
        <circle cx="182" cy="574" r="5" />
        <circle cx="328" cy="402" r="5" />
        <circle cx="542" cy="443" r="5" />
        <circle cx="709" cy="292" r="5" />
        <circle cx="914" cy="418" r="5" />
        <circle cx="1042" cy="338" r="5" />
      </g>

      <g class="camera camera--one" transform="translate(272 172)">
        <path class="camera-cone" d="M0 0L155 -56L160 68Z" fill="url(#scanGradient)" />
        <g class="camera-icon">
          <rect x="-11" y="-7" width="24" height="14" rx="3" />
          <path d="M13 -4L24 -10V10L13 4Z" />
          <path d="M-5 8V18M-14 18H4" />
        </g>
      </g>

      <g class="camera camera--two" transform="translate(932 170)">
        <path class="camera-cone" d="M0 0L-152 -62L-158 64Z" fill="url(#warmScan)" />
        <g class="camera-icon">
          <rect x="-11" y="-7" width="24" height="14" rx="3" />
          <path d="M13 -4L24 -10V10L13 4Z" />
          <path d="M-5 8V18M-14 18H4" />
        </g>
      </g>

      <g class="camera camera--three" transform="translate(850 540)">
        <path class="camera-cone" d="M0 0L-130 -80L-150 35Z" fill="url(#scanGradient)" />
        <g class="camera-icon">
          <rect x="-11" y="-7" width="24" height="14" rx="3" />
          <path d="M13 -4L24 -10V10L13 4Z" />
          <path d="M-5 8V18M-14 18H4" />
        </g>
      </g>

      <g class="gate" transform="translate(126 518)">
        <path class="gate-post" d="M0 -34V34M58 -34V34" />
        <path class="gate-arm" d="M4 0H54" />
        <circle class="access-pulse" cx="29" cy="0" r="15" />
      </g>

      <g class="detector" transform="translate(698 246)">
        <path d="M-15 27V-23H15V27M-7 27V-15H7V27" />
        <circle class="detector-pulse" cx="0" cy="2" r="18" />
      </g>

      <g class="checkpoint checkpoint--one" transform="translate(328 402)">
        <circle r="15" />
        <path d="M-6 0L-1 5L8 -6" />
      </g>
      <g class="checkpoint checkpoint--two" transform="translate(709 292)">
        <circle r="15" />
        <path d="M-6 0L-1 5L8 -6" />
      </g>
      <g class="checkpoint checkpoint--three" transform="translate(914 418)">
        <circle r="15" />
        <path d="M-6 0L-1 5L8 -6" />
      </g>

      <g class="guard">
        <circle class="guard-range" r="48" />
        <path class="guard-cone" d="M0 0L62 -30L72 20Z" />
        <circle class="guard-body" r="8" />
        <path class="guard-direction" d="M7 0L18 0" />
        <animateMotion dur="24s" repeatCount="indefinite" rotate="auto">
          <mpath href="#patrolRoute" />
        </animateMotion>
      </g>

      <g class="dog-patrol">
        <circle class="dog-handler" r="6" />
        <path class="dog-icon" d="M13 -3H25L30 2L25 7H17L13 4Z" />
        <animateMotion dur="18s" begin="-5s" repeatCount="indefinite" rotate="auto" path="M1028 566C943 628 812 627 720 586C632 547 579 582 522 614" />
      </g>

      <g class="labels">
        <g transform="translate(145 96)"><circle r="3" /><text x="10" y="4">ÇEVRE KONTROLÜ</text></g>
        <g transform="translate(342 226)"><circle r="3" /><text x="10" y="4">KONTROLLÜ ALAN</text></g>
        <g transform="translate(735 198)"><circle r="3" /><text x="10" y="4">GİRİŞ KONTROLÜ</text></g>
        <g transform="translate(708 462)"><circle r="3" /><text x="10" y="4">KRİTİK BÖLGE</text></g>
      </g>

      <circle class="ambient-pulse ambient-pulse--one" cx="542" cy="443" r="8" filter="url(#softGlow)" />
      <circle class="ambient-pulse ambient-pulse--two" cx="1042" cy="338" r="8" filter="url(#softGlow)" />
    </svg>
  </div>
</template>

<style scoped>
.security-map {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.security-map::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 78% 24%, rgba(46, 113, 111, 0.28), transparent 30%),
    radial-gradient(circle at 34% 78%, rgba(239, 178, 87, 0.14), transparent 28%);
}

.security-map__svg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: max(1180px, 100vw);
  height: auto;
  min-height: 100%;
  transform: translate(-50%, -50%) scale(1.04);
  opacity: 0.76;
}

.map-grid path,
.perimeter path,
.route path,
.route circle,
.camera-icon,
.gate,
.detector,
.checkpoint,
.guard,
.dog-patrol {
  vector-effect: non-scaling-stroke;
}

.map-grid path {
  fill: none;
  stroke: rgba(168, 221, 210, 0.38);
  stroke-width: 1;
}

.perimeter path {
  fill: rgba(8, 30, 41, 0.14);
  stroke: rgba(184, 222, 215, 0.28);
  stroke-width: 1.2;
  stroke-dasharray: 8 10;
}

.perimeter path:first-child {
  stroke: rgba(239, 178, 87, 0.34);
  stroke-dasharray: 14 11;
}

.route path {
  fill: none;
  stroke: rgba(168, 221, 210, 0.4);
  stroke-width: 1.5;
  stroke-dasharray: 3 9;
}

.route circle {
  fill: #efb257;
  stroke: rgba(239, 178, 87, 0.26);
  stroke-width: 8;
}

.camera {
  transform-box: fill-box;
  transform-origin: center;
}

.camera--one {
  animation: camera-scan-one 11s ease-in-out infinite;
}

.camera--two {
  animation: camera-scan-two 13s ease-in-out infinite -3s;
}

.camera--three {
  animation: camera-scan-three 9s ease-in-out infinite -4s;
}

.camera-icon {
  fill: rgba(9, 33, 43, 0.95);
  stroke: #bfe7de;
  stroke-width: 2;
}

.camera-cone {
  opacity: 0.85;
}

@keyframes camera-scan-one {
  0%, 100% { transform: translate(272px, 172px) rotate(-14deg); }
  50% { transform: translate(272px, 172px) rotate(26deg); }
}

@keyframes camera-scan-two {
  0%, 100% { transform: translate(932px, 170px) rotate(12deg); }
  50% { transform: translate(932px, 170px) rotate(-24deg); }
}

@keyframes camera-scan-three {
  0%, 100% { transform: translate(850px, 540px) rotate(-10deg); }
  50% { transform: translate(850px, 540px) rotate(22deg); }
}

.gate-post,
.gate-arm,
.detector path {
  fill: none;
  stroke: #b9ded6;
  stroke-width: 2;
  stroke-linecap: round;
}

.gate-arm {
  transform-origin: 4px 0;
  animation: gate-open 10s ease-in-out infinite;
}

@keyframes gate-open {
  0%, 22%, 72%, 100% { transform: rotate(0); }
  34%, 60% { transform: rotate(-74deg); }
}

.access-pulse,
.detector-pulse {
  fill: none;
  stroke: #efb257;
  stroke-width: 2;
  opacity: 0;
  animation: access-pulse 10s ease-out infinite;
}

.detector-pulse {
  animation-delay: -4.4s;
}

@keyframes access-pulse {
  30% { opacity: 0; transform: scale(0.6); }
  38% { opacity: 0.9; }
  50% { opacity: 0; transform: scale(1.9); }
}

.checkpoint circle {
  fill: rgba(12, 41, 51, 0.82);
  stroke: rgba(168, 221, 210, 0.56);
  stroke-width: 1.5;
}

.checkpoint path {
  fill: none;
  stroke: #efb257;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.checkpoint {
  opacity: 0.54;
  animation: checkpoint 8s ease-in-out infinite;
}

.checkpoint--two { animation-delay: -2.5s; }
.checkpoint--three { animation-delay: -5s; }

@keyframes checkpoint {
  0%, 74%, 100% { opacity: 0.44; }
  82% { opacity: 1; }
}

.guard-range {
  fill: rgba(168, 221, 210, 0.03);
  stroke: rgba(168, 221, 210, 0.22);
  stroke-width: 1;
  stroke-dasharray: 3 6;
}

.guard-cone {
  fill: rgba(168, 221, 210, 0.12);
  animation: guard-look 5.5s ease-in-out infinite;
  transform-origin: 0 0;
}

.guard-body {
  fill: #efb257;
  stroke: rgba(255, 255, 255, 0.4);
  stroke-width: 2;
}

.guard-direction {
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
}

@keyframes guard-look {
  0%, 32%, 100% { transform: rotate(-8deg); }
  50% { transform: rotate(24deg); }
  76% { transform: rotate(-28deg); }
}

.dog-handler {
  fill: #a8ddd2;
}

.dog-icon {
  fill: #d77a67;
}

.labels text {
  fill: rgba(211, 229, 227, 0.5);
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 10px;
  letter-spacing: 1.5px;
}

.labels circle {
  fill: #efb257;
}

.ambient-pulse {
  fill: rgba(168, 221, 210, 0.4);
  animation: ambient-pulse 4.5s ease-out infinite;
}

.ambient-pulse--two {
  fill: rgba(239, 178, 87, 0.48);
  animation-delay: -2.2s;
}

@keyframes ambient-pulse {
  0% { opacity: 0; transform: scale(0.6); transform-origin: center; }
  26% { opacity: 0.9; }
  70%, 100% { opacity: 0; transform: scale(3); transform-origin: center; }
}

@media (max-width: 800px) {
  .security-map__svg {
    left: 63%;
    width: 1120px;
    opacity: 0.54;
  }

  .labels {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .camera,
  .gate-arm,
  .access-pulse,
  .detector-pulse,
  .checkpoint,
  .guard-cone,
  .ambient-pulse {
    animation: none !important;
  }
}
</style>
