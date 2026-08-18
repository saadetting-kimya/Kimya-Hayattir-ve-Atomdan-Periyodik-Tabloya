# Resmi GHS piktogram dosyaları (isteğe bağlı)

Bu klasöre aşağıdaki 9 dosya adıyla bir SVG (veya PNG) koyarsanız,
uygulama elle çizilmiş SVG yerine otomatik olarak bu dosyayı kullanır
(`quiz-engine.js` içindeki `renderGHSPictogram` — dosya bulunamazsa
sessizce elle çizilmiş versiyona geri döner, hiçbir kod değişikliği
gerekmez).

| Dosya adı | GHS sınıfı | Durum |
|---|---|---|
| `flame.svg` | Alevlenir (GHS02) | ✅ Eklendi (kullanıcının EPS'inden) |
| `oxidizing.svg` | Oksitleyici (GHS03) | ✅ Eklendi (kullanıcının EPS'inden) |
| `explosive.svg` | Patlayıcı (GHS01) | ✅ Eklendi (kullanıcının EPS'inden) |
| `gas.svg` | Basınçlı gaz (GHS04) | ✅ Eklendi (kullanıcının EPS'inden) |
| `irritant.svg` | Zararlı/Tahriş (GHS07) | ✅ Eklendi (kullanıcının EPS'inden) |
| `corrosive.svg` | Aşındırıcı (GHS05) | ✅ Eklendi (kullanıcının EPS'inden, diamond çerçeveye yeniden bindirildi) |
| `toxic.svg` | Toksik (GHS06) | ✅ Eklendi (kullanıcının EPS'inden) |
| `health-hazard.svg` | Sağlığa zararlı (GHS08) | ✅ Eklendi (kullanıcının EPS'inden) |
| `environment.svg` | Çevreye zararlı (GHS09) | ✅ Eklendi (kullanıcının EPS'inden) |

**9/9 tamamlandı.** Tüm dosyalar, kullanıcının yüklediği resmi GHS EPS
dosyalarından (gömülü TIFF önizlemesi, pure-Python `struct`+`zlib` ile
ayrıştırılıp PNG'ye çevrildi, ardından bir SVG `<image>` sarmalayıcısına
gömüldü) çıkarıldı — bkz. `/tmp/.../scratchpad/eps_extract.py` (bu
depoya dahil değil, yalnızca oturum notudur). `corrosive.svg`'nin
kaynak EPS'i kendi (kare, turuncu) çerçevesiyle geldiğinden, içerik
siyah/beyaz eşiklemeyle kırpılıp diğerleriyle tutarlı standart
diamond çerçeveye yeniden yerleştirildi.

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
