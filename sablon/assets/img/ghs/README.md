# Resmi GHS piktogram dosyaları (isteğe bağlı)

Bu klasöre aşağıdaki 9 dosya adıyla bir SVG (veya PNG) koyarsanız,
uygulama elle çizilmiş SVG yerine otomatik olarak bu dosyayı kullanır
(`quiz-engine.js` içindeki `renderGHSPictogram` — dosya bulunamazsa
sessizce elle çizilmiş versiyona geri döner, hiçbir kod değişikliği
gerekmez).

| Dosya adı (bu klasöre böyle kaydedin) | GHS sınıfı | Kaynak (Wikimedia Commons, kamu malı) |
|---|---|---|
| `flame.svg` | Alevlenir (GHS02) | https://commons.wikimedia.org/wiki/File:GHS-pictogram-flamme.svg |
| `oxidizing.svg` | Oksitleyici (GHS03) | https://commons.wikimedia.org/wiki/File:GHS-pictogram-rondflam.svg |
| `explosive.svg` | Patlayıcı (GHS01) | https://commons.wikimedia.org/wiki/File:GHS-pictogram-explos.svg |
| `gas.svg` | Basınçlı gaz (GHS04) | https://commons.wikimedia.org/wiki/File:GHS-pictogram-bottle.svg |
| `corrosive.svg` | Aşındırıcı (GHS05) | https://commons.wikimedia.org/wiki/File:GHS-pictogram-acid.svg |
| `toxic.svg` | Toksik (GHS06) | https://commons.wikimedia.org/wiki/File:GHS-pictogram-skull.svg |
| `irritant.svg` | Zararlı/Tahriş (GHS07) | https://commons.wikimedia.org/wiki/File:GHS-pictogram-exclam.svg |
| `health-hazard.svg` | Sağlığa zararlı (GHS08) | https://commons.wikimedia.org/wiki/File:GHS-pictogram-silhouette.svg |
| `environment.svg` | Çevreye zararlı (GHS09) | https://commons.wikimedia.org/wiki/File:GHS-pictogram-pollu.svg |

## Neden bu dosyalar ve neden ben indiremiyorum

Bu SVG'ler bir yayınevinin çizimi değil; Wikimedia Commons'ın BM GHS
(Purple Book) standardından doğrudan türettiği, dünya genelinde
etiketleme/uyum amacıyla serbestçe kullanılan resmi piktogramlar —
yani "bir kitaptan tarama" değil, standardın kendisi.

Bu oturumun ağ erişimi `wikipedia.org`/`wikimedia.org` alan adlarını
politika gereği engelliyor (denedim, `EGRESS_BLOCKED` hatası aldım),
bu yüzden dosyaları ben indiremiyorum. Yapmanız gereken:

1. Yukarıdaki her linke gidin, sayfadaki SVG'yi indirin
   ("Original file" / "Download" bağlantısı).
2. Tabloda verilen dosya adıyla (`flame.svg` vb.) bu klasöre
   (`assets/img/ghs/`) kaydedin.
3. Bana dosyaları bu sohbete yükleyin ya da doğrudan bu klasöre
   push'layın — ben de sitenin/defterin görselini test edip
   sonucu size göstereyim.

Bir kod adı eksik/yanlış görünürse (dosya bulunamazsa) uygulama hiçbir
hata vermeden otomatik olarak mevcut elle çizilmiş SVG'ye geri döner —
yani bu değişiklik güvenli, geri döndürülebilir bir eklemedir.
