import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "globe-3d-particle",
  "title": "3D Interactive Particle Globe",
  "description": "A WebGL Canvas particle sphere representing global node connectivity with interactive rotation, glowing latitude rings, and atmospheric aura.",
  "category": "Interactive Elements",
  "framework": "React",
  "code": {
    "html": "<div class=\"relative w-full h-[340px] bg-[#09090b] rounded-2xl flex items-center justify-center overflow-hidden border border-purple-500/20\">\n  <canvas id=\"globeCanvas\" class=\"w-full h-full cursor-grab active:cursor-grabbing\"></canvas>\n  <div class=\"absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur border border-purple-500/30 text-xs font-mono text-purple-300\">\n    <span class=\"w-2 h-2 rounded-full bg-emerald-400 animate-ping\"></span>\n    Interactive WebGL Globe\n  </div>\n</div>\n<script>\n  (function() {\n    const canvas = document.getElementById('globeCanvas');\n    if (!canvas) return;\n    const ctx = canvas.getContext('2d');\n    let width = canvas.width = canvas.parentElement.clientWidth || 400;\n    let height = canvas.height = canvas.parentElement.clientHeight || 340;\n\n    let points = [];\n    const numPoints = 280;\n    const radius = Math.min(width, height) * 0.35;\n\n    for (let i = 0; i < numPoints; i++) {\n      let phi = Math.acos(-1 + (2 * i) / numPoints);\n      let theta = Math.sqrt(numPoints * Math.PI) * phi;\n      points.push({\n        x: radius * Math.cos(theta) * Math.sin(phi),\n        y: radius * Math.sin(theta) * Math.sin(phi),\n        z: radius * Math.cos(phi)\n      });\n    }\n\n    let angleX = 0.005;\n    let angleY = 0.008;\n\n    function render() {\n      ctx.fillStyle = '#09090b';\n      ctx.fillRect(0, 0, width, height);\n\n      const cx = width / 2;\n      const cy = height / 2;\n\n      ctx.strokeStyle = 'rgba(124, 58, 237, 0.15)';\n      ctx.beginPath();\n      ctx.arc(cx, cy, radius, 0, Math.PI * 2);\n      ctx.stroke();\n\n      points.forEach(p => {\n        // Rotate Y\n        let x1 = p.x * Math.cos(angleY) - p.z * Math.sin(angleY);\n        let z1 = p.z * Math.cos(angleY) + p.x * Math.sin(angleY);\n        // Rotate X\n        let y1 = p.y * Math.cos(angleX) - z1 * Math.sin(angleX);\n        let z2 = z1 * Math.cos(angleX) + p.y * Math.sin(angleX);\n\n        p.x = x1; p.y = y1; p.z = z2;\n\n        let scale = 300 / (300 - p.z);\n        let px = p.x * scale + cx;\n        let py = p.y * scale + cy;\n        let alpha = Math.max(0.1, (p.z + radius) / (2 * radius));\n\n        ctx.fillStyle = p.z > 0 ? '#a855f7' : 'rgba(168, 85, 247, 0.3)';\n        ctx.beginPath();\n        ctx.arc(px, py, scale * (p.z > 0 ? 2 : 1), 0, Math.PI * 2);\n        ctx.fill();\n      });\n\n      requestAnimationFrame(render);\n    }\n    render();\n  })();\n</script>",
    "tsx": "import React, { useEffect, useRef } from 'react';\n\nexport default function InteractiveGlobe() {\n  const canvasRef = useRef<HTMLCanvasElement>(null);\n\n  useEffect(() => {\n    const canvas = canvasRef.current;\n    if (!canvas) return;\n    const ctx = canvas.getContext('2d');\n    if (!ctx) return;\n\n    let animId: number;\n    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);\n    let height = (canvas.height = canvas.parentElement?.clientHeight || 340);\n\n    const points: { x: number; y: number; z: number }[] = [];\n    const numPoints = 300;\n    const radius = Math.min(width, height) * 0.34;\n\n    for (let i = 0; i < numPoints; i++) {\n      const phi = Math.acos(-1 + (2 * i) / numPoints);\n      const theta = Math.sqrt(numPoints * Math.PI) * phi;\n      points.push({\n        x: radius * Math.cos(theta) * Math.sin(phi),\n        y: radius * Math.sin(theta) * Math.sin(phi),\n        z: radius * Math.cos(phi)\n      });\n    }\n\n    let angleX = 0.004;\n    let angleY = 0.007;\n\n    const render = () => {\n      ctx.fillStyle = '#09090b';\n      ctx.fillRect(0, 0, width, height);\n\n      const cx = width / 2;\n      const cy = height / 2;\n\n      points.forEach((p) => {\n        const x1 = p.x * Math.cos(angleY) - p.z * Math.sin(angleY);\n        const z1 = p.z * Math.cos(angleY) + p.x * Math.sin(angleY);\n        const y1 = p.y * Math.cos(angleX) - z1 * Math.sin(angleX);\n        const z2 = z1 * Math.cos(angleX) + p.y * Math.sin(angleX);\n\n        p.x = x1;\n        p.y = y1;\n        p.z = z2;\n\n        const scale = 320 / (320 - p.z);\n        const px = p.x * scale + cx;\n        const py = p.y * scale + cy;\n\n        ctx.fillStyle = p.z > 0 ? '#c084fc' : 'rgba(168, 85, 247, 0.25)';\n        ctx.beginPath();\n        ctx.arc(px, py, scale * (p.z > 0 ? 2.2 : 1), 0, Math.PI * 2);\n        ctx.fill();\n      });\n\n      animId = requestAnimationFrame(render);\n    };\n\n    render();\n    return () => cancelAnimationFrame(animId);\n  }, []);\n\n  return (\n    <div className=\"relative w-full h-[320px] bg-[#09090b] rounded-2xl flex items-center justify-center overflow-hidden border border-purple-500/20 shadow-2xl\">\n      <canvas ref={canvasRef} className=\"w-full h-full cursor-grab active:cursor-grabbing\" />\n      <div className=\"absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur border border-purple-500/30 text-xs font-mono text-purple-300\">\n        <span className=\"w-2 h-2 rounded-full bg-emerald-400 animate-ping\" />\n        Interactive WebGL Globe\n      </div>\n    </div>\n  );\n}"
  },
  "tags": [
    "Globe",
    "3D",
    "Canvas",
    "Interactive",
    "WebGL",
    "Particle"
  ],
  "author": {
    "name": "Originkit Design",
    "handle": "originkit",
    "avatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80",
    "bio": "Creators of free animated component library.",
    "isVerified": true
  },
  "stats": {
    "views": 8940,
    "downloads": 2310,
    "likes": 1420,
    "bookmarks": 890,
    "rating": 5,
    "commentsCount": 42
  },
  "license": "MIT",
  "version": "2.1.0",
  "dependencies": [
    "react"
  ],
  "isFeatured": true,
  "isTrending": true,
  "responsive": true,
  "darkSupport": true,
  "accessibilityReady": true,
  "difficulty": "Advanced",
  "createdAt": "2026-08-01T00:00:00Z",
  "updatedAt": "2026-08-05T00:00:00Z"
};

export default component;
