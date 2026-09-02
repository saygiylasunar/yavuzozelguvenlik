<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvas = ref(null)
let frame = 0
let resizeObserver
let host
let onPointerMove

onMounted(() => {
  const el = canvas.value
  const ctx = el.getContext('2d')
  host = el.parentElement
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const pointer = { x: 0.5, y: 0.5 }
  let points = []
  let width = 0
  let height = 0
  let dpr = Math.min(window.devicePixelRatio || 1, 2)

  const createPoints = () => {
    const count = Math.max(28, Math.min(62, Math.round((width * height) / 26000)))
    points = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.16,
      radius: index % 9 === 0 ? 2.2 : 1.25,
      phase: Math.random() * Math.PI * 2,
    }))
  }

  const resize = () => {
    width = host.clientWidth
    height = host.clientHeight
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    el.width = Math.max(1, Math.floor(width * dpr))
    el.height = Math.max(1, Math.floor(height * dpr))
    el.style.width = `${width}px`
    el.style.height = `${height}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    createPoints()
  }

  const draw = time => {
    ctx.clearRect(0, 0, width, height)
    const shiftX = (pointer.x - 0.5) * 18
    const shiftY = (pointer.y - 0.5) * 18

    points.forEach(point => {
      if (!reduceMotion) {
        point.x += point.vx
        point.y += point.vy
        if (point.x < -20) point.x = width + 20
        if (point.x > width + 20) point.x = -20
        if (point.y < -20) point.y = height + 20
        if (point.y > height + 20) point.y = -20
      }
    })

    for (let i = 0; i < points.length; i += 1) {
      const a = points[i]
      for (let j = i + 1; j < points.length; j += 1) {
        const b = points[j]
        const dx = a.x - b.x
        const dy = a.y - b.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 150) {
          const alpha = (1 - distance / 150) * 0.2
          ctx.strokeStyle = `rgba(153, 224, 211, ${alpha})`
          ctx.lineWidth = 0.8
          ctx.beginPath()
          ctx.moveTo(a.x + shiftX, a.y + shiftY)
          ctx.lineTo(b.x + shiftX, b.y + shiftY)
          ctx.stroke()
        }
      }
    }

    points.forEach(point => {
      const pulse = reduceMotion ? 1 : 0.75 + Math.sin(time * 0.001 + point.phase) * 0.2
      ctx.fillStyle = point.radius > 2 ? 'rgba(239, 178, 87, .8)' : 'rgba(194, 242, 231, .65)'
      ctx.beginPath()
      ctx.arc(point.x + shiftX, point.y + shiftY, point.radius * pulse, 0, Math.PI * 2)
      ctx.fill()
    })

    frame = requestAnimationFrame(draw)
  }

  onPointerMove = event => {
    const rect = host.getBoundingClientRect()
    pointer.x = (event.clientX - rect.left) / rect.width
    pointer.y = (event.clientY - rect.top) / rect.height
  }

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(host)
  host.addEventListener('pointermove', onPointerMove, { passive: true })
  resize()
  frame = requestAnimationFrame(draw)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  resizeObserver?.disconnect()
  if (host && onPointerMove) host.removeEventListener('pointermove', onPointerMove)
})
</script>

<template>
  <canvas ref="canvas" class="network-field" aria-hidden="true"></canvas>
</template>
