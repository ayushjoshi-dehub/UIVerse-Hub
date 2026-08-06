import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "chromatic-waves-bg",
  "title": "Chromatic Waves Animated Shader",
  "description": "An ethereal animated background wave shader with dynamic fluid color shifts and hypnotic movement.",
  "category": "Background Animations",
  "framework": "React",
  "code": {
    "html": "<div class=\"relative w-full h-[320px] bg-[#090710] rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden\">\n  <canvas id=\"cwCanvas\" class=\"w-full h-full\"></canvas>\n  <span class=\"absolute text-sm font-mono text-purple-300 font-bold bg-black/50 px-4 py-2 rounded-full border border-purple-500/30\">Chromatic Wave Shader</span>\n</div>\n<script>\n  (function() {\n    const canvas = document.getElementById('cwCanvas');\n    if (!canvas) return;\n    const ctx = canvas.getContext('2d');\n    let width = canvas.width = canvas.parentElement.clientWidth || 400;\n    let height = canvas.height = canvas.parentElement.clientHeight || 320;\n\n    let step = 0;\n    function render() {\n      ctx.fillStyle = '#090710';\n      ctx.fillRect(0, 0, width, height);\n\n      step += 0.02;\n      for (let i = 0; i < 5; i++) {\n        ctx.beginPath();\n        ctx.moveTo(0, height / 2);\n        for (let x = 0; x < width; x += 10) {\n          const y = Math.sin(x * 0.01 + step + i) * 35 + Math.cos(x * 0.005 + step) * 20 + height / 2;\n          ctx.lineTo(x, y);\n        }\n        ctx.strokeStyle = ['rgba(168, 85, 247, 0.4)', 'rgba(6, 182, 212, 0.4)', 'rgba(236, 72, 153, 0.4)', 'rgba(59, 130, 246, 0.4)'][i % 4];\n        ctx.lineWidth = 3;\n        ctx.stroke();\n      }\n      requestAnimationFrame(render);\n    }\n    render();\n  })();\n</script>",
    "tsx": "import React, { useEffect, useRef } from 'react';\n\nexport default function ChromaticWaves() {\n  const canvasRef = useRef<HTMLCanvasElement>(null);\n\n  useEffect(() => {\n    const canvas = canvasRef.current;\n    if (!canvas) return;\n    const ctx = canvas.getContext('2d');\n    if (!ctx) return;\n\n    let animId: number;\n    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);\n    let height = (canvas.height = canvas.parentElement?.clientHeight || 320);\n\n    let step = 0;\n    const render = () => {\n      ctx.fillStyle = '#090710';\n      ctx.fillRect(0, 0, width, height);\n\n      step += 0.02;\n      const colors = ['rgba(168, 85, 247, 0.5)', 'rgba(6, 182, 212, 0.5)', 'rgba(236, 72, 153, 0.5)', 'rgba(99, 102, 241, 0.5)'];\n\n      for (let i = 0; i < 5; i++) {\n        ctx.beginPath();\n        ctx.moveTo(0, height / 2);\n        for (let x = 0; x <= width; x += 8) {\n          const y = Math.sin(x * 0.008 + step + i * 0.8) * 40 + Math.cos(x * 0.004 + step) * 20 + height / 2;\n          ctx.lineTo(x, y);\n        }\n        ctx.strokeStyle = colors[i % colors.length];\n        ctx.lineWidth = 3.5;\n        ctx.stroke();\n      }\n\n      animId = requestAnimationFrame(render);\n    };\n\n    render();\n    return () => cancelAnimationFrame(animId);\n  }, []);\n\n  return (\n    <div className=\"relative w-full h-[320px] bg-[#090710] rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden shadow-2xl\">\n      <canvas ref={canvasRef} className=\"w-full h-full\" />\n      <span className=\"absolute text-xs font-mono text-purple-200 font-bold bg-black/60 backdrop-blur px-4 py-1.5 rounded-full border border-purple-500/30\">\n        Chromatic Shader Canvas\n      </span>\n    </div>\n  );\n}"
  },
  "tags": [
    "Waves",
    "Shader",
    "Chromatic",
    "Background",
    "Canvas"
  ],
  "author": {
    "name": "Originkit Design",
    "handle": "originkit",
    "avatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80",
    "isVerified": true
  },
  "stats": {
    "views": 9100,
    "downloads": 2500,
    "likes": 1620,
    "bookmarks": 850,
    "rating": 4.9,
    "commentsCount": 44
  },
  "license": "MIT",
  "version": "1.0.0",
  "dependencies": [
    "react"
  ],
  "isFeatured": true,
  "isTrending": true,
  "responsive": true,
  "darkSupport": true,
  "accessibilityReady": true,
  "difficulty": "Intermediate",
  "createdAt": "2026-08-01T00:00:00Z",
  "updatedAt": "2026-08-05T00:00:00Z"
};

export default component;
