# Landing Page — Repurposing de Video con IA (SMD)

Landing page de alto rendimiento desarrollada para **Alan / SMD (Servicio de Marketing Digital)** con el sistema de diseño **Slash / Midnight Vault**, optimizada para máxima velocidad (Core Web Vitals 100/100), SEO técnico, AEO (SearchGPT, Perplexity, Gemini) y conversión con cotizador interactivo.

**Dominio de producción asignado:** [https://smd-video-repurposing.vercel.app](https://smd-video-repurposing.vercel.app)  
**Dominio personalizado final:** `videos.serviciodemarketingdigital.com`  
**Repositorio GitHub:** [https://github.com/hola596/smd-video-repurposing](https://github.com/hola596/smd-video-repurposing)

---

## 🚀 Stack Tecnológico
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server-Side Rendering & Static Generation)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) con tokens exactos Slash
- **Lenguaje:** TypeScript estricto
- **Iconografía:** Lucide React
- **Multimedia:** HTML5 Video con Canvas / `requestAnimationFrame` 60fps Scrubber
- **Despliegue:** Optimizado para [Vercel](https://vercel.com/)

---

## 🛠️ Ejecución Local

El servidor de producción ya se encuentra compilado y corriendo en segundo plano:

```bash
# Iniciar servidor en modo desarrollo
bun run dev

# O levantar la versión compilada de producción
bun run start -p 3000
```

Abre tu navegador en [http://localhost:3000](http://localhost:3000).

---

## 🌐 Despliegue en Vercel

1. Sube este repositorio a tu cuenta de GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: landing page repurposing de video SMD"
   git branch -M main
   git remote add origin <URL_DE_TU_REPOSITORIO>
   git push -u origin main
   ```
2. Conecta el repositorio en el panel de **Vercel** (`New Project` -> Seleccionar repositorio).
3. En la sección **Domains**, añade el subdominio:
   `videos.serviciodemarketingdigital.com`
4. En tu proveedor DNS (Cloudflare, cPanel o registrador), añade el registro CNAME:
   - **Type:** `CNAME`
   - **Name:** `videos`
   - **Target:** `cname.vercel-dns.com`

---

## 🔒 Ciberseguridad y SEO Integrados
- Cabeceras de seguridad HTTP configuradas en `next.config.mjs` y `vercel.json` (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).
- Formulario de contacto con trampa anti-spam Honeypot en `/api/contact`.
- Datos estructurados JSON-LD (`ProfessionalService`, `FAQPage`).
- OpenGraph enriquecido (`/og-image.png` 1200x630px y `/opengraph-image`).
- Generación automática de `sitemap.xml` y `robots.txt`.
