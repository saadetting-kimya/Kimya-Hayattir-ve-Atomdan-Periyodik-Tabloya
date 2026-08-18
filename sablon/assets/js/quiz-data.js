/* =========================================================
   [SİTE ADI] — quiz-data.js  (ŞABLON / ÖRNEK DOSYA)
   ---------------------------------------------------------
   Bu dosya gerçek bir soru bankası DEĞİLDİR. Her görsel bileşen
   türünden birer örnek içerir; yeni bir konuya başlarken bu
   dosyayı SİLİP kendi 50 soruluk modül dosyalarınızla
   değiştireceksiniz (bkz. docs/ICERIK-URETIM-REHBERI.md).

   QUIZ nesnesinin her anahtarı bir "modül"e (konuye) karşılık
   gelir ve moduller/*.html sayfalarındaki `QUIZ.<anahtar>`
   çağrısıyla eşleşmelidir (bkz. nav.js'teki LINKS dizisi).

   Zorunlu alanlar: difficulty ("kolay"|"orta"|"zor"), kazanim,
   text, options (tam 5 eleman), correct (0-4 arası indeks).
   context isteğe bağlıdır ama neredeyse her zaman kullanılmalıdır
   (bkz. rehberdeki "bağlam geçerliliği" kuralları).
   En fazla BİR görsel alanı (table/chart/orbitalBoxes/circleCompare/
   periodicHighlight/pictograms/objectIcons) aynı anda kullanın.
   ========================================================= */

export const QUIZ = {

  ornek: [

    /* ---------------------------------------------------------
       1) EN YALIN FORM: context + text + options + correct + explain
       Görsel yok — sade, doğrudan çıkarım gerektiren bir soru.
       --------------------------------------------------------- */
    {
      difficulty: "kolay",
      kazanim: "[KAZANIM KODU] — [kazanım açıklaması]",
      context: "Bir kapta bulunan tuzlu su, ısıtılarak buharlaştırılmış; buhar soğutulup yoğunlaştırıldığında kapta yalnızca saf su birikmiştir, kabın dibinde ise tuz kristalleri kalmıştır.",
      text: "Bu ayırma yöntemi hangi kavramla en doğru şekilde adlandırılır?",
      options: [
        "Damıtma (kaynama noktası farkına dayanan fiziksel ayırma)",
        "Kimyasal tepkime",
        "Süblimleşme",
        "Elektroliz",
        "Nötrleşme"
      ],
      correct: 0,
      explain: "Farklı kaynama noktalarına sahip bileşenlerin (su ve tuz) buharlaştırma-yoğunlaştırma yoluyla ayrılması damıtmadır; madde kimliği değişmediğinden fiziksel bir yöntemdir."
    },

    /* ---------------------------------------------------------
       2) table — satır/sütun karşılaştırması gerektiren veri
       question.table = { headers: [...], rows: [[...], ...], caption? }
       --------------------------------------------------------- */
    {
      difficulty: "orta",
      kazanim: "[KAZANIM KODU] — [kazanım açıklaması]",
      table: {
        headers: ["Çözelti", "Çözünen madde kütlesi (g)", "Çözücü hacmi (mL)"],
        rows: [
          ["A", "10", "500"],
          ["B", "10", "250"],
          ["C", "20", "500"]
        ],
        caption: "Üç farklı çözeltinin hazırlanış verileri"
      },
      context: "Derişim, çözünen madde miktarının çözücü/çözelti miktarına oranı ile belirlenir.",
      text: "Tabloya göre bu üç çözelti derişimlerine göre büyükten küçüğe sıralandığında hangi sıralama doğrudur?",
      options: [
        "C > B > A",
        "A > B > C",
        "B > C > A",
        "Üçü de eşit derişimdedir",
        "A > C > B"
      ],
      correct: 0,
      explain: "Derişim = kütle/hacim: A için 10/500=0,02; B için 10/250=0,04; C için 20/500=0,04... (örnek amaçlıdır, kendi sorunuzda sayıları tutarlı kurgulayın)."
    },

    /* ---------------------------------------------------------
       3) chart (type: "bar") — kategorik karşılaştırma
       --------------------------------------------------------- */
    {
      difficulty: "orta",
      kazanim: "[KAZANIM KODU] — [kazanım açıklaması]",
      chart: {
        type: "bar",
        title: "Dört farklı katalizör kullanıldığında tepkimenin tamamlanma süresi",
        xLabel: "Katalizör türü",
        yLabel: "Süre (saniye)",
        data: [
          { label: "Katalizörsüz", value: 180 },
          { label: "Katalizör X", value: 40 },
          { label: "Katalizör Y", value: 65 },
          { label: "Katalizör Z", value: 22 }
        ]
      },
      context: "Bir tepkimenin tamamlanma süresi, kullanılan katalizöre göre değişmektedir.",
      text: "Grafiğe göre tepkime hızını en fazla artıran (süreyi en fazla kısaltan) katalizör hangisidir?",
      options: ["Katalizör Z", "Katalizör X", "Katalizör Y", "Katalizörsüz durum", "Grafikten belirlenemez"],
      correct: 0,
      explain: "En kısa süre Katalizör Z'ye (22 saniye) aittir; süre kısaldıkça tepkime hızı artmış demektir."
    },

    /* ---------------------------------------------------------
       4) chart (type: "line") — sürekli/zamana bağlı değişim
       data noktaları {x, y} çiftleridir.
       --------------------------------------------------------- */
    {
      difficulty: "zor",
      kazanim: "[KAZANIM KODU] — [kazanım açıklaması]",
      chart: {
        type: "line",
        title: "Kapalı bir kapta zamanla ürün derişiminin değişimi",
        xLabel: "Süre (dk)",
        yLabel: "Derişim (mol/L)",
        data: [
          { x: 0, y: 0 },
          { x: 2, y: 0.3 },
          { x: 4, y: 0.5 },
          { x: 6, y: 0.58 },
          { x: 8, y: 0.6 },
          { x: 10, y: 0.6 }
        ]
      },
      context: "Grafikte 8. dakikadan sonra eğrinin yataylaştığı görülmektedir.",
      text: "Eğrinin 8. dakikadan sonra yataylaşması en doğru şekilde nasıl yorumlanır?",
      options: [
        "Tepkime dengeye ulaşmış, net derişim değişimi durmuştur",
        "Tepkime tamamen durmuş, hiçbir moleküler hareket kalmamıştır",
        "Ürün miktarı sıfıra inmiştir",
        "Ölçüm cihazı arızalanmıştır",
        "Tepkime tersine dönmüştür"
      ],
      correct: 0,
      explain: "Eğrinin yataylaşması, ileri ve geri tepkime hızlarının eşitlendiği (dinamik) denge durumuna işaret eder; bu, molekül hareketinin durduğu anlamına gelmez."
    },

    /* ---------------------------------------------------------
       5) chart (type: "ph") — yalnızca pH/asit-baz temalı
       konularda anlamlıdır; başka bir temada hiç kullanmayın.
       data: [{ label, ph }, ...]
       --------------------------------------------------------- */
    {
      difficulty: "kolay",
      kazanim: "[KAZANIM KODU] — [kazanım açıklaması]",
      chart: {
        type: "ph",
        title: "Dört gündelik maddenin pH ölçümü",
        data: [
          { label: "Madde A", ph: 2.5 },
          { label: "Madde B", ph: 7.0 },
          { label: "Madde C", ph: 9.5 },
          { label: "Madde D", ph: 12.0 }
        ]
      },
      text: "pH cetveline göre en güçlü asidik özellik hangi maddede gözlenir?",
      options: ["Madde A", "Madde B", "Madde C", "Madde D", "Hepsi eşit asidiktir"],
      correct: 0,
      explain: "pH değeri 0'a ne kadar yakınsa asidik özellik o kadar güçlüdür; dört madde arasında en düşük pH Madde A'ya (2,5) aittir."
    },

    /* ---------------------------------------------------------
       6) orbitalBoxes — atom/orbital temalı konularda kullanılır.
       Her alt kabuk için electrons dizisinin uzunluğu = kutu
       sayısı; her elemanın değeri (0/1/2) o kutudaki ok sayısıdır.
       BOŞ bir kutu göstermek için 0 kullanın, [] KULLANMAYIN
       (boş dizi hiç kutu çizmez — bilinen bir tuzak).
       --------------------------------------------------------- */
    {
      difficulty: "orta",
      kazanim: "[KAZANIM KODU] — [kazanım açıklaması, örn. orbital enerjisi]",
      orbitalBoxes: {
        subshells: [
          { label: "2s", electrons: [2] },
          { label: "2p", electrons: [1, 1, 0] }
        ],
        caption: "Bir atomun 2. enerji düzeyindeki kısmi elektron dizilimi"
      },
      context: "Görseldeki dizilimde 2p alt kabuğundaki üç kutudan ikisi tek elektronla dolu, biri boştur.",
      text: "Bu dizilim hangi kuralla ilgili bir sorunu örnekler?",
      options: [
        "Hund kuralına göre üçüncü elektron de boş kutuya, aynı yönde spinle yerleşmelidir",
        "Pauli ilkesi ihlal edilmiştir",
        "Dizilim tamamen doğrudur, değiştirilmemelidir",
        "2s alt kabuğu hatalıdır",
        "Bu bir aufbau ilkesi ihlalidir"
      ],
      correct: 0,
      explain: "Üçüncü elektron eklenirken önce boş kutu tercih edilmelidir (Hund kuralı); görseldeki dizilim üçüncü elektron eklenmeden önceki ara durumu gösteriyor olabilir."
    },

    /* ---------------------------------------------------------
       7) circleCompare — büyüklük/oran karşılaştırması
       (yarıçap, kütle, istihdam oranı, derişim... her sayısal
       büyüklük için kullanılabilir, atoma özgü değildir)
       --------------------------------------------------------- */
    {
      difficulty: "orta",
      kazanim: "[KAZANIM KODU] — [kazanım açıklaması]",
      circleCompare: {
        title: "Üç kabın gaz basıncı karşılaştırması (temsilî)",
        unit: "atm",
        items: [
          { label: "Kap 1", value: 1.0 },
          { label: "Kap 2", value: 2.5 },
          { label: "Kap 3", value: 4.0 }
        ]
      },
      context: "Görseldeki üç kap aynı sıcaklıkta, aynı hacimde fakat farklı miktarda gaz içermektedir.",
      text: "Daire büyüklüklerine göre en fazla gaz molekülü hangi kapta bulunmaktadır?",
      options: ["Kap 3", "Kap 1", "Kap 2", "Üçünde de eşit sayıda molekül vardır", "Görselden belirlenemez"],
      correct: 0,
      explain: "Sabit sıcaklık ve hacimde basınç, gaz miktarıyla doğru orantılıdır; en yüksek basınca (4,0 atm) sahip Kap 3 en fazla molekül içerir."
    },

    /* ---------------------------------------------------------
       8) periodicHighlight — yalnızca periyodik tablo/element
       yerleşimi temalı konularda kullanılır. period/group
       sayıları verilmeyen hücreler otomatik boş bırakılır.
       --------------------------------------------------------- */
    {
      difficulty: "kolay",
      kazanim: "[KAZANIM KODU] — [kazanım açıklaması]",
      periodicHighlight: {
        caption: "Periyodik tabloda vurgulanan grup",
        cells: [
          { period: 2, group: 1, symbol: "Li", highlighted: true },
          { period: 3, group: 1, symbol: "Na", highlighted: true },
          { period: 4, group: 1, symbol: "K", highlighted: true }
        ]
      },
      context: "Görselde vurgulanan elementlerin tümü tek değerlik elektronuna sahiptir ve suyla şiddetli tepkime verir.",
      text: "Bu grup hangi ortak adla anılır?",
      options: ["Alkali metaller", "Halojenler", "Soy gazlar", "Toprak alkali metaller", "Geçiş metalleri"],
      correct: 0,
      explain: "Tek değerlik elektronlu, suyla şiddetli tepkimeye giren 1. grup elementleri alkali metaller olarak adlandırılır."
    },

    /* ---------------------------------------------------------
       9) pictograms — GHS tehlike sembolleri (güvenlik temalı
       konularda). Dizi olarak (kod listesi) veya {title, codes}
       biçiminde verilebilir. Geçerli kodlar quiz-engine.js
       içindeki GHS_ICONS/GHS_LABELS sabitlerinde listelidir:
       flame, oxidizing, explosive, gas, corrosive, toxic,
       irritant, health-hazard, environment.
       --------------------------------------------------------- */
    {
      difficulty: "kolay",
      kazanim: "[KAZANIM KODU] — [kazanım açıklaması]",
      pictograms: ["corrosive"],
      context: "Bir laboratuvar şişesinin etiketinde yukarıdaki uyarı simgesi bulunmaktadır.",
      text: "Bu simge en doğrudan hangi tehlikeyi bildirir?",
      options: ["Deri ve göze ciddi hasar verme (aşındırıcılık)", "Kolay tutuşabilirlik", "Basınçlı gaz içerme", "Çevreye zararlılık", "Radyoaktiflik"],
      correct: 0,
      explain: "Aşındırıcı piktogramı, maddenin deri ve gözde ciddi hasara yol açabileceğini bildirir."
    },

    /* ---------------------------------------------------------
       10) objectIcons — gündelik nesne/laboratuvar ekipmanı
       ikonları. Dizi (tip listesi) veya {title, items:[{type,label?}]}
       biçiminde verilebilir. Geçerli tipler quiz-engine.js
       içindeki OBJECT_ICONS/OBJECT_LABELS sabitlerinde listelidir:
       detergent, battery, toothpaste, soda, vinegar, beaker,
       flask, glove, extinguisher, pill, foil.
       --------------------------------------------------------- */
    {
      difficulty: "orta",
      kazanim: "[KAZANIM KODU] — [kazanım açıklaması]",
      objectIcons: { title: "Bir mutfakta bulunan iki ürün", items: [{ type: "vinegar", label: "Sirke" }, { type: "detergent", label: "Çamaşır suyu" }] },
      context: "Görseldeki iki ürün karıştırıldığında tahriş edici gaz açığa çıkabilmektedir.",
      text: "Bu iki ürünün güvenli kullanımı için en doğru yaklaşım hangisidir?",
      options: ["Ayrı zamanlarda, karıştırmadan kullanmak", "Daha güçlü temizlik için birlikte kullanmak", "Yalnızca kapalı ortamda birlikte kullanmak", "Miktar azsa karıştırmak güvenlidir", "Bu iki ürün arasında hiçbir risk yoktur"],
      correct: 0,
      explain: "Asidik (sirke) ve klor bazlı (çamaşır suyu) ürünlerin karışımı tehlikeli gaz oluşturabileceğinden ayrı kullanılmalıdır."
    },

    /* ---------------------------------------------------------
       11) Açık uçlu soru örneği (ders defteri / basılabilir
       materyal için — uygulama motoru şu an yalnızca çoktan
       seçmeli soruları puanlar; açık uçlu sorular yalnızca
       defter/index.html içinde, cevap satırlarıyla kullanılır,
       quiz-data.js'e eklenmez). Bkz. docs/ICERIK-URETIM-REHBERI.md
       "Açık Uçlu Sorular" bölümü.
       --------------------------------------------------------- */

    {
      difficulty: "zor",
      kazanim: "[KAZANIM KODU] — [kazanım açıklaması]",
      context: "Bir öğretim materyalinde şu iddia tartışılmaktadır: 'Bir modelin istisnaları olması, o modelin değersiz olduğu anlamına gelir.'",
      text: "Bu iddiaya karşı en güçlü bilimsel itiraz hangisidir?",
      options: [
        "Yararlı bir model çoğu durumda doğru tahmin yapabilir; istisnaların varlığı modelin basitleştirilmiş bir araç olduğunu gösterir, değersiz olduğunu değil",
        "İddia tamamen doğrudur, istisnası olan her model terk edilmelidir",
        "Bilimsel modellerde hiçbir zaman istisna bulunmaz",
        "İstisnalar yalnızca kimya alanında görülür",
        "Bu iddianın bilimsel yöntemle hiçbir ilgisi yoktur"
      ],
      correct: 0,
      explain: "Bu tür bir soru; ezbere değil akıl yürütmeye dayalı, zor seviye bir örnektir — REHBER'deki 'ezberden bağımsız bağlam' ilkesini gösterir."
    }
  ]

};
