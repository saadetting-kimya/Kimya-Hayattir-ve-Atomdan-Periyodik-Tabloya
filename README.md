# AtomLab 9 — Kimya Hayattır ve Atomdan Periyodik Tabloya

9. Sınıf Kimya, **Kimya Hayattır ve Atomdan Periyodik Tabloya** teması (T.C. Türkiye
Yüzyılı Maarif Modeli) için geliştirilmiş, etkileşimli bir sanal laboratuvar. Bağımlılıksız,
saf HTML/CSS/JS — derleme (build) adımı gerektirmez; herhangi bir statik dosya
sunucusuyla veya GitHub Pages ile doğrudan yayınlanabilir.

## Neden bu proje

İçerik, temanın sekiz kazanımıyla sınırlıdır:

| Kod | Kazanım (özet) | Modül |
|---|---|---|
| KİM.9.1.1 | Kimya biliminin günlük hayata katkısına ilişkin çıkarım yapabilme | Modül 1 |
| KİM.9.1.2 | Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme | Modül 2 |
| KİM.9.1.3 | Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme | Modül 3 |
| KİM.9.1.4 | Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme | Modül 4 |
| KİM.9.1.5 | Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme | Modül 5 |
| KİM.9.1.6 | Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme | Modül 6 |
| KİM.9.1.7 | Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme | Modül 7 |
| KİM.9.1.8 | Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme | Modül 8 |

Kullanılan anahtar kavramlar da aynı şekilde sınırlıdır: **kimya bilimi, kimyasal madde,
absorbsiyon, emisyon, orbital, Aufbau ilkesi, Pauli dışlama ilkesi, Hund kuralı,
küresel simetri, valans elektron, izoelektronik, atom yarıçapı, iyonlaşma enerjisi,
elektronegatiflik.**

## Yapı

```
index.html                                Ana sayfa: tema tanıtımı, kazanım özeti, sözlük, modül kartları
moduller/
  01-gunluk-hayatta-kimya.html            Günlük hayatta kimya — kategori sınıflandırma etkinliği
  02-alt-disiplinler.html                 Kimyanın 6 alt disiplini — kart + eşleştirme etkinliği
  03-kariyer-olanaklari.html              8 kariyer sektörü, eğitim basamakları, rol modeller
  04-madde-guvenligi.html                 GHS piktogram eşleştirme + güvenlik senaryosu simülatörü
  05-atom-teorileri.html                  Atom modelleri zaman tüneli + "Kendi Atomunu İnşa Et"
  06-orbitaller-elektron-dizilimi.html    Aufbau/Hund/Pauli — elektron dizilimi simülatörü (Z=1-36)
  07-periyodik-tabloda-yer-bulma.html     Tam interaktif periyodik tablo (118 element)
  08-periyodik-ozellikler.html            Atom yarıçapı / iyonlaşma enerjisi / elektronegatiflik trend grafiği
assets/
  css/style.css                           Ortak tasarım sistemi
  js/periodic-data.js                     118 elementlik veri + Aufbau ilkesiyle otomatik elektron dizilimi hesaplama
  js/quiz-engine.js                       Bağlam temelli soru render motoru + ilerleme (localStorage)
  js/quiz-data.js                         Modül başına 5 bağlam temelli değerlendirme sorusu (toplam 40)
  js/nav.js                               Paylaşılan üst menü / altbilgi enjeksiyonu
defter/index.html                         Ders Defteri kaynağı (print-optimized HTML)
Kimya 9 Ders Defteri.pdf                  Basılı eşlikçi: 8 ünite, 80 soru, cevap anahtarı
```

## Tasarım ilkeleri

- **Keşif önce, formül sonra.** Her modül aynı dört aşamayı izler: 🤔 Merak Et → 🔍
  Keşfet (etkileşimli etkinlik) → 💡 Açıkla (konu anlatımı) → ✅ Değerlendir (bağlam
  temelli sorular). Bu yapı, kazanımların "çıkarım yapma / tahmin etme / tümevarımsal
  akıl yürütme / çözümleme" vurgusuyla örtüşür.
- **Veri, kod içinde hesaplanır — ezberlenmez.** `periodic-data.js`, herhangi bir Z
  değeri için elektron dizilimini Madelung (n+l) kuralına göre gerçek zamanlı hesaplar
  (Modül 6 ve 7'de kullanılır); 118 elementin tamamı için kategori/periyot/grup verisi
  içerir. Ana grup elementlerinin periyodik özellik verileri (atom yarıçapı, iyonlaşma
  enerjisi, elektronegatiflik) doğrudan kaynak ders kitabındaki tablolardan alınmıştır.
- **Bağlam temelli değerlendirme.** Her modülün 5 sorusu günlük hayattan bir durumla
  başlar (banyo temizliği kazası, dalgıç, CERN, vitamin etiketi vb.) ve kazanımın ilgili
  bileşeniyle doğrudan eşleşir; bağlam kapatıldığında soru ezber bilgiyle çözülemez.
- **Basılı eşlikçi.** Ders Defteri, uygulamanın "Uygulamada Dene" kutularıyla birebir
  eşleşir; siyah-beyaz fotokopide okunaklı kalacak şekilde kutular çerçeve stiliyle
  (yalnızca renkle değil) ayrılmıştır.

## Yerel çalıştırma

Derleme adımı yoktur. Herhangi bir statik sunucu yeterlidir:

```bash
python3 -m http.server 8000
```

Ardından `http://localhost:8000/index.html` adresini açın.

## Ders Defterini yeniden üretme

`defter/index.html`, tarayıcıda "Yazdır / PDF Kaydet" düğmesiyle veya komut satırından
headless Chromium ile PDF'e dönüştürülebilir:

```bash
chromium --headless --disable-gpu --no-sandbox \
  --print-to-pdf="Kimya 9 Ders Defteri.pdf" \
  --print-to-pdf-no-header --no-pdf-header-footer \
  "file://$(pwd)/defter/index.html"
```

## Kaynak

İçerik, T.C. Millî Eğitim Bakanlığı Türkiye Yüzyılı Maarif Modeli 9. Sınıf Kimya Dersi
Öğretim Programı ve ders kitabı (Kimya Hayattır ve Atomdan Periyodik Tabloya teması)
temel alınarak hazırlanmıştır.
