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
│   └── utils.ts        # Yardımcı fonksiyonlar
│
├── components/
│   ├── Header.svelte   # Navigasyon
│   ├── Footer.svelte   # Footer
│   └── SEO.svelte      # SEO meta tags
│
├── routes/
│   ├── +layout.svelte          # Ana layout
│   ├── +layout.server.ts       # Global data
│   ├── +page.svelte            # Ana sayfa
│   ├── hakkimda/               # Hakkımda
│   ├── hizmetler/              # Hizmetler
│   ├── blog/                   # Blog listesi
│   │   └── [slug]/             # Tek blog yazısı
│   ├── iletisim/               # İletişim
│   └── kvkk/                   # KVKK
│
├── app.html            # HTML template
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
<a href="/" class="text-xl font-bold">
  Av. Ezgi G. Altakan
</a>
```

Yerine logo eklenebilir:

```html
<a href="/">
  <img src="/logo.svg" alt="Logo" class="h-10" />
</a>
```

## 📝 WordPress'te Yapılması Gerekenler

### Sayfalar Oluşturun (Pages)

1. **Ana Sayfa** (slug: `homepage`)
2. **Hakkımda** (slug: `hakkimda`)
3. **Hizmetler** (slug: `hizmetler`)
4. **İletişim** (slug: `iletisim`)
5. **KVKK** (slug: `kvkk`)

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
import type { WPPost, WPPage } from '$lib/wp';
```

## 📞 Destek

Sorularınız için: Proje dokümantasyonuna bakın veya GitHub Issues açın.

---

**Built with ❤️ using SvelteKit + WordPress**
