# AtomLab 9 — Kalıcı Kurallar

Bu dosya her oturumun başında otomatik okunur. Buradaki kurallar,
kullanıcının (Saadettin) aynı talimatları tekrar tekrar yazmak zorunda
kalmaması için kalıcı hale getirilmiştir ve benim kendi varsayılan
alışkanlıklarımdan **önceliklidir**. Yeni bir standing-rule (tek
seferlik görev değil, kalıcı tercih) verildiğinde, aynı oturumda bu
dosyaya eklenir.

## 1. PİKTOGRAM OLAYI — somut ders çıkarılan vaka (telif + doğruluk)

Ne oldu: Kullanıcı "evrensel sembolleri (GHS piktogramları) direkt
kullan" dedi. Ben önce MEB kitabından görsel kırpıp kullandım —
YANLIŞ (yayınevi telifi). Uyarılınca "kopya etmiyorum" diyerek bu
kez GERÇEK GHS standardına benzemeyen, anlamsız, kendi uydurduğum
elle-çizim semboller koydum — bu da YANLIŞ (artık doğruluk/işlevsellik
sorunu: piktogram gerçek GHS'yi temsil etmiyor). Doğru çözüm: piktogramın
GERÇEK RESMİ/EVRENSEL kaynağını (GHS Purple Book / Wikimedia'nın resmi
SVG'leri) bulup onu kullanmaktı — ne kopya ne uydurma, standardın
kendisi.

**Genel kural:** "Yayınevi çizimini kopyalama" talimatı ASLA "o zaman
ben uydururum, gerçeğe benzemesi şart değil" anlamına gelmez.
- Evrensel/standart/resmi bir kaynağı olan bir şey (GHS piktogramı,
  periyodik tablo formatı, SI birimleri vb.) varsa → o GERÇEK kaynak
  bulunup kullanılır (`assets/img/ghs/` içindeki resmi SVG'ler gibi).
- Resmi bir kaynağı olmayan ama bilimsel/tarihsel bir gerçekliği
  temsil eden şey (atom modelleri, deney düzenekleri vb.) varsa →
  özgün ama BİLİMSEL OLARAK DOĞRU ve tanınabilir çizilir.
- "Kopya etmemek" hiçbir zaman "yanlış/anlamsız bir şey uydurmak"
  için bahane olamaz.

## 2. Paylaşılan örnekler = TARZ REHBERİ, ne kopya ne görmezden gelme

Kullanıcı farklı yayınların ve MEB kitabının çizgi grafiklerini, kap/
beher şekillerini, atom modellerini, soru köklerini paylaştığında
amacı **"bunu birebir kopyala"** DEĞİL, **"bu TARZI/yaklaşımı referans
al, daha da geliştirilmiş, daha ileri seviye soru kökleri/önermeler
üret"** demektir. Buna "tamam" dedikten sonra sessizce eski
alışkanlığıma dönmek — tekrarlanan, kabul edilemez bir hata.

Somut adım: paylaşılan örneği aç, incele, hangi TASARIM İLKESİNİ
gösterdiğini çıkar (örn. "çoklu örnekle karşılaştırmalı öğretme",
"gerçekçi laboratuvar bağlamı", "kavram yanılgısı hedefleyen
çeldirici" gibi) — sonra o ilkeyi kullanarak ÖZGÜN ve DAHA İLERİ bir
versiyon üret. Kopyalamamak = ilkeyi görmezden gelmek değildir.

## 3. Kimya öğretmeni + yazılım uzmanı gibi düşün — FORMÜL YASAK

Her soru/görsel kararı, konuyu en iyi nasıl anlatacağını bilen bir
kimya öğretmeni ile bunu yazılımla en iyi nasıl göstereceğini bilen
bir uzmanın ortak kararıymış gibi, TEK TEK değerlendirilir.
- Her soruda görsel şart DEĞİL. Ama görsel kullanılsın/kullanılmasın,
  bu karar o sorunun içeriğinden gelir — önceden belirlenmiş bir
  "formül/tarif" değil (örn. "her modülde 2 dialogue + 2 matchPairs +
  2 statements + 2 checklist" gibi mekanik dağıtım YASAK).
- Bir kalıp bulup onu tüm sorulara/modüllere mekanik olarak
  uygulamak — biçim çeşitlendirmede bile — düzeltilmeye çalışılan
  yapmacıklığın ta kendisidir.
- Her modülün mevcut içeriği önce okunur; gerçekten tekdüze olan
  kısımlar hedeflenir, zaten çeşitli/iyi olan kısımlara dokunulmaz.

## 4. "Tamam" sonrası sessiz geri dönüş — ZORUNLU ÖZ-DENETİM

Bir yaklaşım değişikliğini kabul ettikten ("tamam" dedikten) SONRA,
işi teslim etmeden/commit etmeden önce kısaca kendimi denetlerim:
"Bu çıktı, kullanıcının az önce tarif ettiği yaklaşımı gerçekten
yansıtıyor mu, yoksa ben yine eski alışkanlığıma mı döndüm?" Şüphe
varsa, commit etmeden ÖNCE somut bir örnekle gösterip onay isterim —
sessizce ilerlemem ve "tamam" demiş olmayı yeterli saymam.

## 5. Görsellik

- Doğası gereği görsel olan konular (atom modelleri, orbitaller,
  periyodik tablo, grafikler vb.) SADECE metinle anlatılmaz — ama
  madde 3'teki formül yasağı geçerli: her soruya zorla görsel
  eklenmez, gerçekten görsel gerektiren yerlere eklenir.
- Mevcut render bileşenleri yetmiyorsa (`assets/js/quiz-engine.js`
  içindeki render* fonksiyonları), var olanı zorlamak yerine yeni
  bir bileşen yazılır.

## 6. Açıklama (explain) kalitesi

- `explain` alanları yalnızca "doğru cevap bu çünkü X" değil,
  öğretici/eğitsel bir anlatım içerir — kavramı gerçekten öğretir.

## 7. Soru bankası kalite kontrolü (her değişiklikten sonra ZORUNLU)

```
node sablon/scripts/verify-quiz-data.mjs assets/js/quiz-data.js --count=50
```

- Her modül: 50 soru, kolay/orta/zor = 17/17/16.
- Tekrar (dup) yok, isim/kalıp taraması temiz, A-E cevap dağılımı
  dengeli VE gerçekten karışık (bloklar halinde değil).
- Commit/push ÖNCESİ bu script mutlaka çalıştırılır ve temiz çıkmalıdır.

## 8. Test disiplini

- Yeni bir görsel bileşen veya soru değişikliği, geçici bir test
  harness (`_t.html` + `python3 -m http.server` + Playwright
  screenshot) ile GÖRSEL olarak doğrulanır, commit'ten önce. Test
  dosyaları commit edilmeden silinir.

## 9. Motor dosyalarının çifte bakımı

- `assets/js/quiz-engine.js` ve `assets/css/style.css` içine yapılan
  her motor değişikliği, `sablon/assets/js/quiz-engine.js` ve
  `sablon/assets/css/style.css` içine de aynen yansıtılır (şablon
  sistemi senkron kalmalı).

## 10. Belirsizlik anında

- Bir talimat yoruma açıksa veya önceki bir kararla çelişiyor
  gözüküyorsa, VARSAYIM YAPIP DEVAM ETMEK yerine anlayışımı kısaca
  (1-2 cümle) özetleyip onay istenir. Özellikle bu dosyadaki
  kurallardan birinden sapma gerektiren bir durum varsa.

## 11. Genel iş akışı

- Branch: `claude/burdan-devam-a2wg3u`.
- Küçük, odaklı commit'ler, açıklayıcı Türkçe commit mesajlarıyla.
- Her modül bitince: QA script → görsel test → commit → push.
