# AtomLab 9 — Kalıcı Kurallar

Bu dosya her oturumun başında otomatik okunur. Buradaki kurallar
kullanıcının (Saadettin) tekrar tekrar yazmak zorunda kalmaması için
kalıcı hale getirilmiştir ve benim kendi varsayılan alışkanlıklarımdan
**önceliklidir**. Yeni bir standing-rule (tek seferlik görev değil, kalıcı
tercih) verildiğinde, aynı oturumda bu dosyaya eklenmelidir.

## 1. Referans materyal disiplini

- Her modül/soru üzerinde çalışmadan ÖNCE, o modülün konusuyla ilgili
  kullanıcının paylaştığı TÜM örnekler ve `kimya_9 1. tema.pdf` (MEB
  kitabı) yeniden taranır. Körü körüne önceki modülde işe yarayan bir
  kalıbı yeni modüle uygulamak YASAK — bu, kullanıcının en çok
  şikayet ettiği "yapmacık/tekdüze" sorunun ta kendisidir.
- Kitaptaki şekiller/görseller/grafikler referans alınır, onlardan
  ilham alınarak ÖZGÜN görseller tasarlanır. "Referans al ve daha
  iyisini yap" — birebir kopya değil, kavramsal olarak daha zengin.

## 2. Telif hakkı

- Hiçbir yayınevinin (MEB dahil) özgün çizimi/kitap taraması/kırpılmış
  görseli KULLANILMAZ.
- Yalnızca şunlar serbesttir: (a) evrensel/standart ders kitabı
  gösterim konvansiyonları (örn. çekirdek+elektron bulutu diyagramı,
  orbital kutu gösterimi) — bunlar özgün SVG olarak yeniden çizilir;
  (b) resmi/kamuya açık standart kaynaklar (örn. GHS Purple Book
  piktogramları) — birebir kullanılabilir ama KAYNAĞI resmi olmalı,
  uydurma/kendi çizimim olmamalı.
- GHS piktogramları: `assets/img/ghs/` altındaki resmi SVG'ler
  kullanılır (bkz. o klasördeki README). Bunların yerine kendi elle
  çizilmiş yaklaşık versiyonumu koymak YASAK — bu daha önce yaşanmış
  ve düzeltilmiş bir hata, tekrar edilmeyecek.

## 3. Görsellik zorunluluğu

- Doğası gereği görsel olan konular (atom modelleri, orbitaller,
  periyodik tablo, grafikler vb.) SADECE metinle anlatılmaz. Gerçek,
  özgün bir görsel/diyagram bileşeni kullanılır
  (`assets/js/quiz-engine.js` içindeki render* fonksiyonları).
- Yeni bir görsel ihtiyaç ortaya çıkarsa, mevcut bileşenlerden biri
  uymuyorsa yeni bir render fonksiyonu yazılır (var olanı zorlamak
  yerine).

## 4. Format çeşitliliği — TEK KALIP YASAK

- "Kitap-tarzı" soru formatları (`statements`, `dialogue`,
  `matchPairs`, `checklist`) her modüle otomatik/eşit oranda
  dağıtılmaz. Hangi formatın kullanılacağı o modülün/o sorunun
  içeriğine göre belirlenir. Bir modülde 2 dialogue + 2 matchPairs +
  2 statements + 2 checklist gibi mekanik bir "tarif" uygulamak,
  düzeltmeye çalıştığımız tekdüzeliğin yeni bir versiyonudur.
- Her modülün mevcut içeriği önce okunur; gerçekten tekdüze/kalıplaşmış
  olan kısımlar hedeflenir, zaten çeşitli olan kısımlara dokunulmaz.

## 5. Açıklama (explain) kalitesi

- `explain` alanları yalnızca "doğru cevap bu çünkü X" değil, öğretici/
  eğitsel bir anlatım içerir — kavramı gerçekten öğretir, sınav
  gerekçesi gibi kuru geçmez.

## 6. Soru bankası kalite kontrolü (her değişiklikten sonra ZORUNLU)

```
node sablon/scripts/verify-quiz-data.mjs assets/js/quiz-data.js --count=50
```

- Her modül: 50 soru, kolay/orta/zor = 17/17/16.
- Tekrar (dup) yok, isim/kalıp taraması temiz, A-E cevap dağılımı
  dengeli VE gerçekten karışık (bloklar halinde değil).
- Commit/push ÖNCESİ bu script mutlaka çalıştırılır ve temiz çıkmalıdır.

## 7. Test disiplini

- Yeni bir görsel bileşen veya soru değişikliği, geçici bir test
  harness (`_t.html` + `python3 -m http.server` + Playwright
  screenshot) ile GÖRSEL olarak doğrulanır, commit'ten önce. Test
  dosyaları commit edilmeden silinir.

## 8. Motor dosyalarının çifte bakımı

- `assets/js/quiz-engine.js` ve `assets/css/style.css` içine yapılan
  her motor değişikliği, `sablon/assets/js/quiz-engine.js` ve
  `sablon/assets/css/style.css` içine de aynen yansıtılır (şablon
  sistemi senkron kalmalı).

## 9. Belirsizlik anında

- Bir talimat yoruma açıksa veya önceki bir kararla çelişiyor
  gözüküyorsa, VARSAYIM YAPIP DEVAM ETMEK yerine anlayışımı kısaca
  (1-2 cümle) özetleyip onay istenir. Özellikle bu dosyadaki
  kurallardan birinden sapma gerektiren bir durum varsa.

## 10. Genel iş akışı

- Branch: `claude/burdan-devam-a2wg3u`.
- Küçük, odaklı commit'ler, açıklayıcı Türkçe commit mesajlarıyla.
- Her modül bitince: QA script → görsel test → commit → push.
