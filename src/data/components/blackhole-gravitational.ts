import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "blackhole-gravitational",
  "title": "Cosmic Black Hole & Accretion Ring",
  "description": "A gravitational lensing animation depicting a singularity event horizon, photon ring, and spiraling accretion disk particles.",
  "category": "Interactive Elements",
  "framework": "React",
  "code": {
    "html": "<div class=\"relative w-full h-[340px] bg-[#030008] rounded-2xl flex items-center justify-center overflow-hidden border border-indigo-500/30\">\n  <canvas id=\"bhCanvas\" class=\"w-full h-full\"></canvas>\n  <div class=\"absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,#030008_85%)]\"></div>\n</div>\n<script>\n  (function() {\n    const canvas = document.getElementById('bhCanvas');\n    if (!canvas) return;\n    const ctx = canvas.getContext('2d');\n    let width = canvas.width = canvas.parentElement.clientWidth || 400;\n    let height = canvas.height = canvas.parentElement.clientHeight || 340;\n    const cx = width / 2;\n    const cy = height / 2;\n\n    const particles = [];\n    for (let i = 0; i < 180; i++) {\n      particles.push({\n        r: 40 + Math.random() * 110,\n        angle: Math.random() * Math.PI * 2,\n        speed: 0.01 + Math.random() * 0.02,\n        size: 1 + Math.random() * 2,\n        color: ['#a855f7', '#06b6d4', '#ec4899', '#3b82f6'][Math.floor(Math.random() * 4)]\n      });\n    }\n\n    function animate() {\n      ctx.fillStyle = 'rgba(3, 0, 8, 0.2)';\n      ctx.fillRect(0, 0, width, height);\n\n      // Outer glow\n      const grad = ctx.createRadialGradient(cx, cy, 25, cx, cy, 120);\n      grad.addColorStop(0, 'rgba(168, 85, 247, 0.8)');\n      grad.addColorStop(0.4, 'rgba(6, 182, 212, 0.3)');\n      grad.addColorStop(1, 'transparent');\n      ctx.fillStyle = grad;\n      ctx.beginPath();\n      ctx.arc(cx, cy, 120, 0, Math.PI * 2);\n      ctx.fill();\n\n      // Black Hole Event Horizon\n      ctx.fillStyle = '#000000';\n      ctx.beginPath();\n      ctx.arc(cx, cy, 32, 0, Math.PI * 2);\n      ctx.fill();\n      ctx.strokeStyle = '#c084fc';\n      ctx.lineWidth = 2;\n      ctx.stroke();\n\n      // Spiral Particles\n      particles.forEach(p => {\n        p.angle += p.speed;\n        p.r -= 0.05;\n        if (p.r < 32) p.r = 130;\n\n        const x = cx + p.r * Math.cos(p.angle);\n        const y = cy + (p.r * 0.4) * Math.sin(p.angle);\n\n        ctx.fillStyle = p.color;\n        ctx.beginPath();\n        ctx.arc(x, y, p.size, 0, Math.PI * 2);\n        ctx.fill();\n      });\n\n      requestAnimationFrame(animate);\n    }\n    animate();\n  })();\n</script>",
    "tsx": "import React, { useEffect, useRef } from 'react';\n\nexport default function BlackHoleCanvas() {\n  const canvasRef = useRef<HTMLCanvasElement>(null);\n\n  useEffect(() => {\n    const canvas = canvasRef.current;\n    if (!canvas) return;\n    const ctx = canvas.getContext('2d');\n    if (!ctx) return;\n\n    let animId: number;\n    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);\n    let height = (canvas.height = canvas.parentElement?.clientHeight || 340);\n    const cx = width / 2;\n    const cy = height / 2;\n\n    const particles = Array.from({ length: 220 }, () => ({\n      r: 40 + Math.random() * 120,\n      angle: Math.random() * Math.PI * 2,\n      speed: 0.015 + Math.random() * 0.025,\n      size: 1 + Math.random() * 2.2,\n      color: ['#c084fc', '#38bdf8', '#f472b6', '#818cf8'][Math.floor(Math.random() * 4)]\n    }));\n\n    const animate = () => {\n      ctx.fillStyle = 'rgba(3, 0, 8, 0.22)';\n      ctx.fillRect(0, 0, width, height);\n\n      const grad = ctx.createRadialGradient(cx, cy, 25, cx, cy, 130);\n      grad.addColorStop(0, 'rgba(192, 132, 252, 0.9)');\n      grad.addColorStop(0.35, 'rgba(56, 189, 248, 0.4)');\n      grad.addColorStop(1, 'transparent');\n      ctx.fillStyle = grad;\n      ctx.beginPath();\n      ctx.arc(cx, cy, 130, 0, Math.PI * 2);\n      ctx.fill();\n\n      ctx.fillStyle = '#000000';\n      ctx.beginPath();\n      ctx.arc(cx, cy, 34, 0, Math.PI * 2);\n      ctx.fill();\n      ctx.strokeStyle = '#e9d5ff';\n      ctx.lineWidth = 2.5;\n      ctx.stroke();\n\n      particles.forEach((p) => {\n        p.angle += p.speed;\n        p.r -= 0.08;\n        if (p.r < 34) p.r = 140;\n\n        const x = cx + p.r * Math.cos(p.angle);\n        const y = cy + p.r * 0.38 * Math.sin(p.angle);\n\n        ctx.fillStyle = p.color;\n        ctx.beginPath();\n        ctx.arc(x, y, p.size, 0, Math.PI * 2);\n        ctx.fill();\n      });\n\n      animId = requestAnimationFrame(animate);\n    };\n\n    animate();\n    return () => cancelAnimationFrame(animId);\n  }, []);\n\n  return (\n    <div className=\"relative w-full h-[320px] bg-[#030008] rounded-2xl flex items-center justify-center overflow-hidden border border-indigo-500/30 shadow-2xl\">\n      <canvas ref={canvasRef} className=\"w-full h-full\" />\n      <div className=\"absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,#030008_90%)]\" />\n      <div className=\"absolute bottom-4 left-4 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-[11px] font-mono text-purple-200\">\n        Singularity Accretion Lensing\n      </div>\n    </div>\n  );\n}"
  },
  "tags": [
    "BlackHole",
    "Canvas",
    "Space",
    "Interactive",
    "Gravitational",
    "Shader"
  ],
  "author": {
    "name": "Originkit Design",
    "handle": "originkit",
    "avatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80",
    "isVerified": true
  },
  "stats": {
    "views": 11200,
    "downloads": 3100,
    "likes": 2150,
    "bookmarks": 1200,
    "rating": 5,
    "commentsCount": 64
  },
  "license": "MIT",
  "version": "1.4.0",
  "dependencies": [
    "react"
  ],
  "isFeatured": true,
  "isTrending": true,
  "responsive": true,
  "darkSupport": true,
  "accessibilityReady": true,
  "difficulty": "Advanced",
  "createdAt": "2026-08-02T00:00:00Z",
  "updatedAt": "2026-08-05T00:00:00Z"
};

export default component;
