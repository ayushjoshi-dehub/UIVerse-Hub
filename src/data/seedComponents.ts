import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { UIComponent } from '../types';

interface ComponentModule {
  default?: UIComponent;
  component?: UIComponent;
}

let components: UIComponent[] = [];

// Method 1: Vite eager import (works in Vite dev & build)
try {
  // @ts-ignore
  if (typeof import.meta !== 'undefined' && import.meta.glob) {
    // @ts-ignore
    const modules = import.meta.glob<ComponentModule>(
      './components/*.ts',
      { eager: true }
    );
    const loaded = Object.values(modules)
      .map((m: ComponentModule) => m.default || m.component)
      .filter((c): c is UIComponent => Boolean(c && c.id));

    if (loaded.length > 0) {
      components = loaded;
    }
  }
} catch (e) {
  // Fallthrough
}

// Method 2: Node ESM fallback (for tsx server.ts execution)
if (components.length === 0 && typeof process !== 'undefined' && process.versions && process.versions.node) {
  try {
    const req = createRequire(import.meta.url);
    const currentDir = path.dirname(fileURLToPath(import.meta.url));
    const dir = path.resolve(currentDir, 'components');

    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts') || f.endsWith('.js'));
      files.forEach((file) => {
        try {
          const mod = req(path.join(dir, file));
          const comp = mod.default || mod.component;
          if (comp && comp.id && !components.some((c) => c.id === comp.id)) {
            components.push(comp);
          }
        } catch (err) {
          console.error(`Error loading ${file}:`, err);
        }
      });
    }
  } catch (e) {
    console.error('Error loading components dir:', e);
  }
}

export const SEED_COMPONENTS: UIComponent[] = components;
