# [SİTE ADI] — Kimya Eğitim Sitesi Şablonu

Bu klasör, **AtomLab 9** (Kimya Hayattır ve Atomdan Periyodik Tabloya)
projesinde geliştirilen format ve motorun genelleştirilmiş bir kalıbıdır.
Bağlam temelli soru bankası + interaktif simülasyonlar + basılabilir
Ders Defteri + PDF üreten bir kimya öğretim sitesini sıfırdan kurmak
için başlangıç noktasıdır.

## Hızlı Başlangıç

1. Bu klasörü yeni bir GitHub reposuna kopyalayın (her konu/ders için
   ayrı bir repo — bkz. proje kararı).
2. **`docs/ICERIK-URETIM-REHBERI.md`'yi baştan sona okuyun.** Bu belge,
   içerik yazarken uyulması gereken tüm kuralları ve iş akışını içerir.
3. Aşağıdaki dosyalarda `[SİTE ADI]`, `[KAZANIM KODU]` gibi köşeli
   parantezli yer tutucuları kendi projenize göre doldurun:
   - `index.html`
   - `assets/js/nav.js`
   - `moduller/00-ornek-modul.html` (kopyalayıp çoğaltacağınız şablon)
   - `defter/index.html`
   - `yanlislarim.html`
4. `assets/js/quiz-data.js` dosyasını **silip** kendi soru bankanızla
   değiştirin — mevcut içerik yalnızca şema referansıdır (her görsel
   türünden birer örnek).
5. Her yeni modül/konu için `docs/ICERIK-URETIM-REHBERI.md`'deki
   "İş Akışı" bölümünü izleyin.
6. `node scripts/verify-quiz-data.mjs assets/js/quiz-data.js --count=50`
   ile doğrulayın.
7. Yerel sunucuda test edin: `python3 -m http.server 8000` (ya da
   tercih ettiğiniz statik sunucu), `http://localhost:8000` açın.

## Bu Şablonda Ne Var, Ne Yok

**Var (jenerik, hazır):**
- Tam bir soru kartı render motoru (`quiz-engine.js`) — A-E şıklı,
  ilerleme takipli, "Benzerini Çöz" pekiştirme akışlı
- 7 özgün görsel bileşen: tablo, çubuk/çizgi/pH grafiği, orbital kutu
  diyagramı, daire büyüklük karşılaştırma, periyodik tablo vurgulama,
  GHS tehlike piktogramı, gündelik nesne ikonu
- "Yanlışlarım" tekrar sayfası + öğrenci PDF analiz raporu
- Basılabilir Ders Defteri altyapısı (kapak, içindekiler, konu
  anlatımı kutuları, soru türleri, cevap anahtarı — 2 sütunlu baskı)
- Doğrulama betiği (soru sayısı, tekrar kontrolü, cevap dağılımı,
  isim/kalıp taraması)
- Kapsamlı içerik üretim rehberi (kurallar + iş akışı + bilinen
  tuzaklar)

**Yok (her konuda sıfırdan yazılması gereken):**
- Gerçek soru bankası (400 soru — bu şablonda yalnızca 11 örnek soru var)
- Konuya özel bespoke simülasyonlar (AtomLab 9'daki pH laboratuvarı,
  atom inşa sayacı gibi — kaynak kod için orijinal AtomLab 9 reposuna
  bakabilirsiniz, ama her yeni konu kendi simülasyonunu gerektirir)
- Ders Defteri'nin gerçek konu anlatımı içeriği
- Periyodik tablo verisi / 3B orbital görselleştirme gibi atoma özgü
  eklentiler (yalnızca konunuz atom/periyodik tablo içeriyorsa gerekli
  — AtomLab 9'daki `periodic-data.js`/`orbital-3d.js` referans alınabilir)

## Neden Ayrı Bir Repo (Her Konu İçin)?

Her kimya konusu (çözeltiler, tepkime hızı, gazlar, asit-baz dengesi vb.)
kendi bağımsız sitesi olarak kurulacak şekilde tasarlandı. Motoru
(quiz-engine.js, style.css) her seferinde bu klasörden kopyalayıp
başlayın; içerik (quiz-data.js, defter, bespoke simülasyonlar) her
projede yeniden yazılır.

## Sürüm Notu

Bu şablon, AtomLab 9 reposunun `[commit/tarih]` durumundan türetilmiştir.
Motorda (quiz-engine.js) yapılan iyileştirmeleri (hata düzeltmeleri,
yeni görsel türleri) periyodik olarak ana AtomLab 9 reposundan bu
şablona geri taşımayı düşünebilirsiniz.
