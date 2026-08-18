# İçerik Üretim Rehberi

Bu belge, AtomLab 9 (Kimya Hayattır ve Atomdan Periyodik Tabloya) projesinde
geliştirilen yaklaşımın yeniden kullanılabilir bir kalıba dönüştürülmüş
hâlidir. Yeni bir kimya konusu için uygulama, soru bankası, ders defteri
ve simülasyon üretirken bu belgeyi adım adım takip edin.

Bu şablonu kullanan bir asistan (Claude ya da başka biri) için: bu belge
sizin talimat setinizdir. Kuralları atlamayın, "kısayol" aramayın —
her kural gerçek bir hatanın veya kullanıcı geri bildiriminin sonucunda
buraya eklendi.

---

## 1. Temel Felsefe

- **Bağlam gerçek olmalı, süs olmamalı.** Bir soru, verilen bağlam
  (context) olmadan da ezberden cevaplanabiliyorsa bağlam geçersizdir.
  Test: bağlamı zihninizden silin — soru hâlâ cevaplanabiliyor mu?
  Cevaplanabiliyorsa bağlamı yeniden yazın.
- **Görsel, metnin tekrarı değil, tamamlayıcısıdır.** Bir tabloda/grafikte
  verilen sayısal değerler context metninde bir daha yazılmaz. Öğrenci
  görseli okumak ZORUNDA kalmalı.
- **Özgünlük şart, telif ihlali yasak.** Piyasadaki ders kitapları, özel
  yayınlar ve simülasyon siteleri yalnızca **ilham/stil/kapsam referansı**
  içindir. Hiçbir cümle, görsel veya soru birebir/yakın parafraz olarak
  kopyalanmaz. Bir kaynağı incelediğinizde not alın: "hangi konuları,
  hangi soru tipleriyle, ne derinlikte işlemiş" — sonra tamamen kendi
  cümlelerinizle, kendi bağlamlarınızla yazın.
- **Yaratıcılık zorunlu, tembel kalıp yasak.** Bkz. Bölüm 3.

---

## 2. Bağlam Temelli Soru Yazım Kuralları

Bunlar resmî bir "Bağlam Temelli Soru Yazım Rehberi"nden (MEB/TYYMM
kaynaklı) alınıp bu projede uygulanmış kurallardır:

1. **Bağlam geçerliliği** — Bağlam çıkarıldığında soru hâlâ ezberle
   cevaplanabiliyorsa bağlam geçersizdir; yeniden kurgulayın.
2. **Aynı bağlam, yalnızca aynı becerinin alt süreç bileşenleri için
   tekrar kullanılabilir** — asla farklı kazanım/beceriler için değil.
3. **İkinci bir soru ek bilgi taşıyorsa**, bu ek bilgi ana bağlamla
   BİRLİKTE kullanılmalı, tek başına cevaplanabilir olmamalıdır.
4. **Bağlam cevabı doğrudan ele vermemeli** — örtük/dolaylı olmalı.
5. **Soru köklerinde kişisel isim kullanılmaz.** ("Ayşe bir deney
   yapıyor..." YANLIŞ.)
6. **Öncüllü (premise-laden) ifadeler kullanılmaz** — soru kökü, cevabı
   ima eden bir önyargı/varsayım içermemeli.
7. **Etkinlik tasarımları müfredatın "Öğrenme Yaşantıları" bölümünü esas
   almalı**, beceriyi kademeli (basamaklı) test etmelidir.

---

## 3. "Kişi Yapıyor" Kalıbından Kaçının

Bu projenin en büyük ve tekrar eden hatası buydu — 401 sorunun 326'sı
"Bir öğrenci ..." ile başlıyordu. Kullanıcı geri bildirimi netti: **"her
soru 'x kişi şöyle yapıyor' temelinde yazılmaz."**

Varsayılan açılış cümleniz ASLA "Bir öğrenci/kişi/araştırmacı X
yapıyor..." olmasın. Bunun yerine şu çerçeveleri karıştırarak kullanın:

| Çerçeve | Örnek açılış |
|---|---|
| Olgu/fenomen odaklı | "Açık havada bırakılan bir demir çubuğun yüzeyinde..." |
| Veri/ölçüm odaklı | "Bir ürün etiketinde şu bileşenler listelenmiştir..." |
| Nesne/artefakt odaklı | "Bir laboratuvar raporunda şu gözlem kaydedilmiştir..." |
| Karşılaştırma odaklı | "Aşağıdaki tabloda dört madde karşılaştırılmaktadır..." |
| Süreç odaklı | "Bir üretim hattında şu işlem uygulanmaktadır..." |
| Senaryo/olay odaklı (kişisiz) | "Bir depolama alanında iki madde yan yana bulunmaktadır..." |

Gerektiğinde bir insan öznesi kullanmak zorunda kalırsanız (örn. bir
tarihsel bilim insanının gerçek adını anmak — Dalton, Rutherford gibi —
bu YASAK DEĞİLDİR, çünkü kurgusal bir "yerine geçen karakter" değil,
gerçek bir bilimsel olgudur), yine de cümlenin YAPISI "kişi bir şey
yapıyor" formülüne düşmesin; edilgen/nesnel çatı tercih edin.

**Otomatik kontrol:** `scripts/verify-quiz-data.mjs`, isim listesi +
"öğrenci"/"kişi" kalıp taraması yapar; tam kelime eşleşmesi kullanır
(`hasWholeWord`), bu yüzden "alkali", "metali", "aslında" gibi kelimeler
artık yanlış pozitif üretmez. `dialogue` alanı kullanan sorularda
"öğrenci" kelimesi kasıtlı olarak istisna tutulur (bkz. Bölüm 4b) — bu
formatın kendisi meşru bir istisnadır, "kişi yapıyor" tembelliği değil.

---

## 4. Görsel Bileşen Menüsü

`assets/js/quiz-engine.js` şu 7 özgün görsel türünü destekler. Hepsi
orijinal SVG/CSS çizimlerdir (hiçbir telifli materyalden izlenmemiştir).
Şema örnekleri için `assets/js/quiz-data.js` içindeki yorum satırlarına
bakın.

| Alan adı | Ne zaman kullanılır | Notlar |
|---|---|---|
| `table` | Satır/sütun karşılaştırması gereken veri | `headers`, `rows`, `caption?` |
| `chart` (bar) | Kategorik karşılaştırma | |
| `chart` (line) | Zamana/sürekli değişkene bağlı değişim | |
| `chart` (ph) | Yalnızca asit-baz/pH temalı konular | Başka temada KULLANMAYIN |
| `orbitalBoxes` | Yalnızca atom/orbital temalı konular | ⚠️ Bkz. Bölüm 8 tuzak #1 |
| `circleCompare` | Herhangi bir sayısal büyüklük karşılaştırması (yarıçap, kütle, oran, istihdam sayısı...) — **atoma özgü değildir**, her konuda kullanılabilir | |
| `periodicHighlight` | Yalnızca periyodik tablo/element yerleşimi temalı konular | ⚠️ Bkz. Bölüm 8 tuzak #2 |
| `pictograms` (GHS) | Güvenlik/tehlike temalı konular | Geçerli kodlar: `flame`, `oxidizing`, `explosive`, `gas`, `corrosive`, `toxic`, `irritant`, `health-hazard`, `environment` |
| `objectIcons` | Gündelik nesne/laboratuvar ekipmanı görselleştirme | Geçerli tipler: `detergent`, `battery`, `toothpaste`, `soda`, `vinegar`, `beaker`, `flask`, `glove`, `extinguisher`, `pill`, `foil` |

Her soruda **en fazla bir** görsel alanı kullanın. Yeni bir konu, bu
listede olmayan bir görsel türü gerektiriyorsa (örn. mol-oran diyagramı,
titrasyon eğrisi, gaz P-V-T simülasyonu), `quiz-engine.js` içine
`render...()` deseniyle (bkz. mevcut fonksiyonlar) yeni bir fonksiyon
ekleyip `createQuestionCard()` içinde çağırın — motor bu şekilde
genişlemeye açık tasarlanmıştır.

---

## 4b. Kitap-Tarzı Soru Formatları (Şekil değil, SORUNUN YAPISI)

Piyasa kitapları (ve MEB kitabı) sadece görsel çeşitliliğiyle değil,
**soru köklerinin yapısıyla** da özgün hissettirir: tek bir "X nedir?"
sorusu yerine çoklu ifade kombinasyonu, eşleştirme, öğrenci görüşü
karşılaştırması, D/Y kontrol listesi gibi kalıplar kullanırlar. Aşağıdaki
4 alan, Bölüm 4'teki görsel bileşenlerle **birlikte** kullanılabilir
(örn. `pictograms` + `statements` aynı soruda bir arada durabilir);
sorunun puanlanması yine standart `options`/`correct` (5 şık, 0-4 indeks)
üzerinden yapılır — motorun puanlama mantığı değişmez, yalnızca bağlam
kutusu zenginleşir.

| Alan adı | Ne zaman kullanılır | Şema |
|---|---|---|
| `statements` | "I, II, III" kombinasyon sorusu (ÖSYM/MEB tarzı çok yaygın kalıp) | `string[]` (otomatik I, II, III... numaralanır); `options` genelde `["Yalnız I","Yalnız II","I ve II",...]` şeklinde kombinasyon şıkları olur |
| `dialogue` | Farklı akıl yürütmeleri karşılaştırıp kavram yanılgısı ayıklamak istediğinizde | `{who, text}[]` — `who` alanına gerçek isim YAZMAYIN, "Öğrenci A/B/C" gibi nötr etiket kullanın |
| `matchPairs` | İki sütunlu eşleştirme bağlamı (sol numaralı, sağ harfli) | `{left: string[], right: string[]}` — gerçek soru bu bağlamdan TEK bir eşleşmeyi sorar (örn. "2 numaralı öge hangi harfle eşleşir?") |
| `checklist` | D/Y ifade grubu üzerinden "kaç tanesi doğrudur/yanlıştır" tarzı soru | `string[]` — kutucuklar yalnızca görseldir, işaretlenemez; gerçek cevap MC şıklarında |

**`pictograms` ile eşleştirme:** Birden fazla GHS simgesini tek soruda
göstermek ve etiketlerini gizleyip harflendirmek isterseniz
`pictograms: { codes: [...], hideLabels: true }` kullanın — simgeler
altında "Patlayıcı" yazısı yerine a/b/c harfi görünür, gerçek tanım
`statements` ile ayrı verilir (bkz. `assets/js/quiz-data.js` içindeki
`guvenlik` modülündeki örnek).

**"Öğrenci A/B/C" formatı Bölüm 3'teki yasağı ihlal etmez mi?**
Hayır — Bölüm 3'ün yasakladığı şey, sorunun **varsayılan açılışının**
her seferinde "bir öğrenci X yapıyor" tekrarına düşmesidir (tembel,
monoton bir kalıp). `dialogue` formatı bunun tam tersi: 2-3 FARKLI
görüşü yan yana koyup öğrenciden hangisinin bilimsel olarak doğru
olduğunu ayırt etmesini ister — bu, kavram yanılgılarını yüzeye çıkarmak
için pedagojik olarak kanıtlanmış, kasıtlı ve seyrek kullanılması
gereken bir tekniktir; her sorunun varsayılanı yapmayın.

---

## 5. Soru Şeması ve Şıklar

- Zorunlu alanlar: `difficulty` (`"kolay"|"orta"|"zor"`), `kazanim`,
  `text`, `options` (**tam 5 eleman**), `correct` (0-4 indeks), `explain`.
- `context` neredeyse her zaman kullanılmalıdır (bkz. Bölüm 2, kural 1).
- Şıkların ekranda gösterimi motor tarafından otomatik yapılır
  (`String.fromCharCode(65 + i)` → **büyük harf A, B, C, D, E**). Veri
  dosyasında şıklara harf eklemeyin, yalnızca metinlerini yazın.
- Her modülde hedef: **50 soru**, dağılım **17 kolay / 17 orta / 16 zor**.
- **Doğru cevap dağılımı hem dengeli HEM gerçekten karışık olmalı** —
  her harften ~10 tane olmalı VE bu 10'luk gruplar birbirini ardışık
  takip etmemelidir. Bkz. Bölüm 8 tuzak #4 — bu proje canlıya çıktıktan
  SONRA fark edilen ciddi bir hataydı.
- Açık uçlu sorular `quiz-data.js`'e YAZILMAZ (uygulama motoru yalnızca
  çoktan seçmeliyi puanlar); açık uçlu sorular yalnızca `defter/index.html`
  içinde, cevap satırlarıyla (`.cevap-satir`) kullanılır.

---

## 6. Dosya Yapısı

```
[yeni-proje]/
├── index.html                    Ana sayfa (nav.js'i kullanır)
├── yanlislarim.html               "Yanlışlarım" tekrar sayfası
├── moduller/
│   └── 0N-unite-adi.html          Her ünite için bir sayfa
├── defter/
│   └── index.html                 Basılabilir Ders Defteri (kendi <style>'ını taşır)
├── assets/
│   ├── css/style.css               Tüm tasarım sistemi (JENERİK, dokunmayın)
│   └── js/
│       ├── quiz-engine.js          Render motoru (JENERİK, dokunmayın —
│       │                           yeni görsel türü eklemek dışında)
│       ├── quiz-data.js            SORU BANKASI (konuya özel, siz yazarsınız)
│       ├── wrong-questions.js      Yanlışlarım motoru (JENERİK)
│       └── nav.js                  Üst menü (konuya göre LINKS dizisini güncelleyin)
├── scripts/
│   └── verify-quiz-data.mjs        Doğrulama betiği (JENERİK)
└── docs/
    └── ICERIK-URETIM-REHBERI.md    Bu belge
```

**"JENERİK"** işaretli dosyaları olduğu gibi kopyalayın, içeriklerine
dokunmayın (yalnızca `[SİTE ADI]` gibi köşeli parantezli yer
tutucuları doldurun). Diğerlerini konunuza göre yeniden yazın.

---

## 7. İş Akışı (Yeni Bir Ünite/Modül Eklerken)

1. **Kazanım kodlarını toplayın.** Hangi müfredat/programa göre
   çalışıyorsanız oradan kazanım kodu + açıklamasını alın.
2. **Referans materyalleri (varsa) inceleyin** — yalnızca konu kapsamı,
   soru tarzı ve zorluk seviyesi için ilham amaçlı. Hiçbir cümleyi/görseli
   birebir almayın (Bölüm 1).
3. **Taslağı bir çalışma alanında (scratch/worktree) yazın**, doğrudan
   ana dosyaya değil — 50 sorunun tamamını tek seferde ana `quiz-data.js`
   içine yazmak, hata ayıklamayı zorlaştırır.
   - Zorluk hedefine göre bölümleyin: `/* ==== KOLAY ==== */` (17),
     `/* ==== ORTA ==== */` (17), `/* ==== ZOR ==== */` (16).
   - Görselleri Bölüm 4'teki menüden konuya uygun şekilde dağıtın —
     her modülde en az birkaç farklı görsel türü kullanmaya çalışın.
   - Bölüm 3'teki çerçeveleri karıştırarak yazın, "kişi yapıyor"
     kalıbına varsayılan olarak düşmeyin.
4. **Doğrulayın:**
   ```
   node scripts/verify-quiz-data.mjs [taslak-dosya-yolu] --count=50
   ```
   Sorun bulunursa (tekrar soru kökü, dengesiz/bloklu cevap dağılımı,
   isim/kalıp taraması) düzeltip tekrar çalıştırın. **"✅ TÜM MODÜLLER
   TEMİZ" çıktısı almadan bir sonraki adıma geçmeyin.**
5. **Cevap dağılımını dengelerken rastgele karıştırın, sırayla
   doldurmayın.** Örnek Python deseni:
   ```python
   import random
   targets = [0]*10 + [1]*10 + [2]*10 + [3]*10 + [4]*10
   random.shuffle(targets)
   # her soru i için: mevcut correct != targets[i] ise
   # options[correct] ile options[targets[i]] metinlerini takas edin,
   # correct = targets[i] yapın.
   ```
   Sıralı doldurma (`for i in range(50): ilk uygun boş harfe ata`)
   KULLANMAYIN — bu, art arda gelen sorularda aynı harfin tekrarlandığı
   tahmin edilebilir bir örüntü yaratır (bkz. Bölüm 8 tuzak #4).
6. **Ana dosyaya entegre edin** (`assets/js/quiz-data.js`'teki ilgili
   `QUIZ.<anahtar>` dizisine ekleyin/değiştirin), `nav.js`'teki `LINKS`
   dizisine ve `index.html`'deki `cards` dizisine ünitenizi ekleyin.
7. **Tarayıcıda test edin** (Playwright veya elle): modül sayfası
   konsol hatasız açılmalı, her görsel türü doğru render olmalı, bir
   soruyu cevaplayıp geri bildirim (doğru/yanlış vurgusu) çalıştığını
   doğrulayın.
8. **Ders Defterini güncelleyin** (isteğe bağlı ama önerilir) —
   `defter/index.html`'e yeni ünite bloğunu ekleyin (Bölüm 6'daki
   dosya yapısında `defter/index.html`'in kendi CSS'ini taşıdığını
   unutmayın), cevap anahtarı bölümünü güncelleyin.
9. **PDF üretin** (Playwright `page.pdf()` ile — bkz. mevcut projede
   kullanılan yöntem: `page.goto()` → `page.pdf({format:'A4',
   printBackground:true})`).
10. **Commit + PR açın.** Asla kullanıcı onayı almadan merge etmeyin.

---

## 8. Bilinen Tuzaklar (Bu Projede Gerçekten Yaşandı)

1. **`orbitalBoxes` içinde boş kutu göstermek için `electrons: []`
   KULLANMAYIN** — boş dizi hiç kutu çizmez (motor, dizinin
   UZUNLUĞUNU kutu sayısı olarak kullanır). Boş bir kutu için
   `electrons: [0]` (s alt kabuğu, 1 kutu) veya `[0,0,0]` (p, 3 kutu)
   gibi sıfır DEĞERLİ elemanlar kullanın.
2. **`periodicHighlight` çok az sütun (grup) içeriyorsa CSS ızgarası
   devasa kutulara dönüşebilir.** Motor artık sabit piksel genişliği
   (`36px`/sütun) kullanıyor, bu yüzden düzeltildi — ama yeni bir grid
   tabanlı görsel türü eklerseniz `1fr` yerine sabit piksel genişlik
   kullanmayı unutmayın, aksi hâlde az sütunlu örneklerde aynı hata
   tekrarlanır.
3. **Şık harfi CSS'te görünmez olabilir** — `.qopt .bullet` için
   `color:transparent` gibi bir stil kalmışsa harfler DOM'da var ama
   ekranda boş daire olarak görünür. `color:var(--ink-faint)` (veya
   benzeri görünür bir renk) kullanıldığından emin olun.
4. **Cevap dağılımını dengelerken sıralı (sequential) doldurma
   algoritması "dengeli ama tahmin edilebilir" bir örüntü yaratır.**
   Bu projede tam olarak şu hata oluştu: her modülde 1-10. sorular
   hep B, 11-20 hep C, 21-30 hep D, 31-40 hep E, 41-50 hep A — sayı
   olarak dengeliydi (her harften 10) ama sırası hiç rastgele değildi,
   PDF'e basılıp öğrencilere dağıtıldıktan SONRA fark edildi. Bölüm
   7 adım 5'teki `random.shuffle` desenini kullanın ve
   `verify-quiz-data.mjs`'in "bloklu örüntü" uyarısını ciddiye alın.
5. **"Bir öğrenci ... yapıyor" kalıbına varsayılan olarak düşme
   eğilimi güçlüdür** — 401 sorunun 326'sı bu kalıpla başlamıştı.
   Bilinçli çeşitlendirme (Bölüm 3) olmadan yazmayın.
6. **Telif materyalini asla birebir/yakın parafraz kopyalamayın** —
   yalnızca konu kapsamı ve stil için referans alın, tüm metni ve
   görselleri sıfırdan, özgün olarak yazın/çizin.

---

## 9. Sınıf/Ders Bağımsız Kısımlar vs. Özelleştirilecek Kısımlar

| Bileşen | Durum |
|---|---|
| `quiz-engine.js`, `style.css`, `wrong-questions.js` | Jenerik — aynen kullanın |
| 7 görsel bileşen (Bölüm 4) | Jenerik — yeni tema/konuda da çalışır |
| Doğrulama betiği (`verify-quiz-data.mjs`) | Jenerik — parametrik |
| Bu rehberin kuralları (Bölüm 2-3-5) | Jenerik — her konuda geçerli |
| `quiz-data.js` içeriği (400 gerçek soru) | **Her konuda sıfırdan yazılır** |
| Bespoke etkinlikler (pH lab, atom inşa vb.) | **Her konuda konuya özel tasarlanır** — ancak UI deseni (tıkla-sınıflandır, +/- sayaç, sürükle-sırala) tekrar kullanılabilir, CSS sınıfları (`.dnd-pool`, `.stepper`, `.controls`) `style.css`'te hazır |
| `defter/index.html` konu içeriği | **Her konuda sıfırdan yazılır**, kutu tipleri (Bölüm 6) jeneriktir |
| `nav.js` LINKS dizisi, `index.html` cards dizisi | Her konuda güncellenir (küçük, mekanik bir değişiklik) |
