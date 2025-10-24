# Av. Ezgi G. Altakan - Website

Modern, hızlı ve SEO-dostu avukatlık web sitesi. WordPress headless CMS + SvelteKit frontend.

## 🚀 Hızlı Başlangıç

### 1. Bağımlılıkları Yükle

```bash
npm install
```

### 2. Ortam Değişkenlerini Ayarla

`.env` dosyası zaten hazır, ancak gerekirse düzenleyin:

```
PUBLIC_WP_API_URL=https://content.avezgigurcihanaltakan.com/wp-json
PUBLIC_SITE_URL=https://avezgigurcihanaltakan.com
```

### 3. Development Server'ı Başlat

```bash
npm run dev
```

Tarayıcıda açılacak: http://localhost:5173

### 4. Production Build

```bash
npm run build
npm run preview
```

## 📁 Proje Yapısı

```
src/
├── lib/
│   ├── wp.ts           # WordPress API client
│   ├── types.ts        # TypeScript type definitions
│   └── utils.ts        # Helper functions
│
├── components/
│   ├── Header.svelte   # Navigation (German labels)
│   ├── Footer.svelte   # Footer (German labels)
│   └── SEO.svelte      # SEO meta tags
│
├── routes/
│   ├── +layout.svelte          # Main layout
│   ├── +layout.server.ts       # Global data (loads site settings)
│   ├── +page.svelte            # Startseite (homepage)
│   ├── ueber-mich/             # Über mich
│   ├── dienstleistungen/       # Dienstleistungen
│   ├── blog/                   # Blog list
│   │   └── [slug]/             # Single blog post
│   ├── kontakt/                # Kontakt
│   └── datenschutz/            # Datenschutz
│
├── app.html            # HTML template (lang="de")
└── app.css             # Global CSS
```

## 🎨 Özelleştirme

### Renkler (tailwind.config.js)

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Ana renk
    600: '#0284c7',  // Hover rengi
    // ...
  }
}
```

### Logo Değiştirme

`src/components/Header.svelte` içinde:

```html
<a href="/" class="text-xl font-bold"> Av. Ezgi G. Altakan </a>
```

Yerine logo eklenebilir:

```html
<a href="/">
  <img src="/logo.svg" alt="Logo" class="h-10" />
</a>
```

## 📝 WordPress'te Yapılması Gerekenler

### Sayfalar Oluşturun (Pages)

Create the following pages in WordPress and use the German slugs so the frontend can fetch localized content:

1. **Startseite / Home** (slug: `homepage`)
2. **Über mich** (slug: `ueber-mich`)
3. **Dienstleistungen** (slug: `dienstleistungen`)
4. **Kontakt** (slug: `kontakt`)
5. **Datenschutz** (slug: `datenschutz`)

### Ayarları Doldurun

WordPress Admin > Ayarlar > Genel

- Telefon
- Email
- Adres
- Çalışma Saatleri
- LinkedIn URL

### Blog Yazıları Ekleyin

WordPress Admin > Yazılar > Yeni Ekle

Her yazıya:

- Başlık
- İçerik
- Öne Çıkan Görsel
- Kategori

## 🚀 Deployment (Vercel)

### GitHub'a Push

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Vercel'e Deploy

1. https://vercel.com/new
2. GitHub repo'yu seç
3. Environment Variables ekle:
   - `PUBLIC_WP_API_URL`
   - `PUBLIC_SITE_URL`
4. Deploy!

## 🔧 Geliştirme Notları

### API Endpoint'leri

```
GET /wp-json/custom/v1/site-settings
GET /wp-json/custom/v1/posts
GET /wp-json/custom/v1/posts/{slug}
GET /wp-json/custom/v1/pages/{slug}
```

### Type Safety

TypeScript kullanıldığı için tüm API responseları type-safe.

```typescript
import type { WPPost, WPPage } from "$lib/wp";
```

## 📞 Destek

Sorularınız için: Proje dokümantasyonuna bakın veya GitHub Issues açın.

---

**Built with ❤️ using SvelteKit + WordPress**
