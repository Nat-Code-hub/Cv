# CV web – Natalia Chuquillanqui

Hecho con [Astro](https://astro.build). Todo el contenido está al principio de `src/pages/index.astro`.

## Probarlo en local
```bash
npm install
npm run dev      # http://localhost:4321/cv
```

## Publicarlo en GitHub Pages
1. Crea en GitHub un repositorio público llamado `cv` y sube este proyecto (rama `main`).
2. En el repositorio: Settings → Pages → Source: **GitHub Actions**.
3. Al hacer push, el workflow publica la web en `https://nat-code-hub.github.io/cv`.
4. Si usas otro nombre de repo, cambia `base` en `astro.config.mjs`.

## Foto (opcional)
Guarda tu foto como `public/foto.jpg` y pon `const foto = true;` en `index.astro`.

## QR
Cuando la URL funcione, pégala en la herramienta de QR de Canva y descarga el QR en SVG.
