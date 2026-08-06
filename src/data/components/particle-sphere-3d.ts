import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "particle-sphere-3d",
  "title": "3D Revolving Particle Cloud Sphere",
  "description": "A glowing 3D particle cloud that rotates fluidly in space with real-time particle depth sorting.",
  "category": "Interactive Elements",
  "framework": "React",
  "code": {
    "html": "<div class=\"relative w-full h-[320px] bg-[#070709] rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden\">\n  <canvas id=\"psCanvas\" class=\"w-full h-full\"></canvas>\n</div>\n<script>\n  (function() {\n    const canvas = document.getElementById('psCanvas');\n    if (!canvas) return;\n    const ctx = canvas.getContext('2d');\n    let width = canvas.width = canvas.parentElement.clientWidth || 400;\n    let height = canvas.height = canvas.parentElement.clientHeight || 320;\n    const cx = width / 2, cy = height / 2;\n\n    const points = [];\n    for(let i=0; i<200; i++) {\n      const u = Math.random();\n      const v = Math.random();\n      const theta = u * 2.0 * Math.PI;\n      const phi = Math.acos(2.0 * v - 1.0);\n      const r = 90;\n      points.push({\n        x: r * Math.sin(phi) * Math.cos(theta),\n        y: r * Math.sin(phi) * Math.sin(theta),\n        z: r * Math.cos(phi)\n      });\n    }\n\n    let angle = 0;\n    function render() {\n      ctx.fillStyle = '#070709';\n      ctx.fillRect(0, 0, width, height);\n      angle += 0.01;\n\n      points.forEach(p => {\n        const x = p.x * Math.cos(angle) - p.z * Math.sin(angle);\n        const z = p.z * Math.cos(angle) + p.x * Math.sin(angle);\n        const scale = 250 / (250 - z);\n\n        ctx.fillStyle = z > 0 ? '#38bdf8' : 'rgba(56, 189, 248, 0.2)';\n        ctx.beginPath();\n        ctx.arc(cx + x * scale, cy + p.y * scale, Math.max(1, scale * 1.8), 0, Math.PI * 2);\n        ctx.fill();\n      });\n      requestAnimationFrame(render);\n    }\n    render();\n  })();\n</script>",
    "tsx": "import React, { useEffect, useRef } from 'react';\n\nexport default function ParticleSphere() {\n  const canvasRef = useRef<HTMLCanvasElement>(null);\n\n  useEffect(() => {\n    const canvas = canvasRef.current;\n    if (!canvas) return;\n    const ctx = canvas.getContext('2d');\n    if (!ctx) return;\n\n    let animId: number;\n    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);\n    let height = (canvas.height = canvas.parentElement?.clientHeight || 320);\n    const cx = width / 2, cy = height / 2;\n\n    const points = Array.from({ length: 220 }, () => {\n      const u = Math.random();\n      const v = Math.random();\n      const theta = u * 2.0 * Math.PI;\n      const phi = Math.acos(2.0 * v - 1.0);\n      const r = 95;\n      return {\n        x: r * Math.sin(phi) * Math.cos(theta),\n        y: r * Math.sin(phi) * Math.sin(theta),\n        z: r * Math.cos(phi)\n      };\n    });\n\n    let angle = 0;\n    const render = () => {\n      ctx.fillStyle = '#070709';\n      ctx.fillRect(0, 0, width, height);\n      angle += 0.012;\n\n      points.forEach((p) => {\n        const x = p.x * Math.cos(angle) - p.z * Math.sin(angle);\n        const z = p.z * Math.cos(angle) + p.x * Math.sin(angle);\n        const scale = 260 / (260 - z);\n\n        ctx.fillStyle = z > 0 ? '#38bdf8' : 'rgba(56, 189, 248, 0.25)';\n        ctx.beginPath();\n        ctx.arc(cx + x * scale, cy + p.y * scale, Math.max(1, scale * 2), 0, Math.PI * 2);\n        ctx.fill();\n      });\n\n      animId = requestAnimationFrame(render);\n    };\n\n    render();\n    return () => cancelAnimationFrame(animId);\n  }, []);\n\n  return (\n    <div className=\"relative w-full h-[320px] bg-[#070709] rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden shadow-2xl\">\n      <canvas ref={canvasRef} className=\"w-full h-full\" />\n    </div>\n  );\n}"
  },
  "tags": [
    "Sphere",
    "Particle",
    "3D",
    "Canvas",
    "Interactive"
  ],
  "author": {
    "name": "Originkit Design",
    "handle": "originkit",
    "avatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80",
    "isVerified": true
  },
  "stats": {
    "views": 7300,
    "downloads": 1950,
    "likes": 1380,
    "bookmarks": 710,
    "rating": 4.8,
    "commentsCount": 31
  },
  "license": "MIT",
  "version": "1.0.0",
  "dependencies": [
    "react"
  ],
  "isFeatured": true,
  "isTrending": false,
  "responsive": true,
  "darkSupport": true,
  "accessibilityReady": true,
  "difficulty": "Intermediate",
  "createdAt": "2026-08-04T00:00:00Z",
  "updatedAt": "2026-08-05T00:00:00Z"
};

export default component;
