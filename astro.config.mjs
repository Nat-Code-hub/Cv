import { defineConfig } from 'astro/config';

// GitHub Pages: si tu repositorio se llama "cv", la web quedará en
// https://nat-code-hub.github.io/cv
// Si lo llamas distinto, cambia "base" por "/nombre-del-repo".
export default defineConfig({
  site: 'https://nat-code-hub.github.io',
  base: '/Cv',
});
